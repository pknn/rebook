import React, { useEffect } from 'react';

export interface HomePageComponentProps {
  handlePageLoad: () => void;
}

const HomePageComponent: React.FC<HomePageComponentProps> = ({
  handlePageLoad
}) => {
  useEffect(() => {
    setTimeout(() => {
      handlePageLoad();
    }, 3000);
  });

  return <div>HomePage</div>;
};

export default HomePageComponent;
