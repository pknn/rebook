import React from 'react';
import { Metadata } from 'lib/types/metadata';
import { FallbackProps } from 'react-error-boundary';

interface OwnProps {
  metadata: Metadata;
}

type ComponentProps = OwnProps & FallbackProps;

const ErrorPageComponent: React.FC<ComponentProps> = ({ metadata, error }) => {
  return (
    <div>
      <h1>Error has occured</h1>
      <h2>Application Version: {metadata.version}</h2>
      {error}
    </div>
  );
};

export default ErrorPageComponent;
