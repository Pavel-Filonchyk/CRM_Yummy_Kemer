import React from 'react'

import style from './Header.module.scss'

export default function Header() {

  return (
    <div className={style.header}>
      <div className={style.wrapTitle}>
        <span>YUMMY KEMER</span>
        <span className={style.title}>MENU</span>
      </div>
    </div>
  )
}
