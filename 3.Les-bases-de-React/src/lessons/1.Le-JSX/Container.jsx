function Container() {

    const txt = "Test"

    return (
        <div className="">
            <p>Lorem ipsum dolor sit amet.</p>
            <ul className="list">
                <li>item1</li>
                <li>item2</li>
                <li>item3</li>
                <li>item4</li>
                <li>item5</li>
            </ul>
            <button>Valider</button>
            <p>{10+10}</p>
            <p>{"ab"+"c"}</p>
            <p>{"Le chat saute !".toUpperCase()}</p>
            <p>{txt}</p>
            <p>{[1,2,3, "a"]}</p>
            {/* <p>{[<span>Hello World</span>]}</p> */}
            <p className="txt">Lorem ipsum dolor sit amet.</p>
            <button aria-label="toggle-button">Toggler</button>
            <label htmlFor="">Label</label>
            {/* btn.addEventListener("click", () => console.log("Click")) */}
            <button onClick={() => console.log("Click")}>Click</button>
        </div>
    )
}

export default Container

/* ************************************************************
Add ons
ES7+ react/Redux/React-native (search React)

Raccourcis

rfc
rfce

Cours

Tout ce qui est dans un tableau est retourné sauf les objets
Les éléments autofermants doivent être fermés. 
On utilise className et pas class

************************************************************ */