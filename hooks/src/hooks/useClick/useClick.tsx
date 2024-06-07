import { useEffect, useRef, MutableRefObject } from "react";

export const useClick = (
  onClick: (event: MouseEvent) => void
): MutableRefObject<HTMLElement | null> | undefined => {
  const element = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof onClick !== "function") {
      return;
    }

    const currentElement = element.current;

    if (currentElement) {
      currentElement.addEventListener("click", onClick);
    }

    return () => {
      if (currentElement) {
        currentElement.removeEventListener("click", onClick);
      }
    };
  }, [onClick]);

  return typeof onClick !== "function" ? undefined : element;
};
