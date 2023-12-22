import CartWidget from "../CartWidgets/CartWidget"

const NavBar =() => { 
    return (
        <nav>
            <h2>RElojes Jc</h2>
            <div>
                <button>relojes deportivos</button>
                <button>relojes de vestir</button>
                <button>relojes de juguete</button>
            </div>
            <CartWidget />
        </nav>
    )

}

export default NavBar