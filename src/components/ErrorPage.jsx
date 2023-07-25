import { Link } from 'react-router-dom';
const ErrorPage = () => {
	return (
		<div>
			<h1>Error Page...</h1>
			<Link>
				<button>Retourner vers la page d'accueil</button>
			</Link>
		</div>
	);
};

export default ErrorPage;
