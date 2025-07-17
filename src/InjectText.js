import { useEffect } from 'react';

/**
 * InjectText renders nothing itself but inserts the provided text
 * into the first DOM element matching the given class name.
 */
function InjectText({ className, text }) {
  useEffect(() => {
    const el = document.querySelector(`.${className}`);
    if (el) {
      el.textContent = text;
    }
  }, [className, text]);

  return null;
}

export default InjectText;
