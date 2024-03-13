import {Link} from "react-router-dom"

const Navbar = () =>{
    return(
        <header className="bg-blue-950 text-white p-5 flex justify-between">
            <div className="w-1/2">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ex?</p>
            </div>
            <nav className="flex justify-around w-1/2">
                <Link className="underline" to="/">Inicio</Link>
                <Link className="underline" to="/sobreMi">Sobre Mi</Link>
                <Link className="underline" to="/proyectos">Proyectos</Link>
                <Link className="underline" to="/certificaciones">Certificaciones</Link>
                <Link className="underline" to="/contacto">Contacto</Link>
                
            </nav>
        </header>
    )
}

export default Navbar;