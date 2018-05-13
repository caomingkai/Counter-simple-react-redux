import React from 'react';
import { connect }  from 'react-redux';

const Counter = ({count, plusHandler, minusHandler})=>(
    <div>
        <h5> Counter </h5>
        <div>{count}</div>
        <button onClick={plusHandler}>+</button> <button onClick={minusHandler}>-</button>
    </div>
)

const plusAction = ()=>({type: 'INC'})

const minusAction = ()=>({type: 'DEC'})

// map to props of presentational component
const mapStateToProps = (state)=>({count: state.count})

const mapDispatchToProps = (dispatch) => {
    return({
        plusHandler: ()=>dispatch(plusAction()),
        minusHandler:()=>dispatch(minusAction())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
