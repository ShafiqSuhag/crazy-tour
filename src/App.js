import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import "tailwindcss/tailwind.css";
import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AuthProvider from "./context/AuthProvider";
import BookTour from "./pages/BookTour/BookTour";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div>
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
            <PrivateRoute path="/contact">
              <Contact></Contact>
            </PrivateRoute>
            <PrivateRoute path="/book-tour">
              <BookTour></BookTour>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
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
