import { useState } from "react";
import styles from "./styles.module.css";
import data from "./data";
import { Navbar, NavGroup, NavLink } from "../Navigation";
import { DropDown, Option } from "../Macro/Dropdown";

export function Card({ src }: { src: string }) {
  const [hidden, setHidden] = useState(true);
  return (
    <div
      className={styles.ItemsCard}
      onMouseEnter={() => {
        setHidden(false);
      }}
      data-testid="Card"
      onMouseLeave={() => {
        setHidden(true);
      }}
    >
      <div className={styles.ItemImage} data-testid="image">
        <img src={src} alt="Not found" />
      </div>
      <div className={styles.ItemDetail}>
        <p className={styles.ItemTitle}>Natural Ice Cream</p>
        <p className={styles.ItemCuisine}>Desserts</p>
        <p className={styles.DeliveryDetail}>
          <span className={styles.Rating}>4</span>
          <span>.</span>
          <span className={styles.time}>25 Mins</span>
          <span>.</span>
          <span className={styles.cost}>Rs. 400 for two</span>
        </p>
        <p className={styles.ItemOffer}>50% off | Use welcome20</p>
      </div>
      {!hidden ? (
        <div className={styles.OrderItem} data-testid="Quick-View">
          <p>Ouick view</p>
        </div>
      ) : null}
    </div>
  );
}

function InformationGrid() {
  return (
    <div className={styles.ItemsWrapper}>
      <Navbar style={{ top: 0, position: "sticky", zIndex: "1000" }}>
        <NavGroup style={{ flexBasis: "20%" }}>
          <div className="logo">
            <span className="material-symbols-outlined">restaurant_menu</span>
          </div>
          <div className="text">198756 Restaurants</div>
        </NavGroup>
        <NavGroup
          style={{
            fontSize: "calc(5px + 0.390625vw)",
            flexBasis: "30%",
            justifyContent: "space-evenly",
          }}
        >
          <NavLink text={"Relevence"} tab={1} />
          <NavLink text={"Delivery Time"} tab={2} />
          <NavLink text={"Cost"} tab={3} />
          <NavLink text={"Rating"} tab={4} />
          <DropDown text={"Filter"} icon={"filter_list"}>
            <Option>Sample 1</Option>
            <Option>Sample 2</Option>
            <Option>Sample 3</Option>
          </DropDown>
        </NavGroup>
      </Navbar>
      <div className={styles.ItemsContainer}>
        <div className={styles.ItemsGrid}>
          {data.map((item, index) => {
            return <Card src={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default InformationGrid;
