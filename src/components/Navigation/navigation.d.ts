type CSSType = { [key: string]: any };

export type NavLinkProp = {
  icon: String;
  text?: String;
  mobileOnly?: Boolean;
  style?: CSSType;
  tab: number;
};

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
