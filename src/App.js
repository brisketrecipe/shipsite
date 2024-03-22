import React from 'react';
import btc from './btc.png';
import './App.css';

function App() {
  // List of projects you've worked on
  const completedProjects = [
    { name: 'Mon 3/18 Megan AI - an AI chatbot on telegram', url: 'https://t.me/MeganAI_bot' },
    { name: 'Tue 3/19 Ship every day site - post daily updates', url: 'https://shipsite.vercel.app/' },
    { name: 'Wed 3/20 March Madness Bracket predictor', url: 'https://github.com/brisketrecipe/mm_predict' },
    { name: 'Thu 3/21 AI Agent for Basketball programs - published to GPT store', url: 'https://chat.openai.com/g/g-9iR4UIFYc-basketball-program-assistance' },


    // Add more projects as needed
  ];

  // List of projects you're looking to build next
  const futureProjects = [
    'COMING SOON'
    // Add more future projects as needed
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={btc} className="App-logo" alt="logo" />
        <p>
          What's up Fam this is where we will keep up with the ship 1 per day mindset
        </p>
        {/* Project Sections */}
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
      </header>
    </div>
  );
}

export default App;
