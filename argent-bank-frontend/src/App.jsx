import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <h2>Welcome to Argent Bank</h2>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
