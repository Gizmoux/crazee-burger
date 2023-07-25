import LoginPage from './components/pages/login/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrderPage from './components/pages/login/OrderPage';
import ErrorPage from './components/ErrorPage';
const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/order" element={<OrderPage />} />
				<Route path="/order/:id" element={<OrderPage />} />
				<Route path="*" element={<ErrorPage />} />
				<Route path="/" element={<LoginPage />} />
			</Routes>
		</Router>
	);
};

export default App;
