import { ReactNode } from "react";

type CSSType = { [key: string]: any };

interface NavComponents {
  icon?: String;
  text?: String;
  mobileOnly?: Boolean;
  style?: CSSType;
}

export interface NavLinkProp extends NavComponents {
  tab: number;
}

export interface DropDownProp extends NavComponents {
  children?: ReactNode;
}

export enum ActiveActionKind {
  CHANGE = "CHANGE",
}

export interface ActiveAction {
  type: CountActionKind;
  payload: number;
}

export interface ActiveState {
  active: number;
}
