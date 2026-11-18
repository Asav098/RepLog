function Session(props) {
    return (
        <li>{props.session.name} {props.session.date}</li>
    )
}
export default Session