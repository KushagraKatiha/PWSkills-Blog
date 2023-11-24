const blogModel = document.querySelector('.form-cover');
const addBlogBtn = document.querySelector('.plus');
const backBtn = document.querySelector('.back-arrow');

addBlogBtn.addEventListener('click', () => {
    blogModel.style.visibility = 'visible';
})

backBtn.addEventListener('click', () => {
    blogModel.style.visibility = 'hidden';
})