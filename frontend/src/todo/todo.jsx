import React, {Component} from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {
    constructor(props){
        super(props)
        //fazendo o bind para trazer o this (e suas props) a partir do click lá em todoForm
        this.handleAdd = this.handleAdd.bind(this)
    }

    //Função para lidar com Adicionar
    handleAdd(){
        console.log("This de handleAdd é: ", this)
    }

    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>
                {/* a props handleAdd está recebendo o valor de todoForm */}
                <TodoForm handleAdd={this.handleAdd}/>
                <TodoList/>
            </div>
        )
    }
}
