import { Link } from "react-router-dom";
import proyectos from "../data/proyectos";
import { useState } from "react";

const ProyectosPage = () =>{

    const [selectedAridos,setSelectedAridos] =useState(2)
    const [selectedIzajes,setSelectedIzajes] = useState(2)
    const [selectedTareas,setSelectedTareas] = useState(2)

    const changeMovil = (id) => {
        if(id===1){
            setSelectedAridos(0)
        }else if(id===2){
            setSelectedIzajes(0)
        }else if(id===3){
            setSelectedTareas(0)
        }
    }

    const changeTablet = (id) =>{
        if(id===1){
            setSelectedAridos(1)
        }else if(id===2){
            setSelectedIzajes(1)
        }else if(id===3){
            setSelectedTareas(1)
        }
    }

    const changeDesktop = (id) =>{
        if(id===1){
            setSelectedAridos(2)
        }else if(id===2){
            setSelectedIzajes(2)
        }else if(id===3){
            setSelectedTareas(2)
        }
    }



    return(
        <>
        
            <main className="bg-gradient-to-r from-cyan-600 via-blue-400  to-blue-500 pb-20">
                <div className="h-4 shadow-xl shadow-white"></div>
                <h1 className="text-6xl text-center p-10 font-thin text-white ">Proyectos realizados</h1>
                <p className="text-white pb-10 px-20 text-center text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et nihil debitis voluptate, eaque similique quis saepe facere. Cumque dolores vel quam nisi maxime dicta praesentium velit totam harum nemo? Veritatis magni ratione, fugiat omnis quod doloribus cum fuga doloremque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cupiditate accusantium laboriosam quidem sunt corrupti odio tempora itaque officiis. Optio?</p>
                <div className="flex justify-center mt-10 flex-wrap">
                   
                   {
                    proyectos.map(proyecto=>(
                        <div className="sm:w-1/2 lg:w-1/4 m-10 bg-white border-l-2 border-y-1 border-b-2   border-blue-500 z-0  rounded-xl flex flex-col justify-around shadow-xl  shadow-cyan-800 p-5 h-screen" key={proyecto.id}>
                            <div className="rounded-xl h-1/3 flex justify-center">
                                <img className="object-fill shadow-md shadow-slate-400 h-full rounded-lg" src={proyecto.id===1 ? proyecto.imgPortada[selectedAridos] : proyecto.id===2 ? proyecto.imgPortada[selectedIzajes] : proyecto.imgPortada[selectedTareas]} alt={proyecto.titulo} />
                            </div>
                            <div className="text-blue-800">
                                 
                                <h2 className="text-3xl mb-2 text-center">{proyecto.titulo}</h2>
                                <div className="flex justify-center mt-3">
                                    <button onClick={()=>changeMovil(proyecto.id)}><i className="text-blue-800 text-2xl bi bi-phone mr-5"></i></button>
                                    <button onClick={()=>changeTablet(proyecto.id)}><i className="text-blue-800 text-2xl bi bi-tablet-landscape"></i></button>
                                    <button onClick={()=>changeDesktop(proyecto.id)}><i className="text-blue-800 text-2xl bi bi-display ml-5"></i></button>
                                </div>
                                <p className="mt-5 text-center">{proyecto.descripcion}
                                .</p>
                                    <div className="flex justify-around mt-10">
                                        <Link to={proyecto.urlProyecto} target="_blank" component={<button/>} className="border-l-2 text-center border-y-1 border-b-2  border-blue-500 shadow-md rounded-full w-1/2 py-2 mr-2 z-10 bg-blue-600 text-white font-xl ">Visitar</Link>
                                        <Link to={`/proyectos/${proyecto.id}`} component={<button/>} className="border-l-2 border-y-1 border-b-2  border-slate-300 shadow-md rounded-full w-1/2 py-2 mr-2 bg-white text-blue-800 font-xl text-center ">Más información</Link>
                                    </div>
                            </div>
                        </div>
                    ))
                   }
                   
                  
                </div>
            </main>
        </>
    )
}

export default ProyectosPage;