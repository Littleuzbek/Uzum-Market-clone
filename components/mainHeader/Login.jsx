"use client";

import { Fragment, useState } from "react";
import classes from "./MainHeader.module.css";
import { CiUser } from "react-icons/ci";
import { IoArrowBack } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

export default function Login() {
  const [login, setLogin] = useState(false);
  const [verication,setVerification] = useState(false);
  const [error,setError] = useState(false);
  const [key, setKey] = useState("");

  const formatNumber = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e);
    return formattedPhoneNumber ? setKey(formattedPhoneNumber) : "";
  };

  return (
    <Fragment>
      <div className={classes.btn} onClick={()=>setLogin(true)}>
        <CiUser />
        Kirish
      </div>

      {login && <div className={classes.loginFormContainer}>
        <div className={classes.loginForm}>
          <div className={classes.actions} style={verication ? {} : {justifyContent: "flex-end"}}>
           {verication && <IoArrowBack onClick={()=>setVerification(false)}/>}
            <IoCloseOutline onClick={()=>{
              setKey('')
              setVerification(false)
              setError(false)
              setLogin(false)}}/>
          </div>

          {verication || (
            <form action="submit" onSubmit={(e)=>{
              e.preventDefault();
              return e.target[0].value.length === 12 ? setVerification(true) : setError(true) 
            }}>
              <h2>Telefon raqamini kiriting</h2>
              <p>Tasdiqlash kodini SMS orqali yuboramiz</p>
              <div className={classes.input}>
                <div>+998</div>
                <input
                  name="phone"
                  type="tel"
                  value={key}
                  onChange={(e) => {
                    formatNumber(e.target.value);
                    setError(false)
                  }}
                  placeholder="00 000-00-00"
                  required
                />
              </div>
              {error && <p className={classes.error}>Raqam formati noto'g'ri</p>}
              <button>Kodni olish</button>
              <p>
                Avtotizatsiyadan o'tish orqali siz shaxsiy ma'lumotlarni qayta
                ishlash siyosatiga rozilik bildirasiz
              </p>
            </form>
          )}

          {verication && <div className={classes.verification}>
            <h2>Kodni kiriting</h2>
            <p>
              Telefonni tasdiqlash uchun <b>+998 {key}</b> raqamiga 5
              xonali kod yuborildi
            </p>
            <div>
              <input type="text" maxLength='1'/>
              <input type="text" maxLength='1'/>
              <input type="text" maxLength='1'/>
              <input type="text" maxLength='1'/>
              <input type="text" maxLength='1'/>
            </div>
            <p>
              Agarda kod kelmasa, siz 60 soniya orqali yangisini olishingiz
              mumkin
            </p>
          </div>}

        </div>
      </div>}
    </Fragment>
  );
}

const formatPhoneNumber = (value) => {
  if (!value) return " ";
  if (value.length > 12) return;

  const phoneNumber = value
    .replaceAll(" ", "")
    .replaceAll("-", "")
    .replaceAll(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength <= 2) {
    return phoneNumber;
  }
  if (phoneNumberLength <= 5) {
    return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2)}`;
  }
  if (phoneNumberLength <= 7) {
    return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(
      2,
      5
    )}-${phoneNumber.slice(5)}`;
  }

  return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(
    2,
    5
  )}-${phoneNumber.slice(5, 7)}-${phoneNumber.slice(7)}`;
};
