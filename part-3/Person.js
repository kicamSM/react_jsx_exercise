const Person = (props) => {
    let response;

    if (props.age > 18) {
        response = "Please go vote!" } 
    else {
        response = "You must be 18"
    }
    let name; 
    if (props.name.length > 8 ) {
        name = props.name.slice(0, 6)
    } else {
        name = props.name
    }

    return (
        <div>
            <h3>{response}</h3>
            <p>Learn some more information about this person.</p>
            <ul>
                <li>Name: {name}</li>
                <li>Age: {props.age}</li>
            </ul>
            <h4>Hobbies</h4>
            <ul>{props.hobbies.map(h =>
                (
                <li>
                    <b>{h}</b>
                </li>
                ))}
            </ul>
        </div>
    )
}