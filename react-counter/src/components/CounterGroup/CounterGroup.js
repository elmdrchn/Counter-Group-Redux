import React, {Component} from 'react';
import Counter from '../Counter/Counter';

export default class CounterGroup extends Component {
    componentWillMount() {
        this.props.generateCounters(this.props.defaultCount);
    }

    regenerateCounters = () => {
        this.props.generateCounters(this.refs.countInput.value);
        this.props.clearCounterSum();
    };

    render() {
        return (
            <div>
                {this.props.counterArr.map(counterItem => (
                    <Counter
                        key={counterItem.id}
                        id={counterItem.id}
                        counterValue={counterItem.count}
                        onCounterValueChange={this.props.counterUpdateCallback}
                        onClickAdded={this.props.increaseNumber}
                        onClickDecreased={this.props.decreaseNumber}
                    />
                ))}
                <span>SUM：{this.props.counterSum}</span>
                <br/>
                <input type="text" ref="countInput" />
                <br/>
                <button onClick={this.regenerateCounters}>
                    NUMBER
                </button>
            </div>
        );
    }
}