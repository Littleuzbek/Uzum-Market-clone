'use client'

import { useRef } from 'react'
import { IoIosSearch } from "react-icons/io";
import classes from './MainHeader.module.css'

export default function Search() {
    const ref = useRef();
  return (
    <div className={classes.search}>
         <input type="text" ref={ref}/>
          <IoIosSearch className={classes.searchBtn}/>
    </div>
  )
}
