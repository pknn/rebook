import React from 'react';
import { connect } from 'react-redux';
import { Version } from 'lib/types/metadata';

import { ApplicationState } from 'store/types';

interface OwnProps {
  version: Version;
}

const NotFoundPageComponent: React.FunctionComponent<OwnProps> = ({
  version
}) => {
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
