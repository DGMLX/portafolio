import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SobreMiPage from "../pages/SobreMiPage";
import CertificacionesPage from "../pages/CertificacionesPage";
import ContactoPage from "../pages/ContactoPage";
import CertificadoPage from "../pages/CertificadoPage";
import ProyectosPage from "../pages/ProyectosPage";
import ProyectoPage from "../pages/ProyectoPage";

const AppRouter = () =>{
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/sobreMi" element={<SobreMiPage/>}/>
            <Route path="/proyectos" element={<ProyectosPage/>}/>
            <Route path="/proyectos/:id" element={<ProyectoPage/>}/>
            <Route path="/certificaciones" element={<CertificacionesPage/>}/>
            <Route path="/certificaciones/:id" element={<CertificadoPage/>}/>
            <Route path="/contacto" element={<ContactoPage/>}/>
        </Routes>
    )

}


export default AppRouter;