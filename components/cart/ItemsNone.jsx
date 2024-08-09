import cartCat from '@/components/images/cats/cart.png'
import Image from 'next/image'
import classes from './Cart.module.css'

export default function ItemsNone() {
  return (
    <div className={classes.itemsNone}>
        <Image src={cartCat} alt='Chiroylimanmi???'/>
        <h3>Savat bo&apos;m bo&apos;shku <p>🙀</p></h3>
        <h3>Bor bor biror narsa olib kel <p>😽</p></h3>
    </div>
  )
}
