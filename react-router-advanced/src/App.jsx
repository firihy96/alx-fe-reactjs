
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';
import { login, logout } from './components/auth';

function App() {
  return (
    <Router>
      <div>
        <header>
          <button onClick={login}>Login</button>
          <button onClick={logout}>Logout</button>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Protected Route for Profile */}
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* Dynamic Route for Blog Post */}
          <Route path="/blog/:postId" element={<BlogPost />} />

          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
