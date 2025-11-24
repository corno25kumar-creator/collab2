import {SignedIn, SignedOut, SignInButton , SignOutButton, UserButton} from '@clerk/clerk-react'

import toast from 'react-hot-toast'
function HomePage() {
  return (
    <div>
       <h1>HomePage</h1>

       <button className="btn btn-secondary" onClick={()=> toast.success("this is done ")}>!click Me</button>

       <SignedOut >
        <SignInButton mode="modal" >login </SignInButton>
       </SignedOut>

       <SignedIn>
        <SignOutButton/>
       </SignedIn>

       <UserButton/>
       
    </div>
  )
}

export default HomePage
