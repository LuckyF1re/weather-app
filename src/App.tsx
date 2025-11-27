import Home from "./pages/Home/Home.tsx";
import {Route, Routes} from "react-router-dom";
import MouthStatistics from "./pages/MouthStatistics/MouthStatistics.tsx";
import {Header} from "./shared/Header/Header.tsx";
import {Popup} from "./shared/Popup/Popup.tsx";
import {useCustomDispatch, useCustomSelector} from "./hooks/hooksForStore.ts";
import {closePopup} from "./store/slices/popupSlice.ts";


function App() {

    const dispatch = useCustomDispatch();
    const {isOpen, selectDay} = useCustomSelector(state => state.popupSliceReducer);

    const handleClosePopup = () => {
        dispatch(closePopup());
    }

  return (
      <div className="global-container">
          <Popup
            isOpen={isOpen}
            day={selectDay}
            onClose={handleClosePopup}
          />
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
