import React from 'react';
import DiretaFilho from './DiretaFilho';

export default props => {
    return(
        <div>
            <DiretaFilho nome="Junio" idade={20} nerd={false}/>
            <DiretaFilho nome="Lazaro" idade={17} nerd={true}/>
        </div>
    )
}