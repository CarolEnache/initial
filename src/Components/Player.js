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
		const { editPlayer, index } = this.props;
		const { localName } = this.state;
		event.preventDefault()
		this.toggleInput()
		editPlayer(index, localName)
	}

	render(){
		const { name, removePlayer, id } = this.props;
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
								/>
								<Button
									icon="✏️"
									type="submit"
									// value='Submit'
									// onClick={() => this.toggleInput()}
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
					<Card suit="D" value="A" selected={true}>
						A
				</Card>
					<Card suit="D" value="K">
						K
				</Card>
					<Card suit="D" value="Q">
						Q
				</Card>
					<Card suit="D" value="J">
						J
				</Card>
					<Card suit="D" value="T">
						T
				</Card>
				</PlayerHand>
			</article>
		)
	}
};

export default Player;
