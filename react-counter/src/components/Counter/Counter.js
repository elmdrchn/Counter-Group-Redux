import React from 'react';

class Counter extends React.Component {

    addNumber = () => {
        this.props.onClickAdded(1, this.props.id);
        this.props.onCounterValueChange(1);
    };

    subtractNumber = () => {
        this.props.onClickDecreased(1, this.props.id);
        this.props.onCounterValueChange(-1);
    };

    render() {
        return(
            <div className = "counter">
                <button onClick = {this.addNumber}>+</button>
                <span>{this.props.counterValue}</span>
                <button onClick = {this.subtractNumber}>-</button>
            </div>
        );
    }
}

export default Counter;