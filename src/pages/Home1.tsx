import { Link } from "react-router";
// import "../style/home.css";
export default function Home() {
  return (
    <div className="homeMain">
      <div className="home">
         <h2>welcom to Riddle game</h2>
        <Link className="link" to="/login">
          login
        </Link>
        <Link className="link" to="/signUp">
          sign up
        </Link>
        <Link className="link" to="/play">
          play as a gust
        </Link>
      </div>
    </div>
  );
}
