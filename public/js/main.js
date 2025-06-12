const output = document.querySelector('#output');
const button = document.querySelector('#get-posts-btn');

// Get and show posts
async function showPosts() {
  try {
    const res = await fetch('http://localhost:8080/api/posts');
    if (!res.ok) {
      throw new Error('Failed to fetch posts');
    }

    const posts = await res.json();
    output.innerHTML = '';

    posts.forEach(post => {
      const postEl = document.createElement('div');

      postEl.textContent = post.title;
      output.appendChild(postEl);
    });
  } catch (error) {
    console.error('Error fetching posts: ', error);
  }
}

button.addEventListener('click', showPosts);
