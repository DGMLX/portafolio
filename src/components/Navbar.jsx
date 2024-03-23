import {Link} from "react-router-dom"

const Navbar = () =>{
    return(
        <header className="bg-gradient-to-r from-cyan-600 via-blue-400  to-blue-500 text-white p-5 flex justify-between">
            <nav className="flex justify-around w-1/2">
                <Link className="text-xl font-medium" to="/">Inicio</Link>
                <Link className="text-xl font-medium" to="/sobreMi">Sobre Mi</Link>
                <Link className="text-xl font-medium" to="/proyectos">Proyectos</Link>
                <Link className="text-xl font-medium" to="/certificaciones">Certificaciones</Link>
                <Link className="text-xl font-medium" to="/contacto">Contacto</Link>
            </nav>
            <div className="flex">
                <i className="bi bi-linkedin text-3xl me-5"></i>
                <i className="bi bi-github text-3xl me-5"></i>
                <i className="bi bi-whatsapp text-3xl"></i>
            </div>
            <div>
                <p className="text-end text-2xl font-thin">Diego Altamirano</p>
            </div>
        </header>
    )
}

export default Navbar;