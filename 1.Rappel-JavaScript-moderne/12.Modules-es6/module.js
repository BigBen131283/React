const age = 45;
let userName = "Giovanni";

function foo(){
    console.log("Hello from Module.js");
}
export default foo;

export {age as exactAge, userName};