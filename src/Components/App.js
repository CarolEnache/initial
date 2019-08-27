import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addPlayer, removePlayer, editPlayer, updatePlayersList } from '../Redux/actions/index';

import { deckCards, eachPlayersSetOfCards, remainingCards, create_UUID, } from "../utils";


import Layout from "./Layout";
import Deck from "./Deck";
import Player from "./Player";
import Button from "./Button";

import { Footer } from "../Styles/Styled";

const mapStateToProps = (state) => ({
		players: state.players,
	  cards: deckCards(remainingCards)
});
const mapDispatchToProps = (dispatch) => ({
	  addPlayer: () => dispatch(addPlayer()),
		removePlayer: (id) => dispatch(removePlayer(id)),
		editPlayer: (id, name) => dispatch(editPlayer(id, name)),
		updatePlayersList: (playersList) => dispatch(updatePlayersList(playersList))
});

class App extends Component {

	componentDidMount() {
		const { players } = this.props;
		const numberOfPlayers = players.length;
		const playersHands = eachPlayersSetOfCards(numberOfPlayers)

		// const playersList = players.map(player => playersHands.map(hand =>
		// 	({ ...player, cards: hand })
		// ));

		const playersList = playersHands.map(m => ({
				name: m.name,
				id: create_UUID(),
				cards: [...m]
			}))
		// To Do Fix this bug
		return this.props.updatePlayersList(playersList)
	}
	render() {
		const {
			players,
			cards,
			addPlayer,
			removePlayer,
			editPlayer,
		} = this.props;

		console.log(players)
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
						{
							players.map(({id, name, cards}) =>
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
