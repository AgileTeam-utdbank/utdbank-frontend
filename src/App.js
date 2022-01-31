import { BrowserRouter } from "react-router-dom"
import "./App.css"
import { ToastContainer } from "react-toastify"
import CustomRoutes from "./router/CustomRoutes"
import { useEffect, useState } from "react"
import { useStore } from "./store"
import { getUser } from "./api/user-service"
import { loginSuccess } from "./store/user/userAction"
import LoadingPage from "./pages/LoadingPage"

function App() {
  const [loading, setLoading] = useState(true)
  const { dispatchUser } = useStore()

  const loadData = async () => {
    try {
      /**** LOAD USER ****/
      const respUser = await getUser()
      if (respUser.status !== 200) throw "An error occured whlie getting user"
      dispatchUser(loginSuccess(respUser.data))

      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])
  if (loading) return <LoadingPage />
  else
    return (
      <div className="App">
        <BrowserRouter>
          <CustomRoutes />
          <ToastContainer />
        </BrowserRouter>
      </div>
    )
}

export default App
