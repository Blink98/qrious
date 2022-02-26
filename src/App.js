import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./components/Form";
import QRcode from "./components/QRcode";

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/qrcode/:pid">
						<QRcode />
					</Route>
					{/* Home page */}
					<Route path="/">
						<Form />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
