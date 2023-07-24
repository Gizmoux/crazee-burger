import { useState } from 'react';
const LoginPage = () => {
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
		<div>
			<h1>Bienvenue chez nous !</h1>
			<h2>Connectez-vous</h2>
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
		</div>
	);
};

export default LoginPage;
