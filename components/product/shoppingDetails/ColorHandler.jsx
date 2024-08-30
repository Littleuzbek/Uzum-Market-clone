import { useState } from "react";
import classes from "../ShoppingDetails.module.css";

export default function ColorHandler({
  activeColor,
  onSetActiveColor,
  productDetails,
}) {
  const [colorIndex,setColorIndex] = useState();
  const colors = [
    "white",
    "black",
    "blue",
    "skyblue",
    "red",
    "yellow",
    "orange",
    "green",
    "greenyellow",
    "violet",
    "purple",
    'brown'
  ];
  const uzColors = [
    "Oq",
    "Qora",
    "Ko'k",
    "Och ko'k",
    "Qizil",
    "Sariq",
    "Sabzirang",
    "Yashil",
    "Och yashil",
    "Och pushti",
    "To'q pushti",
    'Jigarrang'
  ];
  return (
    <div className={classes.pickColor}>
      <span>
        Rang: <p>{activeColor}</p>
      </span>
      <div>
        {productDetails.options.color.map((color, index) => 
        (
          <span
          key={color}
            className={colorIndex === index ? classes.active : {}}
            onClick={() => {
              const a = colors.findIndex((clr)=>clr === color);
              onSetActiveColor(uzColors[a])
              setColorIndex(index)
            }}
          >
            <div style={{ backgroundColor: `${color}` }}></div>
          </span>
        ))}
      </div>
    </div>
  );
}
