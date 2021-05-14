import React from 'react';
import { connect } from 'react-redux';

import { ApplicationState } from '../../store';

interface OwnProps {
  version: string;
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
