import React from 'react'

import MenuItem from './menuitem'
import MenuTree from './menuTree'

export default props => {
    return(
        <ul className="sidebar-menu">
            <MenuItem path='/' label='Dashboard' icon='dashboard'/>
            <MenuTree label='Cadastro' icon='edit'> 
            <MenuItem path='#billingcycles'
                label='Ciclos de Pagamentos' icon='usd' />
        </MenuTree>
        </ul>
    )
}