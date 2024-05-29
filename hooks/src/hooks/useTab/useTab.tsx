import { useState } from "react";

type UseTabReturnType<T> = {
  currentItem: T;
  changeItem: (index: number) => void;
};

export const useTab = <T,>(
  initialTab: number,
  allTabs: T[]
): UseTabReturnType<T> | undefined => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return undefined;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};
