import { createContext, useEffect, useState } from "react";

export const GlobalStateContext = createContext({});

const COOKIE_CONSENT_ID = "cookie-consent";
const COOKIE_BAR_ENTER_DELAY = 2000;

function GlobalProvider(props) {
  const { children } = props;

  const [isCookieBarOpen, setCookieBarOpen] = useState(false);

  useEffect(() => {
    if (!localStorage?.getItem(COOKIE_CONSENT_ID)) {
      setTimeout(() => {
        setCookieBarOpen(true);
      }, COOKIE_BAR_ENTER_DELAY);
    }
  }, []);

  const onCookieBarClose = () => {
    localStorage.setItem(COOKIE_CONSENT_ID, 1);
    setCookieBarOpen(false);
  };

  const value = {
    isCookieBarOpen,
    onCookieBarClose,
  };

  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  );
}

export default GlobalProvider;
