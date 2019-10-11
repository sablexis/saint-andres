import React, { Component } from "react";

//type entries = {};
class TodoItems extends Component <{entries: any}, { }>{

    constructor (props: {entries: any}) {
        super(props);

    }

    createTasks(item: any){
        return <li key={item.key}>{item.text}</li>
    }

    render () {
        var TodoEntries = this.props.entries;
        var listItems = TodoEntries.map(this.createTasks);

        return (
            <ul className="theList">
                {listItems}
            </ul>
        );

    }
};

export default TodoItems;