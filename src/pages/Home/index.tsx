import { ComponentProps } from 'react';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { ApplicationDispatch } from 'store/types';

import HomePageComponent from './HomePageComponent';

type HomePageComponentProps = ComponentProps<typeof HomePageComponent>;

const mapDispatchToProps = (
  dispatch: ApplicationDispatch
): HomePageComponentProps => ({
  handlePageLoad: () => dispatch(push('/not-found'))
});

export default connect(null, mapDispatchToProps)(HomePageComponent);
