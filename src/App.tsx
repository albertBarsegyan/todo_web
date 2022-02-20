import AuthenticatedAppRoutes from "./routes/authenticatedApp.routes";
import UnauthenticatedApp from "./routes/unauthenticatedApp";

function App() {
  const user = null;

  if (user) {
    return <AuthenticatedAppRoutes />;
  }

  return <UnauthenticatedApp />;
}

export default App;
