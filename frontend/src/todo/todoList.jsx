import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return (
            //para cada item (todo) retorna a descrição
            list.map(todo => (
                <tr key={todo._id}>
                    <td className={todo.done ? 'markedAsDone' : ''}>
                        {todo.description}</td>
                    <td>
                        <IconButton style='success' icon='check' 
                            hide={todo.done}
                            onClick={() => props.handleMarkAsDone(todo)}>
                        </IconButton>
                        
                        <IconButton style='warning' icon='undo'
                            hide={!todo.done}
                            onClick={() => props.handleMarkAsPending(todo)}>
                        </IconButton>

                        <IconButton style='danger' icon='trash-o'
                            hide={!todo.done}
                            onClick={() => props.handleRemove(todo)}>

                        </IconButton>
                    </td>
                </tr>
            ))
        )

    }


    return(
        <table>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {/* chama a função que vai renderizar as linhas tabela */}
                {renderRows()}
            </tbody>
        </table>
    )
}