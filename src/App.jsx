import { Outlet } from "react-router-dom"
import Navbar from "./components/shared/navbar"
import Footer from "./components/shared/footer"

function App() {

  return (


    <>
      <Navbar />
      <main className="min-h-[85vh]">
        <Outlet />
      </main>
      <Footer />
    </>

  )
}

export default App
