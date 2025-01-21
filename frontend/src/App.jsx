import { Box } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import Createpage from "./pages/CreatePage.jsx"
import Homepage from "./pages/HomePage.jsx"
import Navbar from "./components/Navbar.jsx"

function App() {
  
  return (
    <Box minH={"100vh"}>
      <Navbar />
      <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/create" element={<Createpage />}/>
      </Routes>
    </Box>
  )
}

export default App
