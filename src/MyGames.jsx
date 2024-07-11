import React, { useState, useEffect } from 'react';
import GameDetails from './GameDetails';

const MyGames = () => {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => { //THIS IS THE GET REQUEST - use to fetch the list of games from the JSON 
    // server when the game mounts
    fetch('http://localhost:3001/games')
      .then(res => res.json())
      .then(data => setGames(data));
  }, []);

  const handleSubmit = (e) => { //THIS IS THE POST REQUEST - to add a new game to the JSON server when the form is submitted
    e.preventDefault();
    const newGame = { title, genre, description, releaseDate, imageUrl };
    fetch('http://localhost:3001/games', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newGame)
    })
      .then(res => res.json())
      .then(data => setGames([...games, data]));
    setTitle('');
    setGenre('');
    setDescription('');
    setReleaseDate('');
    setImageUrl('');
  };

  const handleGameClick = (game) => {
    setSelectedGame(game);
  };

  const handleBack = () => {
    setSelectedGame(null);
  };

  return (
    <div className="container">
      <h1 className="center">My Games</h1>
      {selectedGame ? (
        <GameDetails game={selectedGame} onBack={handleBack} />
      ) : (
        <>
          <ul>
            {games.map(game => (
              <li key={game.id} onClick={() => handleGameClick(game)}>
                <img src={game.imageUrl} alt={game.title} style={{ width: '50px', height: '50px' }} />
                {game.title} - {game.genre}
              </li>
            ))}
          </ul>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Game Title"
              required
            />
            <input
              type="text"
              value={genre}
              onChange={e => setGenre(e.target.value)}
              placeholder="Genre"
              required
            />
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Description"
              required
            />
            <input
              type="date"
              value={releaseDate}
              onChange={e => setReleaseDate(e.target.value)}
              placeholder="Release Date"
              required
            />
            <input
              type="text"
              value={imageUrl}
              onChange={e => setImageUrl(e.target.value)}
              placeholder="Image URL"
              required
            />
            <button type="submit">Add Game</button>
          </form>
        </>
      )}
    </div>
  );
};

export default MyGames;