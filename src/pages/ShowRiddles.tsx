import { useEffect, useState } from "react"

type Riddle = {
    _id:string;
    name:string;
    taskDescription:string;
    correctAnswer:string;
}
export default function ShowRiddles() {
    const [riddles,setRiddles] = useState<Riddle[]>([]);
    const [error, setError] = useState<string>("");

  useEffect(()=>{
    const fetchRiddles = async()=>{
        try{
            const res = await fetch("http://localhost:3041/riddles");
            const data = await res.json(); 
            setRiddles(data.riddles)
            console.log(data)
        }
        catch(err){
            console.error(err);
            setError("faild to load all riddles")
        }
    }
    fetchRiddles();
  },[]);
    return (

    <div>
      <h2>show all riddles</h2>
        <ul>
        {riddles.map((r) => (
          <li key={r._id}>
            <strong>{r.name}</strong>: {r.taskDescription} Answer: {r.correctAnswer}
          </li>
        ))}
      </ul>
      {error && <p>{error}</p>}
    </div>
  )
}
