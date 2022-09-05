import React from "react";
import Card from "../Components/Card";
import styles from "../Style/CardList.module.css";

const data = [
  {
    id:1,
    level: "level 20",
    points: "points 3000",
    name: "Lisa",
    awards: "120",
    matches: "230",
    pals: "112",
    color1:"#de685e",
    color2:"#ee786e",
  },
  {
    id:2,
    level: "level 34",
    points: "points 5700",
    name: "Jon",
    awards: "180",
    matches: "430",
    pals: "200",
    color1:"#10ac84",
    color2:"#1dd1a1",
  }
];
console.log(data)

function CardList() {
  return (
    <>
    <div className={styles.body}>
        {data.map(item=>
            <Card props={item} key={item.id}/>
        )}
    </div>
    </>
  )  
}

export default CardList;
