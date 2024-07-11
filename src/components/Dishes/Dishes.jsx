import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import _ from 'lodash'
import { Button, Form, Input } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

import Header from '../Header/Header'
import { HomeOutlined } from '@ant-design/icons'
import { addToRedact } from '../../core/actions/restMenuActions'


import style from './Dishes.module.scss'

export default function Dishes() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const dishes = useSelector(({restMenuReducer: { dishes }}) => dishes)

  const onAddToRedact = (blockItems) => {
    navigate('/redact')
    dispatch(addToRedact(blockItems))
  }

  return (
    <div className={style.wrapDishes}>
      <Header/>

      <div className={style.wrapMainPageLink}>
        <Link className={style.link} to="/">
          <HomeOutlined className={style.homePic}/>
          <span className={style.textPage}>Main</span>
        </Link>
      </div>
      <span className={style.mainTitle}>{dishes?.nameRu}</span>
      <div className={style.blockDishes}>
        {
          dishes?.dishes?.filter(item => item !== null).map((item, index) => {return(
            <div className={style.dishes} key={item.id}>
              <div className={style.wrapBtn}
                // onClick={() => onAddToCart({
                //   id: item.id,
                //   blockId: dishId
                // })}
              >
                <DeleteOutlined className={style.btn}
                  style={{fontSize: 28}}
                  //onClick={() => dispatch(deleteDish({id: item.id}))}
                />
              </div>
              <img src={item.image} className={style.picDishes} alt=""/>
              <div className={style.wrapDiscriptions}>
                <span className={style.title}>{item.nameRu}</span>
                <span className={style.discriptions}>{item.discriptionsRu}</span>
              </div>
              <div className={style.wrapBuy}>
                <span className={style.cost}>{item.amount} шт</span>
                <span className={style.cost}>{item.cost} tl</span>
              </div>
              <div className={style.wrapBtn}
                onClick={() => onAddToRedact({
                  id: item.id,
                  blockId: dishes?.blockId
                })}
              >
                <div className={style.btn}
                  style={{width: 208, marginBottom: 20}}
                >
                  Редактировать
                </div>
              </div> 
            </div>   
          )})
        }
      </div>
    </div>
  )
}
