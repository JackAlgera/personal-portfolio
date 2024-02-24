"use client";

import {PropsWithChildren, useEffect, useState} from 'react';

export const ChildrenContainer = ({children}: PropsWithChildren) => {
  const [showChildren, setShowChildren] = useState(false);

  useEffect(() => {
    const timeoutShowChildren = setTimeout(() => setShowChildren(true), 2800);
    return () => {
      clearTimeout(timeoutShowChildren);
    }
  }, []);

  return (
    <div className="context-container">
      <div className="context">
        {showChildren && children}
      </div>
    </div>
  );
}
