import React, {lazy} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ThemeProvider from "./components/generic/ThemeContext";
import ScreenProvider from "./components/generic/ScreenContext";
import AuthProvider from "./components/generic/AuthContext";

const Home = lazy(() => import("./components/pages/Home"))
const Layout = lazy(() => import("./components/layout/Layout"))
const Coding = lazy(() => import("./components/pages/Coding"))
const Consulting = lazy(() => import("./components/pages/Consulting"))
const Projects = lazy(() => import("./components/pages/Projects"))
const Team = lazy(() => import("./components/pages/Team"))
const Form = lazy(() => import("./components/pages/Form"))


function App() {
      return (
          <Router>
              <ThemeProvider>
                  <ScreenProvider>
                      <AuthProvider>
                          <Layout>
                              <Routes>
                                  <Route path={"*"} element={<Home />} />
                                  <Route path={"/coding"} element={<Coding />} />
                                  <Route path={"/consulting"} element={<Consulting />} />
                                  <Route path={"/projects"} element={<Projects />} />
                                  <Route path={"/team"} element={<Team />} />
                                  <Route path={"/form"} element={<Form />} />
                              </Routes>
                          </Layout>
                      </AuthProvider>
                  </ScreenProvider>
              </ThemeProvider>
          </Router>
      );
}

export default App;