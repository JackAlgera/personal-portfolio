import {useEffect, useState} from "react";
import styles from "./code-text.module.css";

interface CodeTextProps {
  text: string;
  color: string;
  stopTyping: boolean;
  typeDelay: number;
  minTypeDelay?: number;
  reverseText?: boolean;
  reverseTextCallback?: () => void;
}

enum TypeWriterState {
  WRITING,
  DELETING,
  WAITING
}

export const CodeText = (props: CodeTextProps) => {
  const [typing, setTyping] = useState(true);
  const [displayedText, setDisplayedText] = useState('');
  const [offset, setOffset] = useState(1);
  const [state, setState] = useState(TypeWriterState.WRITING);

  useEffect(() => {
    const getTypeWriterDelay = () => {
      switch (state) {
        case TypeWriterState.WAITING:
          return 2000;
        case TypeWriterState.DELETING:
          return 0;
        case TypeWriterState.WRITING:
          return props.minTypeDelay ? props.minTypeDelay : 20;
      }
    }

    let timeout = setTimeout(() => {
      switch (state) {
        case TypeWriterState.WRITING:
          if (offset <= props.text.length) {
            setDisplayedText(props.text.substring(0, offset));
            setOffset(offset + 1);
          } else if (props.stopTyping || props.reverseText) {
            setState(TypeWriterState.WAITING);
            setOffset(offset + 1);
            if (!props.reverseText) {
              setTyping(false);
            }
          }
          break;

        case TypeWriterState.DELETING:
          if (offset >= 0) {
            setDisplayedText(props.text.substring(0, offset));
            setOffset(offset - 1);
            return;
          }
          if (props.stopTyping) {
            setTyping(false);
            return;
          }
          setState(TypeWriterState.WRITING);
          props.reverseTextCallback();
          break;

        case TypeWriterState.WAITING:
          if (props.reverseText) {
            setState(TypeWriterState.DELETING);
            setOffset(offset - 1);
          }
          break;
      }
    }, Math.random() * props.typeDelay + getTypeWriterDelay());

    return () => {
      clearTimeout(timeout);
    };
  }, [offset, props.text]);


  return (
    <span className={`${props.color} ${(typing ? styles.typewriter : '')}`}>
      {displayedText}
    </span>
  );
}
