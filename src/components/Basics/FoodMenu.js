import React, { useState } from 'react'
import "./style.css";
import Menu from './MenuApi'
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [...new Set(Menu.map((curEle) => {
  return curEle.category;
})),"All"]
console.log(uniqueList);

const FoodMenu = () => {

  const [menuData, setMenuData] = useState(Menu);
  const [displayData, setDisplayData] = useState(Menu);
  // const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {

    if(category === "All"){
      setMenuData(Menu);
      return;
    }

    const updateList = menuData.filter((curEle) => {
      return curEle.category === category;
    })

    setDisplayData(updateList);
  }


  return (
    <>
      <Navbar filterItem={filterItem} menuList={uniqueList} />

      <MenuCard menuData={displayData} />
    </>
  )
}

export default FoodMenu