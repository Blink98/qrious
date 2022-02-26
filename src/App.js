import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./components/Form";
import QRcodeComp from "./components/QRcode";

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/qrcode/:pid/:pname">
						<QRcodeComp />
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
