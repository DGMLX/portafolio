import { useParams } from "react-router-dom";
import proyectos from "../data/proyectos";

const ProyectoPage = () =>{

    const {id} = useParams()

    const proyect = proyectos.filter(proyecto=>proyecto.id===Number(id))
    //proyect[0]
    return(
        <>
            <main className="bg-gradient-to-r from-cyan-600 via-blue-400  to-blue-500 h-screen">
                <div className="h-4 shadow-xl shadow-white"></div>
            
            </main>
        </>
    )
}

export default ProyectoPage;