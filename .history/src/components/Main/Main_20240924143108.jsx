import React, { useState, useEffect }from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import _ from 'lodash'
import { ToolOutlined } from '@ant-design/icons'
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

import { auth } from '../../firebase.config'
import Header from '../Header/Header'
import { getMenu, sendToken } from '../../core/actions/restMenuActions'
import { chooseDishes } from '../../core/actions/chooseItemsActions'
import ModalWrapper from '../../wrappers/ModalWrapper'

import style from './Main.module.scss'

export default function Main() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const menu = useSelector(({restMenuReducer: { menu }}) => menu)

    const [user, setUser] = useState(null)
    const [userGoogle, setUserGoogle] = useState(null)
    console.log(userGoogle)
    const [showModal, setShowModal] = useState(true)
    const [nameDish, setNameDish] = useState('nameDishRu')

    useEffect(() => {
        dispatch(getMenu())
    }, [])

    useEffect(() => {
        dispatch(sendToken({token: user?.user.accessToken}))
    }, [user])

    useEffect(() => {
        signInWithEmailAndPassword(auth, 'p_filonchyk@mail.ru', 'Summer2024')
        .then(data => setUser(data))
        .catch(data => console.log(data))
    }, [])

    useEffect(() => {
        const setItemStorage = async () => {
            if (userGoogle === 'filonchykpavel@gmail.com'){
                try {
                    await localStorage.setItem('auth', 'email')
                } catch (e) {
                    console.log(e)
                }
            }
        }
        setItemStorage()
    }, [userGoogle])
    useEffect(() => {
        const getItemStorage = async () => {
            try {
                const value = await localStorage.getItem('auth')
                if(value !== null) {
                    coa
                    setShowModal(false)
                    return value
                }
            } catch(e) {
                console.log(e)
            }
        }
        getItemStorage()
    }, [])
    const onAuth = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
        .then(result => setUserGoogle(result.user.email))
        .catch((error) => {
            console.log("Caught error Popup closed")
        })
        setShowModal(false)
    }

    const onDishes = (id) => {
        dispatch(chooseDishes(id))
        setTimeout(() => {
            if(userGoogle === 'filonchykpavel@gmail.com'){
                navigate('/dishes')
            }
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
            <ModalWrapper showModal={showModal}>
                <div className={style.modal}
                    onClick={onAuth}
                >
                    <span>ЗАРЕГИСТРИРОВАТЬСЯ</span>
                </div>
            </ModalWrapper>
        </div>
    )
}
