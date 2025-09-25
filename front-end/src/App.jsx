import { Route, Routes } from "react-router"

import Home from "./pages/Home"
import CreateNote from "./pages/CreateNote"
import Note from "./pages/Note"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateNote />} />
      <Route path="/note/:id" element={<Note />} />
    </Routes>
  )
}

export default App