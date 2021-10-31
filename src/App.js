import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import "tailwindcss/tailwind.css";
import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AuthProvider from "./context/AuthProvider";
import AddNewTour from "./pages/AddNewTour/AddNewTour";
import BookTour from "./pages/BookTour/BookTour";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import MyBookins from "./pages/MyBookings/MyBookins";
import NotFound from "./pages/NotFound/NotFound";
import ProfileInfo from "./pages/ProfileInfo/ProfileInfo";
import TourList from "./pages/TourList/TourList";

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
            <PrivateRoute path="/add-new-tour">
              <AddNewTour></AddNewTour>
            </PrivateRoute>
            <PrivateRoute path="/tour-list">
              <TourList></TourList>
            </PrivateRoute>
            <PrivateRoute path="/profile-info">
              <ProfileInfo></ProfileInfo>
            </PrivateRoute>
            <PrivateRoute path="/my-bookings">
              <MyBookins></MyBookins>
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
