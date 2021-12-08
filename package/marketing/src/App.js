import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { StylesProvider } from "@material-ui/styles";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <div>
      <StylesProvider>
        <Router>
          <Routes>
            <Route path="/pricing" element={<Pricing/>} />
            <Route path="/" element={<Landing/>} />
          </Routes>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
