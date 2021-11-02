import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import ManageOrder from './Pages/Admin/ManageOrder/ManageOrder';
import MyOrder from './Pages/Admin/MyOrder/MyOrder';
import NewService from './Pages/Admin/NewService/NewService';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Orders from './Pages/Orders/Orders';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import 'animate.css';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/tours/:tourId">
              <Orders></Orders>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/myOrders">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/manageOrders">
              <ManageOrder></ManageOrder>
            </Route>
            <Route path="/newService">
              <NewService></NewService>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
