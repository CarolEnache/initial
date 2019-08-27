import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addPlayer, removePlayer, editPlayer } from '../Redux/actions/index';

import { deckCards, eachPlayersSetOfCards } from "../utils";


import Layout from "./Layout";
import Deck from "./Deck";
import Player from "./Player";
import Button from "./Button";

import { Footer } from "../Styles/Styled";

const mapStateToProps = (state) => ({
		players: state.players,
		cards: deckCards
});
const mapDispatchToProps = (dispatch) => ({
	  addPlayer: () => dispatch(addPlayer()),
		removePlayer: (id) => dispatch(removePlayer(id)),
		editPlayer: (id, name) => dispatch(editPlayer(id, name))
});

class App extends Component {

	render() {
		const {
			players,
			cards,
			addPlayer,
			removePlayer,
			editPlayer,
		} = this.props;
		const no = players.length
		const playersHands = eachPlayersSetOfCards(no)
		const playersList = players.map(m =>
			playersHands.map(h =>
				({...m, cards: h})
			)
		);

		return (
				<Layout>
					<section>
						<h1>Cards deck</h1>
					<Deck cards={cards} />
					</section>
					<section>
						<header>
							<h1>Players</h1>
						</header>
						<section>
						{ //To Do: optimize playersList
							playersList[0].map(({id, name, cards}) =>
								<Player
									key={id}
									id={id}
									name={name}
									cards={cards}
									removePlayer={removePlayer}
									editPlayer={editPlayer}
								/>)
						}
						</section>
						<Footer>
							<Button
								icon="🙋‍"
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
