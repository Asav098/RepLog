function Setitem(props){
    return(
        <li>weight:{props.weight} reps:{props.reps} completed:{props.completed ? "Yes" : "No"} </li>
    )
}

export default Setitem