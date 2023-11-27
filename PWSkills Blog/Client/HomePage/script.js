const blogModel = document.querySelector('.form-cover');
const addBlogBtn = document.querySelector('.blog-add');
const backBtn = document.querySelector('.back-arrow');
const readBtnArr = document.querySelectorAll('.rd-btn');

readBtnArr.forEach(element => {
    element.addEventListener('click', () => {
        window.location.href = '../BlogPage/blog.html'
    });
});

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

// Making function to add blog form data to local storage

const addBlog = (e) => {
    e.preventDefault();
    let blogData = {
        img: blogModelImg.value,
        title: blogModelTitle.value,
        desc: blogModelDesc.value,
        content: blogModelContent.value
    }
    console.log(blogData);
    localStorage.setItem('blog', JSON.stringify(blogData));
    blogModel.style.visibility = 'hidden';
    window.location.reload();
}

blogModelBtn.addEventListener('click', addBlog);

// Fetching blog data from local storage and setting it to blog card

const blogCardImg = document.querySelector('.blog-image');
const blogCardTitle = document.querySelector('.blog-title');
const blogCardDesc = document.querySelector('.blog-desc');

// write a function to fetch data from local storage and set it to blog card

const setBlogData = () => {
    

    let blogData = JSON.parse(localStorage.getItem('blog'));

    if (blogData) {

        document.querySelector('.blog-container').innerHTML = `\
   
        <div class="blog-card">
            <img class="blog-image" src = ${blogData.img}alt=""/>
            <div class="blog-title">${blogData.title}</div>
            <div class="blog-desc">${blogData.desc}</div>
            <button class="rd-btn">Read</button>
            <button class="del-btn">Delete</button>
        </div>`

        console.log(blogData);


    }else {
        // document.querySelector('.blog-card').style.display = 'none';
        document.querySelector('.blog-container').innerHTML = '<h1 class="no-blog">No Blog Found</h1>';
    }
}

setBlogData();

// Deleting blog data from local storage

if(document.querySelector('.del-btn')){
    document.querySelector('.del-btn').addEventListener('click', () => {
        localStorage.removeItem('blog');
        document.querySelector('.blog-container').innerHTML = '<h1 class="no-blog">No Blog Found</h1>';
    });
}









