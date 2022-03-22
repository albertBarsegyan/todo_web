import UnauthenticatedApp from './routes/unauthenticatedApp';
// import { SessionKeys } from './constants/session.constants';
import { useAuth } from './hooks/useAuth';
import AuthenticatedAppRoutes from './routes/authenticatedApp.routes';
import Spinner from './components/icons/spinner.icon';
import React from 'react';
// import useStorage from './hooks/useStorage';

function App() {
  console.log('env', process.env.NODE_ENV);

  // const { getDataFromStorage } = useStorage();
  const { user, loading } = useAuth();
  // const userFromSession = getDataFromStorage(SessionKeys.user);

  if (loading) {
    return <Spinner isFullScreen />;
  }

  return user ? <AuthenticatedAppRoutes /> : <UnauthenticatedApp />;
}

export default App;
