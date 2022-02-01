const commentFormHandler = async (event) => {
    event.preventDefault();
    // Collect values from the login form
    const comment_text = document.querySelector('#comment-description').value.trim();
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (comment_text) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/comments/', {
        method: 'POST',
        body: JSON.stringify({ comment_text, wishlist_id: id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the oneBlog post page
        document.location.replace(`/wishlist/${id}`);
        
      } else {
        alert(response.statusText);
      }
    }
  };
  

  document
    .querySelector('.comment')
    .addEventListener('submit', commentFormHandler);