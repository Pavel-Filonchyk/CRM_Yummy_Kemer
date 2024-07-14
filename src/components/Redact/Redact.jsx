import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link,useNavigate  } from 'react-router-dom'
import uuid from 'react-uuid'
import { Button, Form, Input } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons'

import Header from '../Header/Header'
import { putRedact, postRedact } from '../../core/actions/restMenuActions'

import style from './Redact.module.scss'

export default function Redact() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [form] = Form.useForm()

    const redact = useSelector(({restMenuReducer: { redact }}) => redact)

    const onChangeDish = (e) => {
        dispatch(putRedact({...e, id: redact?.id}))
        navigate('/dishes')
        form.resetFields()
    }
    const onAddDish = (e) => {
        dispatch(postRedact({...e, id: uuid()}))
        navigate('/dishes')
        form.resetFields()
    }
    
    return (
        <div className={style.wrapRedact}>
            <Header/>
            <div className={style.wrapMainPageLink}>
                <Link className={style.link} to="/dishes">
                    <CloseCircleOutlined className={style.homePic}/>
                </Link>
            </div>
            <div className={style.wrapDishes}>
                {
                    redact !== null
                    ?   <Form
                            onFinish={(e) => onChangeDish(e)}
                            initialValues={{
                                image: redact?.image, cost: redact?.cost, amount: redact?.amount, nameTr: redact?.nameTr, nameRu: redact?.nameRu, nameEn: redact?.nameEn,
                                discriptionsTr: redact?.discriptionsTr, discriptionsRu: redact?.discriptionsRu, discriptionsEn: redact?.discriptionsEn,
                            }}
                            form={form}
                        >
                            <span className={style.title}>Фото (url)</span>
                            <Form.Item name='image'>
                                <Input.TextArea className={style.discriptions} style={{fontSize: 16}}/>
                            </Form.Item>
                        
                            <span className={style.title}>Наименование</span>
                            <Form.Item name='nameTr'>
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
                            <span className={style.title}>Количество</span>
                            <Form.Item name='amount'>
                                <Input className={style.wrapInput} style={{width: '38%'}}/>
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
                    :   <Form
                            onFinish={(e) => onAddDish(e)}
                            form={form}
                        >
                            <span className={style.title}>Фото (url)</span>
                            <Form.Item name='image'>
                                <Input.TextArea className={style.discriptions} style={{fontSize: 16}}/>
                            </Form.Item>
                        
                            <span className={style.title}>Наименование</span>
                            <Form.Item name='nameTr'>
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
                            <span className={style.title}>Количество</span>
                            <Form.Item name='amount'>
                                <Input className={style.wrapInput} style={{width: '38%'}}/>
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
                }
            </div>
        </div> 
    )
}
