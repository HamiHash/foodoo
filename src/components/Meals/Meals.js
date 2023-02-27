import classes from "./Meals.module.css";
import meal1 from "../../assets/meals/meal-1.jpg";
import meal2 from "../../assets/meals/meal-2.jpg";
import { SlEnergy } from "react-icons/sl";
import { IoNutrition, IoStarSharp, IoCheckmarkSharp } from "react-icons/io5";
import React, { Fragment } from "react";
import MealHeader from "./MealHeader";

const Meals = () => {
  return (
    <Fragment>
      <MealHeader />
      <section className="grid--3-cols grid">
        <div
          className={`card ${classes.card}`}
          style={{ backgroundColor: "#060d17" }}
        >
          <img className={classes.image} src={meal1} alt="food on table" />
          <div className={classes.mealCardDetail}>
            <p className={classes.listTitle}>Japanese Gyozas</p>
            <ul className={classes.list}>
              <li>
                <SlEnergy className={classes.icon} />
                650 calories
              </li>
              <li>
                <IoNutrition className={classes.icon} />
                NutriScore ® 74
              </li>
              <li>
                <IoStarSharp className={classes.icon} />
                4.9 rating (537)
              </li>
            </ul>
            <div className={classes.tagsContainer}>
              <div className={classes.tags}>VEGETARIAN</div>
            </div>
          </div>
        </div>
        <div
          className={`card ${classes.card}`}
          style={{ backgroundColor: "#060d17" }}
        >
          <img className={classes.image} src={meal2} alt="salad on table" />
          <div className={classes.mealCardDetail}>
            <p className={classes.listTitle}>Avocado Salad</p>
            <ul className={classes.list}>
              <li>
                <SlEnergy className={classes.icon} />
                400 calories
              </li>
              <li>
                <IoNutrition className={classes.icon} />
                NutriScore ® 92
              </li>
              <li>
                <IoStarSharp className={classes.icon} />
                4.8 rating (441)
              </li>
            </ul>
            <div className={classes.tagsContainer}>
              <div className={classes.tags}>VEGAN</div>
              <div className={classes.tag_orange}>PALEO</div>
            </div>
          </div>
        </div>
        <div>
          <p className={classes.headingSecondary2}>Works with any diet:</p>
          <ul className={classes.benefits}>
            <li>
              <IoCheckmarkSharp className={classes.icon} />
              Vegetarian
            </li>
            <li>
              <IoCheckmarkSharp className={classes.icon} />
              Vegan
            </li>
            <li>
              <IoCheckmarkSharp className={classes.icon} />
              Pescatarian
            </li>
            <li>
              <IoCheckmarkSharp className={classes.icon} />
              Gluten-free
            </li>
            <li>
              <IoCheckmarkSharp className={classes.icon} />
              Lactose-free
            </li>
            <li>
              <IoCheckmarkSharp className={classes.icon} />
              Keto
            </li>
            <li>
              <IoCheckmarkSharp className={classes.icon} />
              Paleo
            </li>
            <li>
              <IoCheckmarkSharp className={classes.icon} />
              Low FODMAP
            </li>
            <li>
              <IoCheckmarkSharp className={classes.icon} />
              Kid-friendly
            </li>
          </ul>
        </div>
      </section>
    </Fragment>
  );
};

export default Meals;
