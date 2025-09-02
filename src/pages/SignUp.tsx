import { Link } from "react-router";

export default function SignUp() {
  
    return (
    <div>
      signUp
      <form action="submit">
      <input type="text" placeholder="name" />
      <input type="text" placeholder="password"/>
      <button>submit</button>
      </form>
      <Link to='/play'>game</Link>
    </div>
  )
}
