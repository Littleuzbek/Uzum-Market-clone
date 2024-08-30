'use client'

import classes from './Checkout.module.css'
import { Tick } from "../icons/icons";
import { useState } from 'react';

export default function RadioPicker() {
    const [option,setOption] = useState('byStation')

  return (
    <>
    <p>Olish usuli</p>
        <div className={classes.radioWrapper}>
          <div className={classes.option} onClick={()=>setOption('byStation')}>
            <div>
              <div className={classes.radio} >
                <span style={option === 'byStation' ? {} : {display: 'none'}}></span>
              </div>
              <p>Uzum topshirish punkti</p>
            </div>
            <span>
              26-avgust orasida yetkazamiz, <p> bepul</p>
            </span>
            <span>
              {" "}
              <Tick /> Buyurtmani saqlash muddati - 5 kun
            </span>
            <span>
              {" "}
              <Tick /> Mahsulotni tekshirish va kiyib ko&apos;rish mumkin
            </span>
            <span>
              {" "}
              <Tick /> Mahsulotlarning tez va muommosiz qaytarib olinishi
            </span>
          </div>
          <div className={classes.option} onClick={()=>setOption('byCourier')}>
            <div>
              <div className={classes.radio}>
                <span style={option === 'byCourier' ? {} : {display: 'none'}}></span>
              </div>
              <p>Kuryer orqali eshikkacha</p>
            </div>
            <span>
              Yetkazib beramiz 26-avgust, <p> bepul</p>
            </span>
            <span>
              Kuryer buyurtmani olib ketadi va qulay yetkazish vaqtini aniqlash
              uchun qo&apos;ng&apos;iroq qiladi
            </span>
          </div>
        </div>

        <div className={classes.map}>
        <h3>Yetkazib berish manzili</h3>
        <p>Topshirish punktini tanlang</p>
        <button>Tanlash</button>
        </div>
    </>
  )
}
