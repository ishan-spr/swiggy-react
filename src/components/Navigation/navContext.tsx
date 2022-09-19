import {
  createContext,
  useReducer,
  useContext,
  Dispatch,
  ReactElement,
} from "react";
import { ActiveState, ActiveActionKind, ActiveAction } from "./types";

const INITIAL_STATE: ActiveState = { active: -1 };

function navReducer(
  state: ActiveState,
  { type, payload }: ActiveAction
): ActiveState {
  switch (type) {
    case ActiveActionKind.CHANGE:
      return { ...state, active: payload };
    default:
      return { ...state };
  }
}

const NavContext = createContext<{
  state: ActiveState;
  dispatch: Dispatch<ActiveAction>;
}>({
  state: INITIAL_STATE,
  dispatch: () => null,
});

export function NavContextProvider({
  children,
}: {
  children: ReactElement;
}): JSX.Element {
  const [state, dispatch] = useReducer(navReducer, INITIAL_STATE);
  return (
    <NavContext.Provider value={{ state, dispatch }}>
      {children}
    </NavContext.Provider>
  );
}

export function useNavContext(): {
  state: ActiveState;
  dispatch: React.Dispatch<any>;
} {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("Wrap element inside context provider");
  }
  return context;
}
