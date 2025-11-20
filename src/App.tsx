import Home from "./pages/Home/Home.tsx";
import {Route, Routes} from "react-router-dom";
import MouthStatistics from "./pages/MouthStatistics/MouthStatistics.tsx";
import {Header} from "./shared/Header/Header.tsx";
import {Popup} from "./shared/Popup/Popup.tsx";


function App() {


  return (
      <div className="global-container">
          <Popup/>
          <div className="container">
              <Header />
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/mouth-statistics" element={<MouthStatistics/>} />
              </Routes>
          </div>
      </div>
  )
}

export default App
