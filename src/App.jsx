import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Notes from "./Components/Notes";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <>
      <h1>Note Taking Spp</h1>
      {localStorage.getItem("token") && (
        <button onClick={logout}>Logout</button>
      )}
      <div style={{ marginBottom: "40px" }}>
        {!localStorage.getItem("token") && <Link to="/">
          <div>Signup</div>
        </Link>}
        {!localStorage.getItem("token") && <Link to="/login">
          <div>Login</div>
        </Link>}
      </div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </>
  );
}

export default App;
