import { useEffect, useState } from "react";

export const ControlTyping = (text, delay) => {
  const [textValue, settextValue] = useState();

  useEffect(() => {
    const handler = setTimeout(() => {
      settextValue(text);
    }, delay);

    return ()=>{ clearTimeout(handler)}
  }, [text, delay]);

  return textValue;
};
