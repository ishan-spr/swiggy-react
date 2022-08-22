import React from 'react'
import styles from './styles.module.css'

function Navbar({ children, style }) {
    return (
        <>
            <div className={styles.Navbar} style={style}>
                {children}
            </div>
        </>
    )
}

function NavGroup({ children, style }) {
    return (
        <>
            <div className={styles.NavGroup} style={style}>
                {children}
            </div>
        </>
    )
}

function NavLink({ icon, text, mobileOnly, style }) {
    return (
        <>
            <div className={styles.NavLink} style={mobileOnly ? { ...style, display: 'none' } : style}>
                {icon ? <span className="material-symbols-outlined">{icon}</span> : null}
                {text ? <span className={styles.Text}>{text}</span> : null}
            </div>
        </>
    )
}

function DropDown({ icon, text, style, mobileOnly, children }) {
    return (
        <>
            <div className={styles.NavLink + " " + styles.Dropdown} style={mobileOnly ? { ...style, display: 'none' } : style}>
                {icon ? <span className="material-symbols-outlined">{icon}</span> : null}
                {text ? <span className={styles.Text}>{text}</span> : null}
                <div className={styles.DropdownContent}>
                    <ul>
                        {children}
                    </ul>
                </div>
            </div>
        </>
    )
}

function Option({ children }) {
    return (
        <>
            <li>{children}</li>
        </>
    )
}


export { Navbar, NavGroup, NavLink, DropDown, Option }