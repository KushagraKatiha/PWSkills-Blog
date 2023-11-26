const blogModel = document.querySelector('.form-cover');
const addBlogBtn = document.querySelector('.plus');
const backBtn = document.querySelector('.back-arrow');
const readBtnArr = document.querySelectorAll('.read');

readBtnArr.forEach(element => {
    element.addEventListener('click', () => {
        window.location.href = '../BlogPage/index.html'
    });
});

addBlogBtn.addEventListener('click', () => {
    blogModel.style.visibility = 'visible';
})

backBtn.addEventListener('click', () => {
    blogModel.style.visibility = 'hidden';
})