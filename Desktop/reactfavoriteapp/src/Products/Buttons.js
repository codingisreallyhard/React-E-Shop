import React from "react";
import classes from "./Buttons.module.css";

const Buttons = ({ setFilteredItems, menuItems, favorites, filterItem }) => {
  return (
    <>
      <>
        <div className={classes.container}>
          {menuItems.map((Val, id) => {
            return (
              <button
                className={classes.filterbtns}
                key={id}
                onClick={() => filterItem(Val)}
              >
                {Val}
              </button>
            );
          })}
          <button
            className={classes.filterbtns}
            onClick={() => setFilteredItems(favorites)}
          >
            All
          </button>
          <div></div>
        </div>
      </>
    </>
  );
};

export default Buttons;
