import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SobreMiPage from "../pages/SobreMiPage";
import ProyectoPage from "../pages/ProyectosPage";
import CertificacionesPage from "../pages/CertificacionesPage";
import ContactoPage from "../pages/ContactoPage";

const AppRouter = () =>{
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/sobreMi" element={<SobreMiPage/>}/>
            <Route path="/proyectos" element={<ProyectoPage/>}/>
            <Route path="/certificaciones" element={<CertificacionesPage/>}/>
            <Route path="/contacto" element={<ContactoPage/>}/>
        </Routes>
    )

}


export default AppRouter;