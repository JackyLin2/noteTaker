import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import CreatePost from './Pages/Post'

function App() {
  return (
      <Router>
        <nav>
            <Link to="/"> Home </Link>
            <Link  to="/createpost"> Create Post</Link>
            <Link  to="/login">  Login</Link>
        </nav>



        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/createpost" element={<CreatePost/>} />
        </Routes>
      </Router>
  );
}

export default App;
