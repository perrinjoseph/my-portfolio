import Layout from "./Components/Layout/Layout";
import Nav from "./Components/Nav/Nav";
import Home from "./Pages/Home/Home";
import Footer from "./Sections/Footer/Footer";
import { Switch, Route, Link } from "react-router-dom";
import About from "./Pages/About/About";
import Skills from "./Pages/Skills/Skills";
import ResponsiveNav from "./Components/Nav/ResponsiveNav/ResponsiveNav";

function App() {
  return (
    <div className="App">
      <Nav />
      <ResponsiveNav/>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About/>
          </Route>
          <Route exact path='/skills'>
            <Skills/>
          </Route>
        </Switch>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
