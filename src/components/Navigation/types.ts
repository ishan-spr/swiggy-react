export type CSSType = { [key: string]: any };

interface NavComponents {
  icon?: string;
  text?: string;
  mobileOnly?: Boolean;
  style?: CSSType;
}

export interface NavLinkProp extends NavComponents {
  tab: number;
}

export enum ActiveActionKind {
  CHANGE = "CHANGE",
}

export interface ActiveAction {
  type: ActiveActionKind;
  payload: number;
}

export interface ActiveState {
  active: number;
}
