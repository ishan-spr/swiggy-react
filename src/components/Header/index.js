import React from "react";
import { Navbar, NavGroup, NavLink } from '../Navigation'
import styles from './styles.module.css'

export default function Header() {
    return (
        <Navbar style={{position:"fixed",top:0,zIndex:"999"}}>
            <NavGroup style={{flexBasis:"20%"}}>
                <div style={{ margin: '10px' }}>
                    <svg height="40px" aria-label="Sprinklr logo" viewBox="0 0 14 14">
                        <path
                            d="M.998 3.285c.042-.645.584-1.216 1.314-1.168.204.013.445.03.806.299C4.742 3.83 5.7 6.326 5.41 8.483c-.014.106-.136.102-.166 0-.456-1.546-1.957-3.325-3.292-3.854-.632-.25-.994-.714-.954-1.344m11.527-.124c0-.982-.825-1.857-2.028-1.83C8.213 1.385 5.144 7.26 6.9 12.598c.021.109.126.088.134-.022.244-3.714 2.476-6.62 4.48-7.75.79-.445 1.01-.99 1.01-1.664M.002 8.539c.05.742.67 1.106 1.243 1.106 1.303 0 2.934.613 3.893 1.41.08.066.093.043.042-.137-.388-1.358-2.464-3.632-3.974-3.632-.781 0-1.244.649-1.204 1.253m13.996 0c-.05.742-.67 1.106-1.243 1.106-1.303 0-2.934.613-3.893 1.41-.08.066-.093.043-.042-.137.388-1.358 2.464-3.632 3.974-3.632.781 0 1.244.649 1.204 1.253">
                        </path>
                    </svg>
                </div>
                <div className={styles.text} style={{ margin: '10px' }}>Swiggy</div>
            </NavGroup>
            <NavGroup style={{ fontSize: "calc(5px + 0.390625vw)" , flexBasis:"30%" , justifyContent: "space-evenly" }}>
                <NavLink icon={"menu"} mobileOnly={true} tab={1}/>
                <NavLink icon={"search"} text={"Search"} tab={2}/>
                <NavLink icon={"percent"} text={"Offers"} tab={3}/>
                <NavLink icon={"help"} text={"Help"} tab={4}/>
                <NavLink icon={"person"} text={"Sign In"} tab={5}/>
                <NavLink icon={"shopping_bag"} text={"Cart"} tab={6}/>
            </NavGroup>
        </Navbar>
    )
}