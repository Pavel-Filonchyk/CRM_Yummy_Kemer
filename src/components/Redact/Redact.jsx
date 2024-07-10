import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import { Button, Form, Input, Popover } from 'antd'
import { DeleteOutlined, CloseCircleOutlined } from '@ant-design/icons'

import Header from '../Header/Header'
import style from './Redact.module.scss'

export default function Redact() {
    const dispatch = useDispatch()
    const [form] = Form.useForm()

    const menu = useSelector(({restMenuReducer: { menu }}) => menu)
    const dishId = useSelector(({chooseItemsReducer: { dishId }}) => dishId)
    
    return (
        <div className={style.wrapRedact}>
            <Header/>
            <div className={style.wrapMainPageLink}>
                <Link className={style.link} to="/dishes">
                    <CloseCircleOutlined className={style.homePic}/>
                </Link>
            </div>
            <div className={style.wrapDishes}>
                <Form
                    //onFinish={(e) => onFinishLogin(e)}
                    form={form}
                >
                    <span className={style.title}>Фото (url)</span>
                    <Form.Item name='image'>
                    <Input.TextArea className={style.discriptions} style={{fontSize: 16}}/>
                    </Form.Item>
                
                    <span className={style.title}>Наименование</span>
                    <Form.Item name={1}>
                        <Input className={style.wrapInput}/>
                    </Form.Item>
                    <Form.Item name='nameRu'>
                        <Input className={style.wrapInput}/>
                    </Form.Item>
                    <Form.Item name='nameEn'>
                        <Input className={style.wrapInput}/>
                    </Form.Item>
                    
                    <span className={style.title}>Состав</span>
                    <Form.Item name='discriptionsTr'>
                        <Input.TextArea className={style.discriptions}/>
                    </Form.Item>
                    <Form.Item name='discriptionsRu'>
                        <Input.TextArea className={style.discriptions}/>
                    </Form.Item>
                    <Form.Item name='discriptionsEn'>
                        <Input.TextArea className={style.discriptions}/>
                    </Form.Item>

                    <span className={style.title}>Цена</span>
                    <Form.Item name='cost'>
                        <Input className={style.wrapInput} style={{width: '38%'}}/>
                    </Form.Item>
                    <div className={style.wrapBtn}>
                        <Form.Item>
                            <Button 
                                htmlType='submit'
                                className={style.btn}
                                ><span className={style.button}>Сохранить</span>
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </div> 
    )
}
