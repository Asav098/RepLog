import ExerciseItem from './ExerciseItem.jsx'

function Session(props) {
    return (
        
        <li>{props.session.name} {props.session.date}
        <ul>
            {props.session.exercises.map(e=>(
                <ExerciseItem key={e.id} exercise={e}/>
            ))}
        </ul>
        </li>
    )
}
export default Session