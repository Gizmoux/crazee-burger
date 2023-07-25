import LoginPage from './components/pages/login/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrderPage from './components/pages/login/OrderPage';
const App = () => {
	return (
		<Router>
			<LoginPage />
			<Routes>
				<Route path="/orderpage" element={<OrderPage />} />
			</Routes>
		</Router>
	);
};

export default App;
