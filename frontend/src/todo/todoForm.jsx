import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {
    //adicionar atalhos para busca, adição outros..
    const keyHandler = (e) => {
        //se a chave é enter
        if (e.key === 'Enter'){
            //shift está pressionado? 
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if(e.key === 'Escape'){
            props.handleClear()
        }
    }


    return (
            <div role='form' className='todoForm'>
                <Grid cols='10 9 10'>
                    <input id='desciption' className='form-control'
                        placeholder='Adicione uma tarefa'
                        onChange={props.handleChange}
                        onKeyUp={keyHandler}
                        value={props.description}>
                    </input>
                </Grid>
        
                <Grid cols='12 3 2'>
                <IconButton style='primary' icon='plus'
                    onClick={props.handleAdd}>
                </IconButton>
                <IconButton style='info' icon='search'
                    onClick={props.handleSearch}>
                </IconButton>
                <IconButton style='default' icon='close'
                    onClick={props.handleClear}>
                </IconButton>
                </Grid>
            </div>
        )
}