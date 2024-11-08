import { useState, useEffect } from 'react';
import { easy_bount_backend } from 'declarations/easy_bount_backend/index.js';

function App() {
  const [greeting, setGreeting] = useState('');
  const [names, setNames] = useState([]);

  useEffect(() => {
    // Fetch the submitted names when the component mounts
    fetchSubmittedNames();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    easy_bount_backend.greet(name).then(() => {
      // After greeting, fetch the updated list of names
      fetchSubmittedNames();
      // Clear the input field
      event.target.elements.name.value = '';
    });
  }

  async function fetchSubmittedNames() {
    const submittedNames = await easy_bount_backend.submittedNames();
    setNames(submittedNames);
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">
        <h2>Name list collected:</h2>
        {names.length > 0 ? (
          <ul>
            {names.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        ) : (
          <p>None</p>
        )}
      </section>
    </main>
  );
}

export default App;