import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { Users } from './Users'
import { Home } from './Home'

function App() {
  return (

    <Router>
      <nav className='p-2'>
        <Link to="/">Home</Link> | <Link to="/users">Users</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>

  )
}

export default App
