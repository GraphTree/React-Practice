// movie app
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./routes/Home"
import Detail from "./routes/Detail"
import Graph from "./routes/Graph"


function App() {

return (
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Detail" element={<Detail/>} />
        <Route path="Graph" element={<Graph/>} />
      </Routes>
    </Router>
      
  </div>
)

}

export default App;
