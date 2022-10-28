import {useEffect, useState} from "react";

interface CodeTextProps {
  text: string;
  color: string;
  stopTyping: boolean;
}

export const CodeText = (props: CodeTextProps) => {
  const [typing, setTyping] = useState(true);
  const [displayedText, setDisplayedText] = useState('');
  const [offset, setOffset] = useState(1);

  useEffect(() => {
    let timeout = setTimeout(() => {
      if (offset <= props.text.length) {
        setDisplayedText(props.text.substring(0, offset));
        setOffset(offset + 1);
      } else if (props.stopTyping) {
        setTyping(false);
      }
    }, Math.random() * 140 + 20);

    return () => {
      clearTimeout(timeout);
    };
  }, [offset, props.text]);


  return (
    <span className={`${props.color} ${(typing ? 'typewriter' : '')}`}>
      {displayedText}
    </span>
  );
}
