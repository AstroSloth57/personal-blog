const blogUsername = document.getElementById('username');
const blogTitle = document.getElementById('title');
const blogContent = document.getElementById('content');
const submitBtn = document.querySelector('#new-blog-btn');

submitBtn.addEventListener('click', () => 
    saveToLocalStorage(blogUsername.value, blogTitle.value, blogContent.value));

function saveToLocalStorage(username, title, content) {
    localStorage.setItem('username', username);
    localStorage.setItem('title', title);
    localStorage.setItem('content', content);
    window.location.href= '/blog.html';
}