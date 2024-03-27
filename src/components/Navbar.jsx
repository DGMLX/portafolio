import { useState } from "react";
import {Link} from "react-router-dom"

const Navbar = () =>{

    const [openNav,setOpenNav] = useState(false)


    const changeNavbar = () =>{
        setOpenNav(!openNav)
    }

    return(
        <header className="bg-gradient-to-r from-cyan-600 via-blue-400  to-blue-500 text-white p-5 ">
            <div className="flex justify-between">
                <button onClick={()=>changeNavbar()}><i className="text-4xl md:hidden bi bi-list"></i></button>
            
                <nav className="lg:w-1/2 hidden md:flex">
                    <Link className="text-xl font-medium mr-3" to="/">Inicio</Link>
                    <Link className="text-xl font-medium mr-3" to="/sobreMi">Sobre Mi</Link>
                    <Link className="text-xl font-medium mr-3" to="/proyectos">Proyectos</Link>
                    <Link className="text-xl font-medium mr-3" to="/certificaciones">Certificaciones</Link>
                    <Link className="text-xl font-medium" to="/contacto">Contacto</Link>
                </nav>
                <div className="md:hidden lg:flex">
                    <a href=""><i className="bi bi-linkedin text-3xl me-5"></i></a>
                    <a><i className="bi bi-github text-3xl me-5"></i></a>
                    <a><i className="bi bi-whatsapp text-3xl"></i></a>
                </div>
            <div>
                <p className="text-end text-2xl font-thin">Diego Altamirano</p>
            </div>
            </div>
            {/* menu movil */}
            <div>
                <nav  className={`${openNav ? 'block' : 'hidden' } md:hidden mt-5`}>
                    <Link className="text-xl text-center font-medium mr-3 block" to="/">Inicio</Link>
                    <Link className="text-xl text-centerfont-medium mr-3 block  text-center" to="/sobreMi">Sobre Mi</Link>
                    <Link className="text-xl font-medium mr-3 block  text-center" to="/proyectos">Proyectos</Link>
                    <Link className="text-xl font-medium mr-3 block  text-center" to="/certificaciones">Certificaciones</Link>
                    <Link className="text-xl font-medium block  text-center" to="/contacto">Contacto</Link>
                </nav>
                    
            </div>
        </header>
    )
}

export default Navbar;