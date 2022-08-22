import React from 'react'
import styles from './styles.module.css'

function Navbar({ children , style }) {
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
                <span class="material-symbols-outlined">{icon}</span>
                <span className={styles.Text}>{text}</span>
            </div>
        </>
    )
}


export { Navbar, NavGroup, NavLink }