import React, { useState } from 'react'

export const Filter = (props) => {
    
    const [inputIsDisable, setInputIsDisable] = useState(false);
     

    const handleChangeCheckbox = (evento) => {
        if(evento.target.checked){
            setInputIsDisable(!inputIsDisable);
        }
    }

    return (
        <>
            <div className="ui slider checkbox">
                <input type="checkbox" name="newsletter" onClick={handleChangeCheckbox}/>
                <label>Fecha de Inicio</label>
            </div>
        </>
    )
}
