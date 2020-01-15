// eslint-disable-next-line
import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions/';

const Application = () => {
	const counter = useSelector((state) => state.counter);
	const disPatch = useDispatch();
	return (
		<div>
			<div className="redux_div">
                <div className="first_div_redux" >
                <h2> This is a sample project test</h2>
                <p> This is a sample project test</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et.  egestas  pretium tincidunttellus massa <br/> pharetra nulla. Rhoncus morbi dui, enim vulputate feugiat vitae amet pellentesque.</p>
                
                </div>
                <div className="second_div_redux">
                
                <div className="div_inside_second_div_redux">
                    <p className="counter_number">{counter}</p>
					<button
						onClick={() => {
							disPatch(increment());
						}}
					>
						Add
					</button>
					<button
						onClick={() => {
							disPatch(decrement());
						}}
					>
						Minus
					</button>
                    </div>
                
                    
					
				</div>
			</div>
		</div>
	);
};

export default Application;
