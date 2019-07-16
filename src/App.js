//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import './App.css';
import BottomRow from './BottomRow';

//

function App() {
	const [ lionValue, setLion ] = useState(0);
	const [ tigerValue, setTiger ] = useState(0);
	const [ quarterValue, setQuarter ] = useState(0);

	console.log('lionValue', lionValue);
	console.log('tigerValue', tigerValue);
	console.log(quarterValue);

	//TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

	return (
		<div className="container">
			<section className="scoreboard">
				<div className="topRow">
					<div className="home">
						<h2 className="home__name">Lions</h2>

						{/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
						{/* don't forget to put all vanilla js inside the return in curly brackets} */}
						<div className="home__score">{lionValue}</div>
					</div>
					<div className="timer">00:03</div>
					<div className="away">
						<h2 className="away__name">Tigers</h2>
						<div className="away__score">{tigerValue}</div>
					</div>
				</div>
				<BottomRow quarter={quarterValue} />
			</section>
			<section className="buttons">
				<div className="homeButtons">
					{/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
					{/*  The onClick attribute is like an event listener */}
					<button className="homeButtons__touchdown" onClick={() => setLion(lionValue + 7)}>
						Home Touchdown
					</button>
					<button className="homeButtons__fieldGoal" onClick={() => setLion(lionValue + 3)}>
						Home Field Goal
					</button>
				</div>
				<div className="awayButtons">
					<button className="awayButtons__touchdown" onClick={() => setTiger(tigerValue + 7)}>
						Away Touchdown
					</button>
					<button className="awayButtons__fieldGoal" onClick={() => setTiger(tigerValue + 3)}>
						Away Field Goal
					</button>
					<button
						className="awayButtons__fieldGoal"
						// used the ternary operator to add the logic for the quarter button.
						onClick={() => setQuarter(quarterValue >= 4 ? quarterValue - 4 : quarterValue + 1)}
					>
						Change Quater
					</button>
				</div>
			</section>
		</div>
	);
}

export default App;
