import { useEffect, useState } from "react";

export const useTitle = (
  initialValue: string
): ((newTitle: string) => void) => {
  const [title, setTitle] = useState<string>(initialValue);

  const updateTitle = (): HTMLTitleElement | null => {
    const htmlTitle = document.querySelector<HTMLTitleElement>("title");
    if (htmlTitle) {
      htmlTitle.innerText = title;
    }
    return htmlTitle;
  };

  useEffect(() => {
    updateTitle();
  }, [title]);

  return setTitle;
};
