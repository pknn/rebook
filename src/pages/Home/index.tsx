import { push } from 'connected-react-router';
import { connect } from 'react-redux';

import HomePageComponent from './HomePageComponent';
import { ApplicationDispatch } from '../../store';

const mapDispatchToProps = (dispatch: ApplicationDispatch) => ({
  handlePageLoad: () => dispatch(push('/not-found'))
});

export default connect(null, mapDispatchToProps)(HomePageComponent);
