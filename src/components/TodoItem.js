import React, { Component } from 'react';

class TodoItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.done !== nextProps.done;
    }

    render() {
        const {done, children, onToggle, onRemove} = this.props;
        
        return (
            <div onClick={onToggle}>
                <input type="checkbox" checked={done} readOnly />
                {children}
                <span>
                    <button onClick={onRemove} onClick={(e) => {
                        onRemove();
                        e.stopPropagation();
                    }}>삭제</button>
                </span>
            </div>
        )
    }
}

export default TodoItem;