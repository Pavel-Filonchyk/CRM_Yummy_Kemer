import React, { useState, useEffect }from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import _ from 'lodash'
import { ToolOutlined } from '@ant-design/icons'
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import firebase from 'firebase/app'


import { auth } from '../../firebase.config'
import Header from '../Header/Header'
import { getMenu, sendToken } from '../../core/actions/restMenuActions'
import { chooseDishes } from '../../core/actions/chooseItemsActions'

import style from './Main.module.scss'

export default function Main() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const menu = useSelector(({restMenuReducer: { menu }}) => menu)

    const [user, setUser] = useState(null)
    const [nameDish, setNameDish] = useState('nameDishRu')

    useEffect(() => {
        dispatch(getMenu())
    }, [])

    useEffect(() => {
        dispatch(sendToken({token: user?.user.accessToken}))
    }, [user])

    // useEffect(() => {
    //     signInWithEmailAndPassword(auth, 'p_filonchyk@mail.ru', 'Summer2024')
    //     .then(data => setUser(data))
    //     .catch(data => console.log(data))
    // }, [])

    // авторизация с помощью google
    useEffect(() => {
            const provider = new firebase.auth.GoogleAuthProvider()
            // signInWithPopup(app, provider)
            // .then(result => {
            //     console.log(result);
            //   })
    }, [])

    const onDishes = (id) => {
        dispatch(chooseDishes(id))
        setTimeout(() => {
          navigate('/dishes')
        }, 100) 
    }

    return (
        <div className={style.mainContainer}>
            <Header/>
            <span className={style.mainTitle}>CRM</span>
            <div className={style.wrapMenu} >
                {
                    _.filter(menu, elem => elem[nameDish]).map((item, index) => {
                        return (
                        <div className={style.wrapDish}
                            key={item.blockId}
                            onClick={() => onDishes(item.blockId)}
                        >
                            <img src={item.image} className={style.menu} alt=""/>
                            <div className={style.wrapNameDish}>
                                <span className={style.nameDish}>{item[nameDish]}</span>
                            </div>
                            <div className={style.wrapEditing}>
                                <ToolOutlined className={style.nameEditing}/>
                            </div>
                        </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
