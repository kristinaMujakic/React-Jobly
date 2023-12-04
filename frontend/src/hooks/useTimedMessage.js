import { useRef, useState, useEffect } from "react";

function useTimedMessage(timeInMsec = 3000) {
  const [active, setActive] = useState(false);

  const messageShownRef = useRef(false);

  useEffect(() => {
    if (active && !messageShownRef.current) {
      messageShownRef.current = true;
      setTimeout(() => {
        setActive(false);
        messageShownRef.current = false;
      }, timeInMsec);
    }
  }, [active, timeInMsec]);

  return [active, setActive];
}

export default useTimedMessage;
