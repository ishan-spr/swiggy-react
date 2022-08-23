import React from 'react'
import styles from './styles.module.css'


function navReducer(state, { type, payload } = {}) {
    switch (type) {
        case "CHANGE":
            return { ...state, active: payload }
        default:
            return { ...state }
    }
}

const NavContext = React.createContext()

function NavContextProvider({ children }) {
    const [state, dispatch] = React.useReducer(navReducer,{active:null})
    return <NavContext.Provider value={[state, dispatch]}>{children}</NavContext.Provider>
}

function useNavContext(){
    const context = React.useContext(NavContext)
    if(!context){
        throw new Error("Wrap element inside context provider");
    }
    return context
}

function Navbar({ children, style }) {
    return (
        <NavContextProvider>
            <div className={styles.Navbar} style={style}>
                {children}
            </div>
        </NavContextProvider>
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

function NavLink({ icon, text, mobileOnly, style , tab }) {
    const [{active},dispatch] = useNavContext()

    function handleSelect(){
        dispatch({type:"CHANGE",payload:tab})
    }

    return (
        <>
            <div className={ tab === active ? styles.NavLink + " " + styles.active :styles.NavLink } style={mobileOnly ? { ...style, display: 'none' } : style} onClick={handleSelect}  data-testid={`nav-${tab}`}>
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