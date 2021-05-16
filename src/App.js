import Layout from "./Components/Layout/Layout";
import Nav from "./Components/Nav/Nav";
import Home from "./Pages/Home/Home";
import Footer from "./Sections/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Layout>
        <Home />
      </Layout>
      <Footer/>
    </div>
  );
}

export default App;
