import React, { Component } from "react";
import TodoItems from "./TodoItems";
//type items = {};
class TodoList extends Component <{}, { items: any }> {
    _inputElement: any
    constructor (props: any) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
    }
    
    addItem(e: any){
        if (this._inputElement.value !== ""){
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };
            
        this.setState((prevState) => {
            return{
                items: prevState.items.concat(newItem)
            };
        });

        this._inputElement.value = "";

        }
        
        console.log(this.state.items);

        e.preventDefault();

    };

       render () {
        return(
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a}
                            placeholder="task one">
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
                 <TodoItems entries ={this.state.items}/>
            </div>
        );
    }
}

export default TodoList;