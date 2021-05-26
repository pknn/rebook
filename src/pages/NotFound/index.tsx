import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Version } from 'lib/types/metadata';
import { ApplicationState } from 'store/types';
import { useErrorHandler } from 'react-error-boundary';
import { PageNotFoundError } from 'lib/types/errors';

interface OwnProps {
  version: Version;
}

const NotFoundPageComponent: React.FunctionComponent<OwnProps> = ({
  version
}) => {
  const handleError = useErrorHandler();
  useEffect(() => {
    handleError(new PageNotFoundError());
  });

  return (
    <>
      <h1>Not found</h1>
      <h2>App Version: {version}</h2>
    </>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  version: state.metadata.version
});

const NotFound = connect(mapStateToProps)(NotFoundPageComponent);

export default NotFound;
