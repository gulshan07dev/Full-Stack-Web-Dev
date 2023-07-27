const addBlogBtn = document.getElementById('add-blog-btn');
const closeBlogBtn = document.getElementById('close-blog-btn');
const addBlogSection = document.querySelector('#overlay');
const blogContainer = document.querySelector('#blog-container');
const createBlogBtn = document.querySelector('#create-blog-btn');
const BlogImgUrl = document.querySelector('#post-url');
const BlogTitle = document.querySelector('#blog-title');
const BlogDesc = document.querySelector('#blog-desc');
const BlogContent = document.querySelector('#main-blog');

// Demo blog data                          
const demoBlog = [
    {
        ImgURL: 'https://chdrectt2019.in/wp-content/uploads/2023/05/Alakh-Pandey-Net-Worth-1024x682.webp',
        title: 'Alakh Pandey Net Worth',
        desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates culpa vero ad. A, illum vero
                consequatur alias molestiae illo voluptatum.`,
        content: `To answer in a nutshell, Alakh Pandey Net Worth 2023 is around $1 billion today. His income comes from social media, youtube channels, the Physics Wallah app, coaching institutes, events, etc. His wife, Shivani Dubey, is a journalist and she receives around 40k to 60k per month. The couple is growing together and earning a large sum of money.

                Some Interesting Facts About Alakh Pandey
                His teachings are mainly based on NCERT books. Initially, he used to teach from NCERT books to the students of classes VIII, IX, and X. 
                Alakh Pandey married Shivani Dubey in February 2023.
                His teaching has left the other teachers speechless. Students connect Alakh Sir’s teaching very easily.
                Alakh Pandey is the owner and CEO of Physics Wallah Company.
                Conclusion
                Alakh Pandey, the founder of Physics Wallah is an excellent teacher. His teaching is so popular that Amazon has created a web series based on his teaching. His company is India’s 101 Unicorn startup. He rejected the proposal of Unacademy. Alakh Pandey net worth is around $1 billion.`
    },
    {
        ImgURL: "https://media.licdn.com/dms/image/D4D22AQGf8JeD202v8w/feedshare-shrink_800/0/1690345489001?e=1693440000&v=beta&t=l1aKe_XiryY8UHlirVhLM9SlRMObjda-xyduSBwoQ70",
        title: "🚀 Overcoming Project Fear: Take that First Step to Success! 🚀",
        desc: `🚀 Overcoming Project Fear: Take that First Step to Success! 🚀`,
        content: `🚀 Overcoming Project Fear: Take that First Step to Success! 🚀

        🔹 Do you find it daunting to start a new project?
        🔹 Break it down into small, manageable pieces and believe in yourself.
        🔹 Embrace the mantra: "First start, don't think more!" You've got this!
        
        💡 Set achievable goals, build confidence, and achieve greatness.
        🙌 Trust me, you CAN do it!
        
        🆘 And remember, if you ever get stuck, face errors, or encounter bugs, don't hesitate to seek help from Google, ChatGPT, or other AI resources.
        🔍 These tools can provide valuable insights and solutions to keep your project on track.
        
        #ProjectSuccess #StartSmall #BelieveInYourself #YouGotThis #AchieveGreatness 🚀`
    },
    {
        ImgURL: 'https://i.ytimg.com/vi/DlDETHHVmFU/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIHBACGAYgATgB&rs=AOn4CLApogEIILRTlhw0hSP4S6iESwXdLA',
        title: '📚🚀 **Hidden Gem Alert: "Chai Aur Code"!** 🚀📚',
        desc: 'Found a hidden gem today - "Chai Aur Code" YouTube channel! 🌟',
        content: `📚🚀 **Hidden Gem Alert: "Chai Aur Code"!** 🚀📚

        Found a hidden gem today - "Chai Aur Code" YouTube channel! 🌟 Cleared all my confusion on advanced JS topics like Higher Order Functions, Async Await, Promises, V8 Engine, Fetch, OOP, Prototypes, Class Constructor, Stack Overflow errors. Feeling super confident now! 💪
        
        Subscribe to support this amazing channel and a big shoutout to Hitesh Choudhary Sir, the creator of "Chai Aur Code." 🙌 Thank you for putting together such an amazing channel and sharing your knowledge with the community! 🙏 Your teaching style is top-notch, and you've made complex topics feel surprisingly easy to grasp!
        
        And to Hitesh Sir, I have one burning question: When are you starting the React Native series? 🤔 I, along with many others, am eagerly waiting to dive into the world of App development through your guidance! 🚀
        
        Let's support "Chai Aur Code" and continue to grow and learn together! 🌱 Happy coding, everyone! 🚀💻
        
        
        #JavaScript #ChaiAurCode #LearningJourney #FullStackDevelopment #WebDevelopment #appdevelopment
        #ProgrammingCommunity #TechEducation #ConfidenceBoost #ReactNative Hitesh Choudhary
        `
    }
];

addBlogBtn.addEventListener('click', () => {
    addBlogSection.classList.add('active-add-blog');
    document.body.style.overflow = 'hidden';
});

