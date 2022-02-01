const createWishlistHandler = async () => {
     
      // const username = document.querySelector("#username-input").value.trim()

      const response = await fetch('/api/wishlists', {
        method: 'POST',
        // body: JSON.stringify({ username }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/wishlist');
        
      } else {
        alert(response.statusText);
      } 
  };

  document
    .querySelector('#create-wishlist')
    .addEventListener('click', createWishlistHandler);