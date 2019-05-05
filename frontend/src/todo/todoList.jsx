import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return (
            //para cada item (todo) retorna a descrição
            list.map(todo => (
                <tr key={todo._id}>
                    <td>{todo.description}</td>
                    <td>
                        <IconButton style='danger' icon='trash-o'
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