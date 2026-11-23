import Setitem from './Setitem.jsx'
function ExerciseItem(props){
    return(
        <li>{props.exercise.name}
        <ul>{props.exercise.sets.map(e=>(
            <Setitem weight={e.weight} reps={e.reps} completed={e.completed}/>  
        ))}
            </ul></li>
    )
}

export default ExerciseItem