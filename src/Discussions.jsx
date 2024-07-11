import React, { useState, useEffect } from 'react';

const Discussions = () => {
  const [discussions, setDiscussions] = useState([]);
  const [title, setTitle] = useState('');
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/discussions')
      .then(res => res.json())
      .then(data => setDiscussions(data))
      .catch(error => console.error('Error fetching discussions:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDiscussion = { title, topic, description };
    
    fetch('http://localhost:3001/discussions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newDiscussion)
    })
      .then(res => res.json())
      .then(data => {
        setDiscussions([...discussions, data]);
        setTitle('');
        setTopic('');
        setDescription('');
      })
      .catch(error => console.error('Error adding discussion:', error));
  }

  return (
    <div className="container">
      <h1 className="center">Discussions</h1>
      <ul>
        {discussions.map(discussion => (
          <li key={discussion.id}>
            <strong>{discussion.title}</strong> - {discussion.topic}
            <p>{discussion.description}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Discussion Title"
          required
        />
        <input
          type="text"
          value={topic}
          onChange={e => setTopic(e.target.value)}
          placeholder="Topic"
          required
        />
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
        <button type="submit">Add Discussion</button>
      </form>
    </div>
  );
}

export default Discussions;