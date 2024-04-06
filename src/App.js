import Header from './pages/header';
import Home from './pages/home';
import Package from './pages/package';
import Sign_up from './pages/sign-up';
import Gallery from './components/gallery';
import Footer from './pages/footer';
import Singin from './pages/Sing-in';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/package">
            <Package />
          </Route>
          <Route path="/Sign_up">
           <Sign_up />
          </Route>
          <Route path="/Singin">
            <Singin />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