closeBlogBtn.addEventListener('click', () => {
    hideAddBlogModal();
});

function showBlog(title, imageUrl, description, content) {
    // Hide the blog container and show the individual blog content
    blogContainer.style.display = 'none';

    const blogContent = document.createElement('section');
    blogContent.id = 'blog-content';
    blogContent.classList.add('flex');

    const headerDiv = document.createElement('header');
    headerDiv.classList.add('flex');

    const leftContentDiv = document.createElement('div');
    leftContentDiv.classList.add('left-content', 'flex');

    const h2 = document.createElement('h2');
    h2.textContent = title;

    const h3 = document.createElement('h3');
    h3.textContent = description;

    leftContentDiv.appendChild(h2);
    leftContentDiv.appendChild(h3);

    const rightContentDiv = document.createElement('div');
    rightContentDiv.classList.add('right-content');

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'blog-image';

    rightContentDiv.appendChild(img);

    headerDiv.appendChild(leftContentDiv);
    headerDiv.appendChild(rightContentDiv);

    const mainContentDiv = document.createElement('div');
    mainContentDiv.classList.add('main-content');

    const p = document.createElement('p');
    p.textContent = content;

    mainContentDiv.appendChild(p);

    blogContent.appendChild(headerDiv);
    blogContent.appendChild(mainContentDiv);

    // Add the blog content to the body
    document.body.appendChild(blogContent);

    // Show the back button and hide the add blog button
    document.getElementById('back-btn').style.display = 'grid';
    document.getElementById('add-blog-btn').style.display = 'none';
}

function hideBlog() {
    // Show the blog container and remove the individual blog content
    blogContainer.style.display = 'flex';
    document.getElementById('blog-content').remove();

    // Show the add blog button and hide the back button
    document.getElementById('add-blog-btn').style.display = 'grid';
    document.getElementById('back-btn').style.display = 'none';
}

function createBlogPostElement(title, imageUrl, description, content) {
    const article = document.createElement('article');
    article.classList.add('blog', 'flex');

    const imageDiv = document.createElement('div');
    imageDiv.classList.add('image');

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'blog-image';

    imageDiv.appendChild(img);

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title');

    const h1 = document.createElement('h1');
    h1.textContent = title;

    titleDiv.appendChild(h1);

    const descDiv = document.createElement('div');
    descDiv.classList.add('desc');

    const p = document.createElement('p');
    p.textContent = description;

    descDiv.appendChild(p);

    const readMoreBtn = document.createElement('button');
    readMoreBtn.id = 'read-more-btn';
    readMoreBtn.textContent = 'Read More';

    readMoreBtn.addEventListener('click', () => {
        window.scrollTo({top: 0})
        showBlog(title, imageUrl, description, content);
    });

    article.appendChild(imageDiv);
    article.appendChild(titleDiv);
    article.appendChild(descDiv);
    article.appendChild(readMoreBtn);

    return article;
}

function addBlogPost(title, imageUrl, description, content) {
    const blogData = {
        ImgURL: imageUrl,
        title,
        desc: description,
        content,
    };

    const blogPostElement = createBlogPostElement(
        title,
        imageUrl,
        description,
        content
    );

    blogContainer.appendChild(blogPostElement);

    let existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    existingBlogs.push(blogData);
    localStorage.setItem('blogs', JSON.stringify(existingBlogs));
}

function loadBlogPosts() {
    let existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];

    if (existingBlogs.length > 0) {
        blogContainer.innerHTML = '';
        existingBlogs.forEach((blogData) => {
            const blogPostElement = createBlogPostElement(
                blogData.title,
                blogData.ImgURL,
                blogData.desc,
                blogData.content
            );
            blogContainer.appendChild(blogPostElement);
        });
    }
}

function addDemoBlogPosts() {
    for (const blogData of demoBlog) {
        const blogPostElement = createBlogPostElement(
            blogData.title,
            blogData.ImgURL,
            blogData.desc,
            blogData.content
        );
        blogContainer.appendChild(blogPostElement);
    }
}

function handleAddBlogFormSubmit(event) {
    event.preventDefault();

    const title = BlogTitle.value;
    const imageUrl = BlogImgUrl.value;
    const description = BlogDesc.value;
    const content = BlogContent.value;

    if (!title || !imageUrl || !description || !content) {
        alert('Please fill in all fields.');
        return;
    }

    addBlogPost(title, imageUrl, description, content);

    BlogTitle.value = '';
    BlogImgUrl.value = '';
    BlogDesc.value = '';
    BlogContent.value = '';

    hideAddBlogModal();
}

function hideAddBlogModal() {
    addBlogSection.classList.remove('active-add-blog');
    document.body.style.overflow = 'auto';
}

createBlogBtn.addEventListener('click', handleAddBlogFormSubmit);
window.addEventListener('load', loadBlogPosts);
window.addEventListener('load', addDemoBlogPosts);

// Back button functionality
const backButton = document.getElementById('back-btn');
backButton.addEventListener('click', hideBlog);
