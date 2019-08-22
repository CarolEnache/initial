import React, { Fragment } from "react";
import { Card, StyledDeck } from "../Styles/Styled";

const Deck = ({ suits, values }) => {

	// console.log('suits ', suits, 'values ', values );
	return (
	<StyledDeck>
		{suits.map(suit => (
			<Fragment key={suit}>
				{values.map(value => (
					<Card key={suit+value} suit={suit} value={value}>
						{value}
					</Card>
				))}
			</Fragment>
		))}
	</StyledDeck>
	)
}

// ); trun it back into implicit return

export default Deck;
