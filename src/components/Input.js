import React, { useEffect, useRef } from "react";

const Input = ({ setText }) => {
  const inputRef = useRef(null);

  const onChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="input">
      <textarea
        ref={inputRef}
        spellCheck="false"
        placeholder="Start Typing..."
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default Input;
