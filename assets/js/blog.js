const blogUsername = document.querySelector('.blog-username');
const blogTitle = document.querySelector('.blog-title');
const blogContent = document.querySelector('.blog-content')
const username = JSON.stringify(localStorage.getItem('username'));
const title = JSON.stringify(localStorage.getItem('title'));
const content = JSON.stringify(localStorage.getItem('content'));

console.log(username);

blogUsername.textContent = `Posted by: ${username}`;
blogTitle.textContent = title;
blogContent.textContent = content;