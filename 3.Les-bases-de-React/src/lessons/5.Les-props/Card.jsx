// export default function Card(props) {
export default function Card({id, state, changeState}) {
// Destructurer les props :
{/* Cela permet de créer des paramètres qui vont correspondrent au premier objet que l'on passe à la fonction */}
    console.log(id, state);

    return (
        <div>
            <h2>Voici la carte</h2>
            {/* <p>User : {props.id}</p> */}
            <p>User : {id}</p>
            {/* <p>State du parent : {props.state}</p> */}
            <p>State du parent : {state}</p>
            <button onClick={() => changeState("Buongiorno")}>Changer le State</button>
        </div>
    )
}