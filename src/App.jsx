import { useState } from 'react';
const App = () => {
	const handleSubmit = event => {
		event.preventDefault();
		alert(`Bonjour ${name} `);
		setName('');
	};
	const [name, setName] = useState('');
	const handleName = event => {
		setName(event.target.value);
	};
	return (
		<>
			<h1>Bienvenue chez nous !</h1>
			<h3>Connectez-vous</h3>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Entrez votre prénom"
					id="name"
					name="email"
					value={name}
					onChange={handleName}
					required
				/>
				<button>Accédez à votre espace</button>
			</form>
		</>
	);
};

export default App;
