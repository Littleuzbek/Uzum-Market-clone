import Cart from '@/components/cart/Cart'
import classes from './page.module.css'
import { Suspense } from 'react'

export default function page() {
  return (
    <div className={classes.cart}>
      {/* <Suspense fallback='Loading...'> */}
        <Cart />
      {/* </Suspense> */}
    </div>
  )
}
