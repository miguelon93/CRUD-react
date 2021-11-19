import React, {useState} from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

//Array de Datos 

const initialDb = [
    {
        id:1,
        game: "Super Mario",
        company: "Nintendo",
    },
    {
        id:2,
        game: "Halo",
        company: "Bungie",
    },
    {
        id:3,
        game: "The Last of Us",
        company: "Naughty Dog",
    }
]

// Componente CrudApp

const CrudApp = () => {

    // ESTADOS

    // Evalúa los datos del Array
    const [db,setDb] = useState(initialDb);

    // Evalúa los datos del formulario 
    // NULL será que NO HAY ID y por lo tanto vamos a CREAR REGISTRO
    // DATATOEDIT es que HAY ID y por lo tanto vamos a ACTUALIZAR REGISTRO 
    const [dataToEdit, setDataToEdit] = useState(null);

    // FUNCIONES

    const createData = (registry) => {
        registry.id = Date.now(); //¿Generar key de otra forma?
        setDb([...db, registry])
    };

    const updateData = (registry) => {
        let newData = db.map(element => element.id === registry.id? registry : element);
        setDb(newData);
    };

    const deleteData = (registry) => {
        let isDelete = window.confirm(`¿Estas seguro de querer eliminar ${registry.game}?`);

        if(isDelete) {
            let newData = db.filter(element => element.id !== registry.id);
            setDb(newData);
        } else {
            return;
        }
    };

    return (
        <>
        <h2>CRUD App</h2>
        <article className="grid-1-2">

        <CrudForm 
            createData={createData} 
            updateData={updateData} 
            dataToEdit={dataToEdit} 
            setDataToEdit={setDataToEdit} 
        />

        <CrudTable 
            data={db} 
            setDataToEdit={setDataToEdit} 
            deleteData={deleteData}
        />
        
        </article>
        </>
    )
}

export default CrudApp