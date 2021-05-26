import React from 'react';

const Container: React.FC = ({ children }) => {
  return <div className="flex"> {children} </div>;
};

export default Container;
