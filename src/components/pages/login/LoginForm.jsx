import { useState } from 'react';
import { Link } from 'react-router-dom';
const LoginForm = () => {
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
		<form onSubmit={handleSubmit}>
			<h1>Bienvenue chez nous !</h1>
			<h2>Connectez-vous</h2>
			<input
				type="text"
				placeholder="Entrez votre prénom"
				id="name"
				name="email"
				value={name}
				onChange={handleName}
				required
			/>
			<Link to="/orderpage">Accédez à votre espace</Link>
		</form>
	);
};

export default LoginForm;
