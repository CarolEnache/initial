import React, { Component } from 'react';
import { connect } from 'react-redux';
import { store } from '../../src/index';

import { suits, values } from "../utils";

import Layout from "./Layout";
import Deck from "./Deck";
import Player from "./Player";
import Button from "./Button";

import { Footer } from "../Styles/Styled";
import { addPlayer } from '../Redux/actions/index';

const mapStateToProps = (state) => ({
		players: state.players
});
const mapDispatchToProps = (dispatch) => ({
		addPlayer: () => dispatch(addPlayer())
});

class App extends Component {
	componentDidMount() {
		store.subscribe(() => {
			this.forceUpdate();
		});
	}
	// state = {
	// 	players: ['player ', 'player '],
	// }

	// handlePlayer = () => {
	// 	const newList = this.state.players;
	// 	if (newList.length <= 5) {
	// 		newList.push('player')
	// 		this.setState({
	// 			players: [...newList]
	// 		})
	// 	}
	// 	console.log(newList, 'hello world')
	// }

	render() {
		console.log(this.props);
		// const { players } = this.state;
		const { players, addPlayer } = this.props;

		return (
				<Layout>

					<section>
						<h1>Cards deck</h1>
						<Deck suits={suits} values={values} />
					</section>
					<section>
						<header>
							<h1>Players</h1>
						</header>
						<section>
						{
							players.map((key, index) =>
								<Player key={index} name="Player name " />
						)}
						</section>
						<Footer>
							<Button
								icon="🙋‍"
								// onClick={this.handlePlayer}
								onClick={() => addPlayer()}
							>Add new player</Button>
							<Button icon="🏆">Find the winner</Button>
						</Footer>
					</section>

				</Layout>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
