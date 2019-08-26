import React, { Fragment } from "react";
import { Card, StyledDeck } from "../Styles/Styled";

const Deck = ({ cards }) => {

	console.log('cards ', cards);
	return (
	<StyledDeck>
		{cards.map(({suit, value, selected }) => (
			<Card suit={suit} value={value} selected={!selected}>
				{value}
			</Card>
		))}
	</StyledDeck>
	)
}

export default Deck;
