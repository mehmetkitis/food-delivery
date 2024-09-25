import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-texts'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A eius autem amet dignissimos doloribus, 
      laudantium animi. Nostrum, illo in? Reiciendis eveniet natus facere aspernatur architecto illo vero et, possimus commodi.</p>
      <div className='explore-menu-list'>
        {menu_list.map((item,index) => {
            return (
                <div onClick={() => setCategory(category === item.menu_name ? "All" : item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className= {category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
