import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import _ from 'lodash'
import { Button, Form, Input } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

import Header from '../Header/Header'
import { HomeOutlined } from '@ant-design/icons'
import { getMenu } from '../../core/actions/restMenuActions'
import { card } from '../../core/actions/buyProductActions'


import style from './Dishes.module.scss'

export default function Dishes() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [form] = Form.useForm()

  const menu = useSelector(({restMenuReducer: { menu }}) => menu)
  const dishId = useSelector(({chooseItemsReducer: { dishId }}) => dishId)
  const language = useSelector(({chooseItemsReducer: { language }}) => language)

  const findDish = menu?.find(item => item.blockId === dishId)

  const [nameDish, setNameDish] = useState('nameDishRu')
  const [name, setName] = useState('nameRu')
  const [discriptions, setDiscriptions] = useState('discriptionsRu')

  useEffect(() => {
    dispatch(getMenu())
  }, [])

  useEffect(() => {
    if (language === 'ru'){
      setNameDish('nameDishRu')
      setName('nameRu')
      setDiscriptions('discriptionsRu')
    }
    if (language === 'en'){
      setNameDish('nameDishEn')
      setName('nameEn')
      setDiscriptions('discriptionsEn')
    }
    if (language === 'tr'){
      setNameDish('nameDishTr')
      setName('nameTr')
      setDiscriptions('discriptionsTr')
    }
  }, [language])

  const onAddToCart = (cardBlock) => {
    navigate('/redact')
    //dispatch(card(cardBlock))
  }

  const onFinishLogin = (e) => {
    console.log(e)
    form.resetFields()
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
      <span className={style.mainTitle}>{findDish?.[nameDish]}</span>
      <div className={style.blockDishes}>
        {
          findDish?.dishes?.filter(item => item !== null).map((item, index) => {return(
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
                <span className={style.title}>{item[name]}</span>
                <span className={style.discriptions}>{item[discriptions]}</span>
              </div>
              <div className={style.wrapBuy}>
                <span className={style.cost}>{item.amount} шт</span>
                <span className={style.cost}>{item.cost} tl</span>
              </div>
              <div className={style.wrapBtn}
                onClick={() => onAddToCart({
                  name: item[name],
                  discriptions: item[discriptions],
                  amount: item.amount,
                  cost: item.cost,
                  image: item.image,
                  id: item.id,
                  blockId: dishId
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
