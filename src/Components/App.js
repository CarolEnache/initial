import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addPlayer, removePlayer, editPlayer } from '../Redux/actions/index';

import { suits, values, deckCards } from "../utils";


import Layout from "./Layout";
import Deck from "./Deck";
import Player from "./Player";
import Button from "./Button";

import { Footer } from "../Styles/Styled";

const mapStateToProps = (state) => ({
		players: state.players
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
			addPlayer,
			removePlayer,
			editPlayer,
			allCards
		} = this.props;

		return (
				<Layout>
					<section>
						<h1>Cards deck</h1>
					<Deck cards={deckCards} />
					</section>
					<section>
						<header>
							<h1>Players</h1>
						</header>
						<section>
						{
							players.map((key) =>
								<Player
									key={key.id}
									id={key.id}
									name = {key.name}
									removePlayer={removePlayer}
									editPlayer={editPlayer}
								/>
						)}
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
