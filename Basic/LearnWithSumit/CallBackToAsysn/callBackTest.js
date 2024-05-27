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

function createPost(post,callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({title: 'Post 3', body:'Body 3'},getPosts);