import Link from 'next/link'
import Navbar from '../components/navbar'

export default function AuthLayout({ children }) {
  return (
    <>
        <nav>
            <h1>Dojo Helpdesk</h1>
            <Link href="/signup">Sign up</Link>
            <Link href="/login">Log in</Link>
        </nav>
        {children}
    </>
  )
}
