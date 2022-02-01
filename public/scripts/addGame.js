const addToWishlistHandler = async (event) => {
    event.preventDefault();
  
    const gameImage  = document.querySelector('#game-img').innerHTML.trim();
    const gameName = document.querySelector('#game-name').innerHTML.trim();
    const releaseDate = document.querySelector('#game-release-date').innerHTML.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
  
    if (gameImage && gameName && releaseDate) {
      const response = await fetch(`/api/wishlists/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ gameImage, gameName, releaseDate }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/wishlist');
        console.log('got here');
      } else {
        alert('Failed to add to wishlist');
      }
    }
  };

  document
  .querySelector('.game-card')
  .addEventListener('click', addToWishlistHandler);