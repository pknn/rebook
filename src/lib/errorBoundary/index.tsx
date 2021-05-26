import React from 'react';
import { ErrorBoundary as ER } from 'react-error-boundary';

import ErrorPage from '../../pages/Error';

const ErrorBoundary: React.FC = ({ children }) => (
  <ER FallbackComponent={ErrorPage}>{children}</ER>
);

export default ErrorBoundary;
