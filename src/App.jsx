import LoginPage from './components/pages/login/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrderPage from './components/pages/order/OrderPage';
import ErrorPage from './components/pages/error/ErrorPage';
const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/order/:username" element={<OrderPage />} />
				<Route path="*" element={<ErrorPage />} />
				<Route path="/" element={<LoginPage />} />
			</Routes>
		</Router>
	);
};

export default App;
