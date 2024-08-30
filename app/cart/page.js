import Cart from '@/components/cart/Cart'
import classes from './page.module.css'
import { Suspense } from 'react'
import Loader from '@/components/loader/Loader'

export const metadata = {
  title: 'Savat - Uzum'
}

export default function CartPage() {
  return (
    <div className={classes.cart}>
      <Suspense fallback={<Loader />}>
        <Cart />
      </Suspense>
    </div>
  )
}
