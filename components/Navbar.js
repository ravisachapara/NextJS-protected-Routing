import { signOut, useSession } from 'next-auth/react'

const Navbar = () => {
  const { data: session } = useSession()
  return (
    <div>
      <button
        onClick={() => {
          signOut({ redirect: false })
        }}
      >
        Logout
      </button>
    </div>
  )
}

export default Navbar
