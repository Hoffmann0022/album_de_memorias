import { Album } from "./pages/album";
import { GetSticker } from "./pages/getSticker";
import { PrintCard } from "./pages/printCard";

import { HashRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<Album />} />
          <Route path="/figurinha" element={<GetSticker />} />
          <Route path="/figurinha/:id" element={<PrintCard />} />
        </Routes>
      </HashRouter>
  )
}

export default App
