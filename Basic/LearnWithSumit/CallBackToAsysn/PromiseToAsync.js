const posts = [
    {title: 'Post 1', body: 'Body 1'},
    {title: 'Post 2', body: 'Body 2'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((posts,index)=>{
            output += posts.title;
        });
        console.log();
        console.log(output);
    }, 1000);
    
}

function createPost(post){
    return new Promise ((resolve, reject)=>{
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 2000);
    })
}

await createPost({title: 'Post 3', body:'Body 3'})
await getPost()