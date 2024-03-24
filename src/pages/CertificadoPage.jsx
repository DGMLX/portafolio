import { useParams } from "react-router-dom"
import certificaciones from "../data/certificaciones"


const CertificadoPage = () =>{ 

    const {id} = useParams()
    const certi = certificaciones.filter(certificado=>certificado.id===Number(id))
    console.log(certi[0])

    return(
        <>
            <main className="bg-gradient-to-r from-cyan-600 via-blue-400  to-blue-500 h-screen">
                <div className="h-4 shadow-xl shadow-white"></div>
            
            </main>

        </>

    )
}

export default CertificadoPage