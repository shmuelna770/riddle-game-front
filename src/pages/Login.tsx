import { Link } from "react-router";

export default function Login() {
  return (
    <div>
      login
      <form action="submit">
        <input type="text" placeholder="name" />
        <input type="text" placeholder="password" />
        <button type="submit">login</button>
      </form>
      <Link to="/play">game</Link>
    </div>
  );
}
