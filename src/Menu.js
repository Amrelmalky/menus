import React from "react";

function Menu({ menuData }) {
  return (
    <div className="section-center">
      {menuData.map((menu) => {
        const { id, title, category, price, img, desc } = menu;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />

            <div className="item-info">
              <header>
                <h4>{title} </h4>
                <h4 className="price">{price} $ </h4>
              </header>
              <div className="item-text">
                <p>{desc}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Menu;
