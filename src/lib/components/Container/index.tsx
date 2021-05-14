import React from 'react';

import { Padding, getPaddingClassNames } from '../Sizing/Padding';
import { Margin, getMarginClassNames } from '../Sizing/Margin';

interface ContainerProps {
  flex?: boolean;
  padding?: Padding;
  margin?: Margin;
}

const Container: React.FunctionComponent<ContainerProps> = ({
  children,
  flex,
  padding,
  margin
}) => {
  const className = ['container', flex && 'flex']
    .concat(getPaddingClassNames(padding))
    .concat(getMarginClassNames(margin))
    .join(' ');
  return <div className={className}>{children}</div>;
};

export default Container;
