import { Link, useParams } from 'react-router-dom';

const OrderPage = () => {
	const { username } = useParams();
	// console.log(username);
	return (
		<div>
			<h1>Bonjour {username} </h1>
			<Link to="/">
				<button>Deconnexion</button>
			</Link>
		</div>
	);
};

export default OrderPage;
