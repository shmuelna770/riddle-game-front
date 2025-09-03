import { Link, useNavigate } from "react-router";

export default function Option() {
  const navigate  = useNavigate(); 
  return (
    <div>
      options
      <button>play game</button>
      <button>delete riddle</button>
      <button>update riddle</button>
      <button onClick={()=>navigate('/showAllRiddles')}>show all riddles</button>
      <Link to="/">home</Link>
    </div>
  );
}
