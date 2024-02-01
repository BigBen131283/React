import Child from "./Child"

Child
export default function Container() {
  return (
    <div>
      <h1>Props children</h1>
      {/* <Child txt={"test"}/> */}
      <Child>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, accusantium modi excepturi alias dolor velit eveniet quae ullam molestias voluptates beatae. Eius aspernatur ea modi pariatur assumenda ipsum harum omnis ipsam commodi, tempora illum quidem, blanditiis a velit dolorum sed?</p>
      </Child>
      <Child>
        <button>Valider</button>
      </Child>
      <Child>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </Child>
    </div>
  )
}
