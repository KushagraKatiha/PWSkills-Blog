const blogModel = document.querySelector('.form-cover');
const addBlogBtn = document.querySelector('.blog-add');
const backBtn = document.querySelector('.back-arrow');

// readBtnArr.forEach(element => {
//     element.addEventListener('click', () => {
//         window.location.href = '../BlogPage/blog.html'
//     });
// });

addBlogBtn.addEventListener('click', () => {
    blogModel.style.visibility = 'visible';
})

backBtn.addEventListener('click', () => {
    blogModel.style.visibility = 'hidden';
})

// Setting blog data to local storage

const blogModelImg = document.querySelector('.blog-form-img');
const blogModelTitle = document.querySelector('.blog-form-title');
const blogModelDesc = document.querySelector('.blog-form-desc');
const blogModelContent = document.querySelector('.blog-form-content');
const blogModelBtn = document.querySelector('.blog-form-submit');

// Making function to add blog form data to blog array

const addBlog = (e) => {
    
    let blogArr = JSON.parse(localStorage.getItem('blog')) || [];
    e.preventDefault();
    
    let blogData = {
        img: blogModelImg.value,
        title: blogModelTitle.value,
        desc: blogModelDesc.value,
        content: blogModelContent.value
    }
    
    blogArr.push(blogData);
    localStorage.setItem('blog', JSON.stringify(blogArr));

    
    blogModel.style.visibility = 'hidden';
    
    window.location.reload();
    
}

blogModelBtn.addEventListener('click', addBlog);

// Fetching blogs from blog array and returning blog cards to client

const blogArrLocal = JSON.parse(localStorage.getItem('blog'));
console.log(blogArrLocal);

const blogContainer = document.querySelector('.blog-container');

const setBlogData = () => {

    if (blogArrLocal && blogArrLocal.length > 0 && !blogArrLocal.includes(null)) {
        blogArrLocal.forEach(element => {
            blogContainer.innerHTML += `
            <div class="blog-card">
                <img class="blog-image" src = ${element.img}/>
                <div class="blog-title">${element.title}</div>
                <div class="blog-desc">${element.desc}</div>
                <button class="rd-btn">Read</button>
                <button class="del-btn">Delete</button>
            </div>`

        });
    } else {
        // Delete blog array from local storage
        localStorage.removeItem('blog');
        document.querySelector('.blog-container').innerHTML = '<h1 class="no-blog">No Blog Found !!</h1>';    
}
}
setBlogData();

// Deleting blog card from blog array and local storage 

const delBtnArr = document.querySelectorAll('.del-btn');

delBtnArr.forEach(element => {
    element.addEventListener('click', () => {
        let blogArr = JSON.parse(localStorage.getItem('blog'));
        blogArr.splice(blogArr.indexOf(element), 1);
        localStorage.setItem('blog', JSON.stringify(blogArr));
        window.location.reload();
    });
});

// On clicking read button redirect to blog page and fetch data from url and add to blog page

if(blogArrLocal && blogArrLocal.length > 0 && !blogArrLocal.includes(null)) {

    const rdBtnArr = document.querySelectorAll('.rd-btn');
    
    rdBtnArr.forEach(function (element, index) {
        element.addEventListener('click', () => {
            const blogArr = JSON.parse(localStorage.getItem('blog'));

            window.location.href = `../BlogPage/index.html?img=${blogArr[index].img}&title=${blogArr[index].title}&desc=${blogArr[index].desc}&content=${blogArr[index].content}`;
        });
    })
}









