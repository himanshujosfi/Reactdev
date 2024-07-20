import { Route, Routes, BrowserRouter } from "react-router-dom"
import Main from "./Frontend/Pages/Main"
import Hearder from "./Frontend/Pages/Hearder"
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "/node_modules/primeflex/primeflex.css"
import HomePage from "./Frontend/Pages/HomePage";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path='/' element={<Hearder />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
