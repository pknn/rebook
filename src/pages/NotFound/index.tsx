import React, { useEffect } from 'react';
import { useErrorHandler } from 'react-error-boundary';
import { PageNotFoundError } from 'lib/types/errors';

const NotFoundPageComponent: React.FunctionComponent = () => {
  const handleError = useErrorHandler();
  useEffect(() => {
    handleError(new PageNotFoundError());
  });

  return <></>;
};

export default NotFoundPageComponent;
