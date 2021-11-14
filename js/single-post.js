let postId = localStorage.getItem("Post ID")

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        let postCard = document.getElementById('post-card')
        let post = ""
      
           post += `
                <div class="">
                 <a href="index.html" class="text-decoration-none link-dark">
                    <div class="card shadow mx-auto mb-3 h-100 w-100">
                        <div class="card-header d-flex justify-content-center bg-secondary">
                            <h6 class="text-light">${data.id}</h6>
                        </div>
                        <div class="card-body">
                            <h5 class="post-title mb-4">${data.title}</h5> 
                            <p class="post-body">${data.body}</p>
                        </div>
                    </div>
                </a>
                </div>
           
            `

            postCard.innerHTML = post

        }
    
    )
