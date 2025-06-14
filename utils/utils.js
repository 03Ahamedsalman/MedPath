const KEY = "popupShownAt";
const ONE_HOUR = 60 * 60 * 1000;

export const getFullyear = () => {
  return new Date().getFullYear();
};

export const hasPopupShownRecently = () => {
  if (typeof window === "undefined") return true; // prevent SSR issues

  const storedTime = sessionStorage.getItem(KEY);
  if (!storedTime) return false;

  return Date.now() - parseInt(storedTime) < ONE_HOUR;
};

export const markPopupAsShown = () => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(KEY, Date.now().toString());
  }
};
