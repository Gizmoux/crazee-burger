import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
	// States
	const [name, setName] = useState('');
	const navigate = useNavigate();
	// Comportements
	const handleSubmit = event => {
		event.preventDefault();
		// alert(`Bonjour `);
		setName('');
		navigate(`order/${name}`);
	};
	const handleName = event => {
		setName(event.target.value);
		// console.log(event.target.value);
	};
	// Affichage
	return (
		<form onSubmit={handleSubmit}>
			<h1>Bienvenue chez nous !</h1>
			<h2>Connectez-vous</h2>
			<input
				type="text"
				placeholder="Entrez votre prénom"
				value={name}
				onChange={handleName}
				required
			/>
			<button>Accédez à votre page</button>
		</form>
	);
};

export default LoginForm;
