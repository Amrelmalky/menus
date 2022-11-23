import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import menu from "./data";

// We need to get the unique categories
// new Set (pass an array) return only the unique item
// new set will return 'breakfast', 'lunch', 'shakes' is unique data  مش متكررة
// Now need to add "all" category as one of our categories array using spreed operator
const allcategories = ["all",...new Set(menu.map((item) => {
      return item.category;
    })
  ),
];

//console.log(allcategories); // Now ['all', 'breakfast', 'lunch', 'shakes'] and anytime if we add more category will added automatically

function App() {
  // store data in variable = menuItems
  const [menuItems, setMenuItems] = useState(menu);

  // store the unique categories  all categories in categories to pass it through props in component
    const [categories, setcategories] = useState(allcategories);

  // here our data

  // created function to filter main data by category
  // newMenu = stored only item  (its category  = category type which passed to function
  const filteredData = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }

    const newMenu = menu.filter((item) => item.category === category);
    setMenuItems(newMenu);
  };

  return (
    <main>
      <section className={"section menu"}>
        <div className="title">
          <h2> Our Menu</h2>
          <div className="underline"></div>
        </div>

        {/* Buttons */}
        {/* pass unique categories to component */}
        <Categories allCategories={categories} filterData={filteredData} />

        {/* Menues */}
        <Menu menuData={menuItems} />
      </section>
    </main>
  );
}

export default App;
