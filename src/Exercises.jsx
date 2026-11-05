

function Exercises(props){

    return(<div className="exercise-row">
        <span>{props.id}</span>
        <img src={props.img} height="100px" width="100px"></img>
        <span>{props.exercise}</span>

    </div>)
}

export default Exercises