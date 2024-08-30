"use client";

import classes from "./MainHeader.module.css";
import { React, Fragment, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { getData } from "@/app/Data";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { cartAction } from "../cart/store/CartSlice";

export default function Search() {
  const [results, setResults] = useState([]);
  const [key, setKey] = useState("");
  const [backDrop, setBackDrop] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();

  const handleSearch = async (e) => {
    const data = await getData();
    const query = e?.target?.value?.toLowerCase();
    const searchPool = [
      ...data.accessories,
      ...data.dresses,
      ...data.shoes,
      ...data.laptops,
      ...data.smartPhones,
      ...data.perfumes,
    ];

    if (query !== " " && query !== "") {
      const result = searchPool.filter((item) =>
        item.name.toLowerCase().includes(query)
      );
      setResults(result);
      dispatch(cartAction.setSearchResult(result));
    } else {
      setResults([]);
      dispatch(cartAction.setSearchResult([]));
    }
  };

  const redirectHandler = () => {
    setResults([]);
    setKey("");
    router.push("/search");
  };

  const focusHandler = (input) => {
    const body = document.body;

    if (input === "focus") {
      body.style.overflow = "hidden";
      setBackDrop(true);
    }
    if (input === "noFocus") {
      body.removeAttribute('style');
      setBackDrop(false);
      setResults([])
    }
  };

  return (
    <Fragment>
      <div className={classes.search}>
        <input
          type="text"
          value={key}
          onChange={(e) => {
            setKey(e.target.value), handleSearch(e);
          }}
          onFocus={() => {pathname !== "/search" && focusHandler("focus")}}
          onBlur={() => setTimeout(() => {
            focusHandler("noFocus")
          }, 100) }
          placeholder="Mahsulot va turkumlar izlash"
        />
        <IoIosSearch
          className={classes.searchBtn}
          onClick={() => redirectHandler()}
        />
      </div>

      {backDrop && <div className={classes.backdropForSearch}></div>}

      {pathname !== "/search" && (
        <div
          className={classes.searchResult}
          style={{ display: `${results?.length === 0 ? "none" : "block"}` }}
        >
          {results?.map((product) => (
            <Link
              href={`/product/${product?.proType} ${product?.id}`}
              className={classes.result}
              onClick={() => {
                setKey("");
                setResults([]);
              }}
              key={product?.id}
              target="blank"
            >
              <Image src={product?.image} alt="" fill sizes="auto" priority />
              <p>{product?.name}</p>
            </Link>
          ))}
        </div>
      )}{" "}
    </Fragment>
  );
}
