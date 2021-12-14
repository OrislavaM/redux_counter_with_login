import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Counter from "./components/Counter";
import LoginForm from "./components/LoginForm";
import Todo from "./components/Todo";
import RickNMorty from "./components/RickNMorty";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="rick-n-morty" element={<RickNMorty />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
