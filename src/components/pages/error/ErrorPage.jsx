import { Link } from 'react-router-dom';
const ErrorPage = () => {
	return (
		<div>
			<h1>Error Page...</h1>
			<Link to="/">
				<button>Retourner vers la page daccueil</button>
			</Link>
		</div>
	);
};

export default ErrorPage;
