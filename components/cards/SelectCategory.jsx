"use client";

import classes from "./Card.module.css";
import { usePathname, useRouter } from "next/navigation";

export default function SelectCategory({ title }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <span className={classes.title}>
      <h1>{title}</h1>
      <select
        onChange={(e) => {
          router.push(e?.target?.value);
        }}
        value={pathname}
      >
        <option value="/">Ommabop</option>
        <option value="/category/laptops">Kompyuterlar</option>
        <option value="/category/smartPhones">Telefonlar</option>
        <option value="/category/accessories">Aksesuarlar</option>
        <option value="/category/dresses">Kiyimlar</option>
        <option value="/category/shoes">Oyoq kiyimlar</option>
        <option value="/category/perfumes">Atirlar</option>
      </select>
    </span>
  );
}
