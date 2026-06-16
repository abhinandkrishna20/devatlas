
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "./routes/AppRoutes"

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
     <AppRoutes />
     </BrowserRouter>
    </div>
  )
}

export default App