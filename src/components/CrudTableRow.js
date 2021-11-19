import React from 'react'

const CrudTableRow = ({registry, setDataToEdit, deleteData}) => {
    let {game,company} = registry;
    return(
        <tr>
            <td>{game}</td>
            <td>{company}</td>
            <td>
                <button onClick={() => setDataToEdit(registry)}>Editar</button>
                <button onClick={() => deleteData(registry)}>Eliminar</button>
            </td>
        </tr>
        
    )
}

export default CrudTableRow

