import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { DeleteOutlined } from '@ant-design/icons'

import Header from '../Header/Header'
import { HomeOutlined } from '@ant-design/icons'
import { addToRedact, deleteRedact } from '../../core/actions/restMenuActions'


import style from './Dishes.module.scss'

export default function Dishes() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const dishes = useSelector(({restMenuReducer: { dishes }}) => dishes)

  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const getItemStorage = async () => {
      try {
          const value = await localStorage.getItem('auth')
          if(value !== null) {
              setShowContent(true)
              return value
          }
      } catch(e) {
          console.log(e)
      }
    }
    getItemStorage()
  }, [])
  

  const onAddToRedact = (id) => {
    navigate('/redact')
    dispatch(addToRedact(id))
  }
  const deleteDish = (id) => {
    dispatch(deleteRedact(id))
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

      {
        showContent 
          ? <>
        
          </>
      }
      

    </div>
  )
}
