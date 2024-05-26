export default function Pseudo({inputStates, setInputStates, showValidation}) {
  return (
    <>
     <label 
        htmlFor="userName" 
        className="text-slate-50">
            Votre Pseudo (3-64 caractères)
     </label>
     <input 
        id="userName"
        type="text"
        className="rounded w-full p-1 mt-2"
        value={inputStates.pseudo}
        onChange={e => setInputStates({...inputStates, pseudo: e.target.value})}
     />
     {showValidation.pseudo && (
        <p className="text-red-400 font-semibold">
            Votre pseudo doit contenir entre 3 et 64 caractères.
        </p>
     )}
    </>
  )
}