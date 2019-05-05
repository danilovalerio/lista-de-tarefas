import React, { Component } from 'react'

export default class Grid extends Component {
    //irá receber 4 números e converter para o padrão do bootstrap
    toCssClasses(numbers){
        //separar os números em um array
        const cols = numbers ? numbers.split(' ') : []
        let classes = ''
        //adota as medidas para as colunas xs, sm, md e lg
        if(cols[0]) classes += `col-xs-${cols[0]}`
        if(cols[1]) classes += ` col-sm-${cols[1]}`
        if(cols[2]) classes += ` col-md-${cols[2]}`
        if(cols[3]) classes += ` col-lg-${cols[3]}`

        return classes
    }

    render(){
        const gridClasses = this.toCssClasses(this.props.cols || 12)
        return(
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}