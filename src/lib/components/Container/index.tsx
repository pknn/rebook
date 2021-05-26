import React from 'react';

const Container: React.FC = ({ children }) => {
  return <div className="container flex mt-16"> {children} </div>;
};

export default Container;
