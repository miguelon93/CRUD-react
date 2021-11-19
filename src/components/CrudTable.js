import React from 'react'
import CrudTableRow from './CrudTableRow'

const CrudTable = ({data, setDataToEdit, deleteData}) => {
    return (
        <>
        <h3>Tabla de datos</h3>
        <table>
            <thead>
                <tr>
                    <th>Juego</th>
                    <th>Compañía</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {data.length === 0 ? (
                <tr>
                    <td colSpan="3"></td>
                    </tr>
                ) : (
                    data.map((registry) => (
                        <CrudTableRow 
                            key={registry.id} 
                            registry={registry} 
                            setDataToEdit={setDataToEdit}
                            deleteData={deleteData}
                        />
                    ))
                )}
            </tbody>
        </table>
        </>
    )
}

export default CrudTable