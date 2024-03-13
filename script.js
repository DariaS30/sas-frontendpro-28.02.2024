function searchPost() {
    const postIdInput = document.getElementById('postId');
    const postId = postIdInput.value;

    if (!postId) {
        alert('Please enter a Post ID.');
        return;
    }

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Post not found.');
            }
            return response.json();
        })
        .then(post => {
            displayPost(post);
            return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        })
        .then(response => response.json())
        .then(comments => displayComments(comments))
        .catch(error => {
            alert(error.message);
            resetApp();
        });
}

function displayPost(post) {
    const postContainer = document.getElementById('postContainer');
    postContainer.innerHTML = `
    <h2>Post Details</h2>
    <p><strong>Title:</strong> ${post.title}</p>
    <p><strong>Body:</strong> ${post.body}</p>
  `;
    postContainer.style.display = 'block';
}

function displayComments(comments) {
    const commentsContainer = document.getElementById('commentsContainer');
    commentsContainer.innerHTML = '<h2>Comments</h2>';

    if (comments.length === 0) {
        commentsContainer.innerHTML += '<p>No comments available.</p>';
    } else {
        comments.forEach(comment => {
            commentsContainer.innerHTML += `
        <div>
          <p><strong>Name:</strong> ${comment.name}</p>
          <p><strong>Email:</strong> ${comment.email}</p>
          <p><strong>Body:</strong> ${comment.body}</p>
        </div>
      `;
        });
    }

    commentsContainer.style.display = 'block';
}

function resetApp() {
    const postIdInput = document.getElementById('postId');
    postIdInput.value = '';
    document.getElementById('postContainer').style.display = 'none';
    document.getElementById('commentsContainer').style.display = 'none';
}
