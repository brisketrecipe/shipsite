import React from 'react';
import btc from './btc.png';
import Blog from './blog';
import BlogPost1 from './BlogPost1';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';

function App() {
  // List of projects you've worked on
  const completedProjects = [
    { name: 'Mon 3/18 Megan AI - an AI chatbot on telegram', url: 'https://t.me/MeganAI_bot' },
    { name: 'Tue 3/19 Ship every day site - post daily updates', url: 'https://shipsite.vercel.app/' },
    { name: 'Wed 3/20 March Madness Bracket predictor', url: 'https://github.com/brisketrecipe/mm_predict' },
    { name: 'Thu 3/21 AI Agent for Basketball programs - published to GPT store', url: 'https://chat.openai.com/g/g-9iR4UIFYc-basketball-program-assistance' },
    { name: 'Fri 3/22 Auto BTC trading based on MACD and RSI', url: ' https://github.com/brisketrecipe/BTCauto/tree/main' },
    { name: 'Saturday April 13 Blog', url: '/blog' },
    // Add more projects as needed
  ];

  // List of projects you're looking to build next
  const futureProjects = [
    'COMING SOON'
    // Add more future projects as needed
  ];

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={btc} className="App-logo" alt="logo" />
          <p>What's up Fam this is where we will keep up with the ship 1 per day mindset</p>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </nav>

          {/* Project Sections */}
          <Routes>
            <Route path="/" element={
              <>
                <section>
                  <h2>Completed Projects</h2>
                  <ul>
                    {completedProjects.map((project, index) => (
                      <li key={index}>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          {project.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h2>Future Projects</h2>
                  <ul>
                    {futureProjects.map((project, index) => (
                      <li key={index}>{project}</li>
                    ))}
                  </ul>
                </section>
              </>
            } />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/post1" element={<BlogPost1 />} />
            {/* Add more routes for additional blog posts */}
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;