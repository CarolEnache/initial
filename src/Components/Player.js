import React, { PureComponent } from "react";

import Button from "./Button";

import { Card, PlayerHand } from "../Styles/Styled";

class Player extends PureComponent {
	state = {
		showInput: false,
		localName: ''
	}

	toggleInput = () => {
		const { showInput } = this.state;

		this.setState({
			showInput: !showInput
		})
	}

	handleChange = event => {
		let name = event.target.value;
		return this.setState({
			localName: name
		})
	}

	handleSubmit = event => {
		const { editPlayer, id } = this.props;
		const { localName } = this.state;
		event.preventDefault()
		this.toggleInput()
		editPlayer(id, localName)
	}

	render(){
		const { name, removePlayer, id, cards } = this.props;
		const { showInput } = this.state;

		// console.log(this.props)

		return (
			<article>
				<>
				{
					showInput ?
						<form onSubmit={(event) => this.handleSubmit(event)}>
								<input
									type='text'
									placeholder={name}
									onChange={(event) => this.handleChange(event)}
									required
								/>
								<Button
									icon="✏️"
									type="submit"
								>
									{showInput ? 'Done' : 'Edit'}

								</Button>
								<Button
									icon="🔥"
									onClick={() => removePlayer(id)}
								>
									Remove
						</Button>
						</form> :
							<p>
								{name}
								<Button
									icon="✏️"
									onClick={() => this.toggleInput()}
								>
									{showInput ? <input type='submit' > Done</input> : 'Edit'}

								</Button>
								<Button
									icon="🔥"
									onClick={() => removePlayer(id)}
								>
									Remove
								</Button>
							</p>
				}
				</>
				<PlayerHand>
					{ cards && cards.map(({suit, value, selected}) =>
						<Card key={suit+value} suit={suit} value={value} selected={selected}>
							{value}
						</Card>
						)}
				</PlayerHand>
			</article>
		)
	}
};

export default Player;
