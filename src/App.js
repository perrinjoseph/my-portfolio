import Layout from "./Components/Layout/Layout";
import Nav from "./Components/Nav/Nav";
import Home from "./Pages/Home/Home";
import Footer from "./Sections/Footer/Footer";
import { Switch, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Skills from "./Pages/Skills/Skills";
import ResponsiveNav from "./Components/Nav/ResponsiveNav/ResponsiveNav";
import Projects from "./Pages/Projects/Projects";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";
import clara from "./Images/claraproject.webp";
import jreport from "./Images/jreport.png";
import optima from "./Images/Kelton Optima.png";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <ResponsiveNav />
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/clarabridge">
            <ProjectDetails
              image={clara}
              header={"Clarabridge Engage"}
              description={
                "Clarabridge Engage is a conversation analytics and engagement platform, to   connect with customers through digital channels including social networks, messaging applications, email, and community support forums, where you can provide superior customer experiences. SLA Monitoring module is to maximize and improve customer care metrics such as first resolution rate, reopen rate, and average handle time per case. The exclusive Watchdog feature informs how long mentions have been waiting for an answer so you don’t have to miss your response time SLAs. Automation Recipes module is to automatically identifies topics of social conversations and route mentions to the right agent at the right time. This feature allows agents to focus on outcomes rather than the process."
              }
            />
          </Route>
          <Route path="/optima">
            <ProjectDetails
              header={"OPtima"}
              image={optima}
              description={
                "Kellton Tech’s Optima is a digital enterprise platform that collects and aggregates troves of data from various sources and generates rapid insights for effective management and monitoring of operation and resources. The platform leverages new-age technologies, including the Internet of Things (IoT), Big Data, Edge Computing, Artiﬁcial Intelligence (AI), Blockchain, and Mobility to help enterprises deliver data intelligence everywhere and spot moments of opportunities—and risks—for sustained business efﬁciency."
              }
            />
          </Route>
          <Route path="/jreport">
            <ProjectDetails
              header={"JReport"}
              image={jreport}
              description={
                "JReport lets users design, embed, and scale sophisticated operational reports. Get precise layout control and easy distribution to thousands of users. It provides place visualizations, tables, lines, images, and more. It helps users to interact with data by filtering and sorting detailed data, images, sub-reports, and more. Controled pagination logic with conditions or formulas, which can be based on actual data or report variables. Schedule and securely send reports to run on daily, weekly, monthly, or custom schedules for thousands of users in a variety of formats like PDF, HTML, Excel, CSV, and other."
              }
            />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
