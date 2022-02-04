import React from "react";

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Categories from "../containers/Categories";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Categories />}>
        </Route>
      </Routes>
    </Router>
  );
}
 
export default App;