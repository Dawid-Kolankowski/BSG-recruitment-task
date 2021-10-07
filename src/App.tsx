import LoginPage from './pages/LoginPage/LoginPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './context/AuthProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import PrivateRoute from './components/CustomRoutes/PrivateRoute';
import PublicRoute from './components/CustomRoutes/PublicRoute';
import MovieCatalog from './pages/MoviePage/MovieCatalog';
import { CookiesProvider } from 'react-cookie';

const App = () => {
  return (
    <CookiesProvider>
      <AuthProvider>
        <ToastContainer />
        <Router>
          <PrivateRoute path="/" component={MovieCatalog} />
          <PublicRoute path="/login" component={LoginPage} restricted />
        </Router>
      </AuthProvider>
    </CookiesProvider>
  );
};

export default App;
