import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#F3F3F3',
            padding: '12px',
            margin: '10px',
            borderRadius: '30px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
        }
    }

     render() {
         const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind
                    (this, id)} /> {' '}
                    { title  }
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                    </p>
                
            </div>
        )
    }
}

TodoItem.propTypes = {
    todos: PropTypes.object.isRequired
  }

const btnStyle = {
    background: '#F3F3F3',
    color: 'black',
    border: '6px 6px 6px 6px',
    padding: '8px 8px 8px 8px',
    borderRadius: '60%',
    cursor: 'pointer',
    float: 'right',
}
  
export default TodoItem
