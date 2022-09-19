import styles from "./styles.module.css";
import { NavLinkProp, ActiveActionKind, CSSType } from "./types";
import { NavContextProvider, useNavContext } from "./navContext";
import { ReactNode } from "react";

function Navbar({ children, style }: { children: ReactNode; style: CSSType }) {
  return (
    <NavContextProvider>
      <div className={styles.Navbar} style={style}>
        {children}
      </div>
    </NavContextProvider>
  );
}

function NavGroup({
  children,
  style,
}: {
  children: ReactNode;
  style: CSSType;
}) {
  return (
    <>
      <div className={styles.NavGroup} style={style}>
        {children}
      </div>
    </>
  );
}

function NavLink({ icon, text, mobileOnly, style, tab }: NavLinkProp) {
  const {
    state: { active },
    dispatch,
  } = useNavContext();

  function handleSelect() {
    dispatch({ type: ActiveActionKind.CHANGE, payload: tab });
  }

  return (
    <>
      <div
        className={
          tab === active ? styles.NavLink + " " + styles.active : styles.NavLink
        }
        style={mobileOnly ? { ...style, display: "none" } : style}
        onClick={handleSelect}
        data-testid={`nav-${tab}`}
      >
        {icon ? (
          <span className="material-symbols-outlined">{icon}</span>
        ) : null}
        {text ? <span className={styles.Text}>{text}</span> : null}
      </div>
    </>
  );
}

export { Navbar, NavGroup, NavLink };
