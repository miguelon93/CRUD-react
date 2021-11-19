import React, {useState,useEffect} from 'react'

// Estado inicial del Formulario

const initialForm = {
    game:"",
    company:"",
    id:null,
}

// Componente CrudForm
const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {

    //Estados

    // Actualiza el estado del Formulario
    const [form,setForm] = useState(initialForm);

    // Use effect: Renderiza el componente CrudForm cada vez que cambia dataToEdit.
    // Si existe dataToEdit cambia el estado de CrudForm a dataToEdit.
    // Sino existe dataToEdit el estado de CrudForm será initialForm.

    useEffect(() => {
        if(dataToEdit) {
            setForm(dataToEdit);
        } else {
            setForm(initialForm);
        }
    },[dataToEdit]);

    //Función que se ejecuta al modificar el valor del input
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        });
    };

    //Función que se ejecuta al pulsar el botón Enviar
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.game || !form.company) {
            alert("Datos incompletos");
            return;
        }

        if(form.id === null) {
            createData(form);
        } else {
            updateData(form);
        }
        handleReset();
    };

    const handleReset = (e) => {
        setForm(initialForm);
        setDataToEdit(null);
    }

    return (
        <>
            <h3>{dataToEdit? "Editar" : "Agregar"}</h3>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="game" 
                placeholder="Juego" 
                onChange={handleChange} 
                value={form.game} 
                />
                
                <input 
                type="text" 
                name="company" 
                placeholder="Compañía" 
                onChange={handleChange} 
                value={form.company} 
                />
                
                <input type="submit" value="Enviar" />
                <input type="submit" value="Limpiar" onClick={handleReset} />
            </form>
        </>
    )
}

export default CrudForm