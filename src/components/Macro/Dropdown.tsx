import { ReactNode } from "react";
import styles from "./styles.module.css";

type CSSType = { [key: string]: any };

interface DropDownProp {
  children?: ReactNode;
  icon?: string;
  text?: string;
  mobileOnly?: Boolean;
  style?: CSSType;
}

function DropDown({ icon, text, style, mobileOnly, children }: DropDownProp) {
  return (
    <>
      <div
        className={styles.NavLink + " " + styles.Dropdown}
        style={mobileOnly ? { ...style, display: "none" } : style}
      >
        {icon ? (
          <span className="material-symbols-outlined">{icon}</span>
        ) : null}
        {text ? <span className={styles.Text}>{text}</span> : null}
        <div className={styles.DropdownContent}>
          <ul>{children}</ul>
        </div>
      </div>
    </>
  );
}

function Option({ children }: { children: ReactNode }) {
  return (
    <>
      <li>{children}</li>
    </>
  );
}

export { DropDown, Option };
