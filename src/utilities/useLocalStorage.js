import { useState } from "react";

export const USER = "user";
export const MAIL = "mail";

const useLocalStorage = (key) => {
  const stored = localStorage.getItem(key);
  const initialValue = JSON.parse(stored);
  const [value, setValue] = useState(initialValue);

  return { value, setValue };
};

export default useLocalStorage;
