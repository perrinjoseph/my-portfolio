import Layout from "./Components/Layout/Layout";
import Nav from "./Components/Nav/Nav";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Nav />
      <Layout>

      <Home/>
      </Layout>
    </div>
  );
}

export default App;
