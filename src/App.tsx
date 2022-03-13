import { SessionKeys } from './constants/session.constants';
import useStorage from './hooks/useStorage';
import AuthenticatedAppRoutes from './routes/authenticatedApp.routes';
import UnauthenticatedApp from './routes/unauthenticatedApp';

function App() {
  const { getDataFromStorage } = useStorage();
  const userFromSession = getDataFromStorage(SessionKeys.user);

  return userFromSession ? <AuthenticatedAppRoutes /> : <UnauthenticatedApp />;
}

export default App;
