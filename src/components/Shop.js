import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index'


function Shop() {
    const dispatch = useDispatch();
    const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch);
    const amount = useSelector(state => state.amount)
    return (
        <div>
            <h2>Deposit/Withdraw Money</h2>
            <button className="btn btn-sm btn-primary mx-2" onClick={() => { withdrawMoney(100) }}>-</button>
            Updated Balance = {amount}
            <button className="btn btn-sm btn-primary mx-2" onClick={() => { depositMoney(100) }}>+</button>
        </div>
    )
}

export default Shop
