import React from "react";
import styles from './styles.module.css'
import data from './data'
import { Navbar, NavGroup, NavLink } from "../Navigation"

function Card({ src }) {
    return (
        <div className={styles.ItemsCard}>
            <div className={styles.ItemImage}>
                <img src={src} alt="Not found" />
            </div>
            <div className={styles.ItemDetail}>
                <p className={styles.ItemTitle}>Natutal Ice Cream</p>
                <p className={styles.ItemCuisine}>Desserts</p>
                <p className={styles.DeliveryDetail}>
                    <span className={styles.Rating}>4</span>
                    <span>.</span>
                    <span className={styles.time}>25 Mins</span>
                    <span>.</span><span className={styles.cost}>Rs. 400 for two</span>
                </p><p className={styles.ItemOffer}>50% off | Use welcome20</p></div>
            <div className={styles.OrderItem}>
                <p>Ouick view</p>
            </div>
        </div>
    )
}

function InformationGrid() {
    return (
        <div className={styles.ItemsWrapper}>
            <Navbar>
                <NavGroup style={{ flexBasis: "20%" }}>
                    <div class="logo">
                        <span class="material-symbols-outlined">
                            restaurant_menu
                        </span>
                    </div>
                    <div class="text">198756 Restaurants</div>
                </NavGroup>
                <NavGroup style={{ fontSize: "calc(5px + 0.390625vw)", flexBasis: "30%", justifyContent: "space-evenly" }}>
                    <NavLink icon={"menu"} mobileOnly={true} />
                    <NavLink icon={"search"} text={"Search"} />
                    <NavLink icon={"percent"} text={"Offers"} />
                    <NavLink icon={"help"} text={"Help"} />
                    <NavLink icon={"person"} text={"Sign In"} />
                    <NavLink icon={"shopping_bag"} text={"Cart"} />
                </NavGroup>
            </Navbar>
            <div className={styles.ItemsContainer}>
                <div className={styles.ItemsGrid}>
                    {
                        data.map((item, index) => {
                            return <Card src={item} key={index} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default InformationGrid