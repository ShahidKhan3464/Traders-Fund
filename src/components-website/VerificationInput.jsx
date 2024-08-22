import React, { useEffect, useRef, useState } from 'react';
import css from './VerificationInput.module.css';

export default function VerificationInput({ onChange = null, length = 1, validChars = new RegExp('.+') }) {
  const [value, setValue] = useState('');
  const inputRefs = useRef([]);

  function addToRefs(el) {
    if (el && !inputRefs.current.includes(el)) {
      inputRefs.current.push(el);
    }
  }

  useEffect(() => {
    inputRefs.current.forEach(ref => ref?.blur());
    inputRefs.current[value.length === 0 ? 0 : value.length]?.focus();

    if (onChange) onChange(value);
  }, [value]);

  return (
    <div className={css.container}>
      {Array(length)
        .fill(1)
        .map((_, index) => (
          <input
            key={index}
            ref={addToRefs}
            type="text"
            value={value[index] ?? ''}
            onFocus={e => {
              if (value && index === value.length - 1) {
                return;
              }

              if (value && index !== value.length) {
                e.target.blur();
              }
            }}
            onKeyDown={e => {
              if (e.key.toLowerCase() === 'backspace') {
                setValue(value => value.slice(0, -1));
              }
            }}
            className={css.input}
            onChange={e => {
              if (value.length > length) {
                return false;
              }
              if (e.target.value && validChars.test(e.target.value)) {
                setValue(value => value.concat(e.target.value.slice(0, length - index)));
              }
              return false;
            }}
          />
        ))}
    </div>
  );
}
