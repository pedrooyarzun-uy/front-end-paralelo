import React from 'react'

export const TelecargasList = (props) => {
    const lines = props.registros.map((registro) => {
        return (
            <tr className='center aligned' key={registro.versionNumber}>
                <td>{registro.versionNumber}</td>
                <td>{registro.dateCreated}</td>
            </tr>
        );
    });
  
    return (
        <table className='ui striped celled table'>
            <thead>
                <tr className='center aligned'>
                    <th>Version</th>
                    <th>Fecha</th>
                </tr>
            </thead>
            <tbody>
                {lines}
            </tbody>
        </table>
    );
};
