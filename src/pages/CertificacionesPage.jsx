
import { Link } from "react-router-dom";
import certificaciones from "../data/certificaciones";

const CertificacionesPage = () =>{
    return(
        <>
             <main className="bg-gradient-to-r from-cyan-600 via-blue-400  to-blue-500">
                <div className="h-4 shadow-xl shadow-white"></div>
                <h1 className="text-6xl text-center pt-10 pb-10 font-thin text-white">Certificaciones</h1>
                <p className="text-white pb-10 px-20 text-center text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et nihil debitis voluptate, eaque similique quis saepe facere. Cumque dolores vel quam nisi maxime dicta praesentium velit totam harum nemo? Veritatis magni ratione, fugiat omnis quod doloribus cum fuga doloremque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cupiditate accusantium laboriosam quidem sunt corrupti odio tempora itaque officiis. Optio?</p>
                <div className="flex flex-wrap justify-center">
                    {
                        certificaciones.map(certificado=>(
                            <div className=" mb-20 w-1/4 m-10" key={certificado.id}>
                                <div className="flex  mb-5 height108">
                                    <img src={certificado.urlImgLugar} className="rounded-2xl me-3 w-30 h-30"  alt={`${certificado.lugar} logo`}/>
                                    <div className=" text-white">
                                        <p className="font-extralight text-cyan-100">{certificado.fecha}</p>
                                        <h3 className="text-xl text-blue-950 font-bold">{certificado.titulo}</h3>
                                        <h3 className="text-xl font-medium text-blue-800">{certificado.lugar}</h3>
                                    </div>
                                </div>
                                <div className="text-white">
                                    
                                    <p>{`${certificado.descripcion.substring(0,150)}..........`}</p>
                                </div>
                                <div className="flex justify-evenly mt-5 ">
                                    <button  className="border-l-2 text-center border-y-1 border-b-2  border-blue-500 shadow-md rounded-full w-1/2 py-2 mr-2 z-10 bg-blue-600 text-white font-xl ">Ver certificado</button>
                                    <Link component={<button/>}  to={`/certificaciones/${certificado.id}`} className="border-l-2 border-y-1 border-b-2  border-slate-300 shadow-md rounded-full w-1/2 py-2 mr-2 bg-white text-blue-800 font-xl text-center ">Leer más</Link>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </main>
        </>
    )
}

export default CertificacionesPage;