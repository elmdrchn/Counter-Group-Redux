import { connect } from "react-redux";
import CounterGroup from "../components/CounterGroup/CounterGroup";

const mapStateToProps = state => ({
    counterSum: state.counterSum,
    counterArr: state.counterArr
});

const mapDispatchToProps = dispatch => ({
    decreaseNumber: (changedNum, id) =>
        dispatch({
            type: "DECREASE",
            payload: { changedNum, id }
        }),
    increaseNumber: (changedNum, id) =>
        dispatch({
            type: "INCREASE",
            payload: { changedNum, id }
        }),
    counterUpdateCallback: changedNum =>
        dispatch({
            type: "COUNTER_SUM",
            payload: changedNum
        }),
    generateCounters: counterNum =>
        dispatch({
            type: "GENERATE_COUNTERS",
            payload: parseInt(counterNum)
        }),
    clearCounterSum: () =>
        dispatch({
            type: "CLEAR_SUM"
        })
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterGroup);
