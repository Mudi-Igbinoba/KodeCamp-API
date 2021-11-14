//Getting Posts



function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        let postGallery = document.getElementById('post-gallery')
        let posts = ""
        data.forEach(e => {
            




           posts += `
          
                <div class="col-md-4">
                 <a href="single-post.html" class="text-decoration-none link-dark">
                    <div class="card shadow mb-3 h-100" onclick="savePosts(${e.id})">
                        <div class="card-header d-flex justify-content-center bg-secondary">
                            <h6 class="text-light">${e.id}</h6>
                        </div>
                        <div class="card-body">
                            <h5 class="post-title mb-4">${e.title}</h5> 
                            <p class="post-body">${e.body}</p>
                        </div>
                    </div>
                </a>
                </div>
           
            `

            postGallery.innerHTML = posts

        
        })
    
    })

}


getPosts();

function savePosts(id){

    localStorage.setItem('Post ID', id)
    
}


