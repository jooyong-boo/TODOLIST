import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import TodoList from "./pages/TodoList";

function App() {
    return (
        <Suspense fallback={<Loading />}>
            <Router>
                <Routes>
                    <Route path="/" element={<TodoList />} />
                </Routes>
            </Router>
        </Suspense>
    );
}

export default App;
