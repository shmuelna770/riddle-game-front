import { Link } from "react-router"

export default function Login() {
  return (
    <div>
      login
      <input type="text" placeholder="name" />
      <input type="text" placeholder="password"/>
      <button>login</button>
      <Link to='/play'>game</Link>
    </div>
  )
}
