import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

//url base da nossa API
const URL = 'http://localhost:3003/api/todos'


export default class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {description: '', list: []}

        //fazendo o bind para trazer o this (e suas props) a partir do click lá em todoForm
        this.handleAdd = this.handleAdd.bind(this)
        //bind para trazer as props a partir do todoForm
        this.handleChange = this.handleChange.bind(this)
    }

    //Para lidar com Adicionar
    handleAdd(){
        const description = this.state.description
        axios.post(URL, {description})
            .then(resp => console.log('Funcionou!'))

        console.log(this.state.description)
    }

    //Para lidar com o evento de alteração do input
    handleChange(e){
        this.setState({...this.state,
            description: e.target.value
         })
        
    }

    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>
                {/* a props handleAdd está recebendo o valor de todoForm */}
                <TodoForm description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}/>
                <TodoList/>
            </div>
        )
    }
}
