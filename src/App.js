// import logo from "./logo.svg";
import "./components/assets/js/script.js";
import "./nav-header.css";
import "./components/assets/css/style.css";
import "./components/assets/css/footer.css";
import Footer from "./components/Footer";
import Pubnav from "./components/Pubnav";
import Revslider from "./components/Revslider.jsx";
// import Contact from './components/ContactUs'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import  Contact  from './components/ContactUs'

function App() {
  return (
      <div className="App">
        <Router>
          
            <header className="App-header">
                <Pubnav/>
              </header>

              <div id="revslider-wrap">
                <Revslider/>
              </div>
              <Switch>
                <Route path='/contactUs'>
                  <div id="content">
                    <Contact />
                  </div>
                </Route>
              </Switch>              

              <footer>
                <Footer/>
              </footer>

            
          </Router>
        </div>
      
  );
}

export default App;
