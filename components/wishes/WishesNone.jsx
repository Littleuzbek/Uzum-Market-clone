import Image from "next/image";
import wishCat from '@/components/images/cats/wishes.png'
import classes from '@/app/wishes/page.module.css'

export default function WishesNone() {
  return (
    <div className={classes.noWish}>
        <Image src={wishCat} alt="O'ylayabman..."/>
        <h3>Haaa ko'ngling nozik ekan!</h3>
        <h3>Senga hech narsa topolmadik.</h3>
    </div>
  )
}
