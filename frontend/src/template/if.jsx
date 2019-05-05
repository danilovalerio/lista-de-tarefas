import React from 'react'
//componente para usar na renderização condicional 
export default props => {
    if(props.test){
        return props.children
    } else {
        return false
    }
}