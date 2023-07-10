import "bootstrap/dist/css/bootstrap.min.css";
import List from "./Components/List";
import Add from "./Components/Add";
import Card from "react-bootstrap/Card";
function App() {
	return (
		<Card className="m-3 d-flex justify-content-center align-items-center flex-column">
			<Add />
			<List />
		</Card>
	);
}
export default App;
