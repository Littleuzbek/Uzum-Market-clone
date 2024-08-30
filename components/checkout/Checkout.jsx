import Cart from "./Cart";
import classes from "./Checkout.module.css";
import Payment from "./Payment";
import RadioPicker from "./RadioPicker";
import TotalPrice from "./TotalPrice";

export default function Checkout() {
  return (
    <div className={classes.main}>
      <div>
        <div className={classes.deliveringPlace}>
          <h3>Qabul qilish usuli va yetkazib berish manzili:</h3>

          <p>Yetkazib berish shahri</p>
          <select className={classes.select}>
            <option value="toshkent">Toshkent shahri</option>
            <option value="nukus">Nukus shahri</option>
            <option value="buxoro">Buxoro shahri</option>
            <option value="andijon">Andijon shahri</option>
            <option value="urganch">Urganch shahri</option>
            <option value="samarqand">Samarqand shahri</option>
            <option value="qarshi">Qarshi shahri</option>
            <option value="jizzax">Jizzax shahri</option>
            <option value="navoiy">Navoiy shahri</option>
            <option value="termiz">Termiz shahri</option>
            <option value="namangan">Namangan shahri</option>
            <option value="guliston">Guliston shahri</option>
            <option value="farg'ona">Farg&apos;ona shahri</option>
          </select>

          <RadioPicker />
        </div>

        <div className={classes.deliveringUserInfo}>
          <h3>Buyurtma qabul qiluvchi</h3>

          <form>
            <div className={classes.userNameOrPhone}>
              <p>Familiya *</p>
              <input
                type="text"
                placeholder="Familiyangizni kiriting"
                required
              />
            </div>
            <div className={classes.userNameOrPhone}>
              <p>Ism *</p>
              <input type="text" placeholder="Введите имя" required />
            </div>
          </form>

          <p>
            Siz ko&apos;rsatgan telefon raqamiga buyurtma holati haqida
            bildirishnoma yuboramiz.
          </p>
          <p>
            Yetkazib berish vaqtini aniqlashtirish uchun kuryer siz bilan
            telefon orqali bog&apos;lanadi.
          </p>

          <form className={classes.userNameOrPhone}>
            <p>Telefon raqam *</p>
            <input
              type="text"
              placeholder="+998 __ ___-__-__"
              pattern="\+998 \d{2} \d{3}-\d{2}-\d{2}"
              required
            />
          </form>

          <div>
            <input type="checkbox" />
            <p>
              Yangiliklarimiz va aksiyalarimizga obuna bo&apos;ling. Yangi
              chegirma, aksiyalar va sotib tugatishlar haqida birinchilar
              qatorida bilib olasiz.
            </p>
          </div>
        </div>

        <Cart />

       <Payment />
      </div>
      <TotalPrice />
    </div>
  );
}
