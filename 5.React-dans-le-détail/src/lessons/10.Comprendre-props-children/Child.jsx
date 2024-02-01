export default function Child(props) {
  console.log(props);  
  return (
    <div>{props.children}</div>
    // Cela permet d'avoir de la flexibilité
  )
}