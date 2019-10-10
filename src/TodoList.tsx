import React, { Component } from "react";

class TodoList extends Component {
    constructor (props: any) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
    }
    
    addItem(e: any){

    }

       render () {
        return(
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input placeholder="task one">
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default TodoList;