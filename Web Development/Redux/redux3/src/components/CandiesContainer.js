import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCandies } from '../redux'

function CandiesContainer() {
    const numOfCandies = useSelector(state => state.candies.numOfCandies)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num Of Candies - {numOfCandies}</h2>
            <button onClick={() => { dispatch(buyCandies()) }}>Buy Candies</button>
        </div>
    )
}

export default CandiesContainer
