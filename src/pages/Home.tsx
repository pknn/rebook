import React, { useEffect } from 'react';
import { push } from 'connected-react-router';
import { connect, ConnectedProps } from 'react-redux';

import { ApplicationDispatch } from '../store';

type MappedPropsType = ConnectedProps<typeof connector>;

const HomePageComponent: React.FC<MappedPropsType> = (
  props: MappedPropsType
) => {
  useEffect(() => {
    setTimeout(() => props.push(), 3000);
  });
  return <div>Going to not found in 3 sec</div>;
};

const mapDispatchToProps = (dispatch: ApplicationDispatch) => ({
  push: () => dispatch(push('/not-found'))
});

const connector = connect(null, mapDispatchToProps);

const HomePage = connector(HomePageComponent);

export default HomePage;
