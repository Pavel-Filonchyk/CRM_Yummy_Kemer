import React, { useState, useEffect }from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import _ from 'lodash'
import { ToolOutlined } from '@ant-design/icons'


import Header from '../Header/Header'
import { getMenu } from '../../core/actions/restMenuActions'
import { chooseDishes } from '../../core/actions/chooseItemsActions'

import style from './Main.module.scss'

export default function Main() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const menu = useSelector(({restMenuReducer: { menu }}) => menu)

    const [nameDish, setNameDish] = useState('nameDishRu')

    useEffect(() => {
        dispatch(getMenu())
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
