import React, {useState} from 'react'
import Exercises from './Exercises.jsx'
function App() {
    const[history,setHistory] = useState([
      {
        id:1,
        name: "Push Day",
        date: "11-11-2025",
        exercises : [
          {
            id:1,
            name:"Bench Press",
            sets: [
              {weight:50, reps:8, completed:true},
              {weight:40, reps:8, completed:true}
            ]
          },
          {
            id:2,
            name:"Chest Press",
            sets: [
              {weight:50, reps:8, completed:true},
              {weight:40, reps:8, completed:true}
            ]
          }
        ]
      }
      
    ]);

  return (
    <>
    <ul>
      {history.map(h=> (
      
      <li key={h.id}>
        {h.name} {h.date} 
        <ul> 
          {h.exercises.map(he=>(
        
            <li key={he.id}>
              {he.name} 
              <ul> 
                {he.sets.map((hee,i)=>(
                  <li key={i}>
                    weight: {hee.weight} - reps:{hee.reps} - completed: {hee.completed ? "Yes" : "No"}
            </li>
        
        ))}
        </ul>
      </li>
      ))}
     </ul>
     </li>
      ))}
    </ul>
    
    <Exercises id={1} img={"src/assets/dumbellrows.png"} exercise="Dumbell Rows" />
    <Exercises id={2} img={"src/assets/bench-press.jpg"} exercise="Bench press" />
    </>
  )
}

export default App
