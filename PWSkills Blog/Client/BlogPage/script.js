const backArrow = document.querySelector('.back-arrow');

backArrow.addEventListener('click', () => {
    window.location.href = '../HomePage/index.html';
});

// Fetch data from url and setting it to Blog Page

const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get('title');
    const description = urlParams.get('desc');
    const content = urlParams.get('content');
    const imageUrl = urlParams.get('img');

    console.log(title);
    console.log(description);
    console.log(content);
    console.log(imageUrl);


const blogDescription = document.querySelector('.blog-head');

blogDescription.innerHTML = `
    <div class="blog-details">
        <h2>${title}</h2>
        <h3>${description}</h3>
    </div>

    <img src=${imageUrl} alt="blog-image" class="blog-image">`

const blogContent = document.querySelector('.blog-body');

blogContent.innerHTML = `<p>${content}<p>`
