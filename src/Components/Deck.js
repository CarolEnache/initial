import React from "react";
import { Card, StyledDeck } from "../Styles/Styled";

const Deck = ({ cards }) => (
	<StyledDeck>
		{cards.map(({suit, value, selected}) => (
			<Card
				key={suit + value}
				suit={suit}
				value={value}
				selected={!selected}
			>
				{value}
			</Card>
		))}
	</StyledDeck>
	)

export default Deck;
