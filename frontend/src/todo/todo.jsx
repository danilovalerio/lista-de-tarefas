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
        this.handleRemove = this.handleRemove.bind(this)

        this.refresh()

    }

    refresh(){
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({...this.state, description: '', list: resp.data}))
        
        //carrega os objetos da lista e exibe no console
        // axios.get(`${URL}?sort=-createdAt`)
        //     .then(resp => console.log(resp.data))
    }

    //Para lidar com Adicionar
    handleAdd(){
        const description = this.state.description
        axios.post(URL, {description})
            .then(resp => this.refresh())

        console.log(this.state.description)
    }

    //Para lidar com o evento de alteração do input
    handleChange(e){
        this.setState({...this.state,
            description: e.target.value
         })
        
    }

    //Para lidar com a remoção de item
    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh())
        // console.log("remove item:",todo)
    }

    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>
                {/* a props handleAdd está recebendo o valor de todoForm */}
                <TodoForm description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}/>

                {/* list é passada através de props para o todoList */}
                <TodoList list={this.state.list}
                    handleRemove={this.handleRemove}/>
            </div>
        )
    }
}
