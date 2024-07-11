import React from 'react';

const GameDetails = ({ game }) => {
  return (
    <div>
      <h2>{game.title}</h2>
      <p>Genre: {game.genre}</p>
      <p>Description: {game.description}</p>
      <p>Release Date: {game.releaseDate}</p>
      <img src={game.imageUrl} alt={game.title} style={{ width: '200px', height: '200px' }} />
    </div>
  );
}

export default GameDetails;