import { Routes, Route , Navigate} from 'react-router'
import { useUser } from '@clerk/clerk-react'
import HomePage from './pages/HomePage'
import ProblemPage from './pages/ProblemPage'
import { Toaster } from 'react-hot-toast'


function App() {

  const {isSignedIn}=useUser()
  return (
    <>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/Problems" element={isSignedIn?<ProblemPage/>: <Navigate to={"/"}/>}/>
    </Routes>
    <Toaster toastOptions={{duration:2000}}/>
    </>
  
  )
}

export default App
