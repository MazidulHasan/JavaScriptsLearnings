// if i use a anonymous function or arror function then
//  I need to call the function directly with (), and if 
//  I do not use this then I need to pass the reference of 
//  that function.
 

const posts = [
    {title: 'Post 1', body: 'Body 1'},
    {title: 'Post 2', body: 'Body 2'}
];

function getPosts() {
    // return new Promise ((resolve, reject)=>{
        setTimeout(() => {
            let output = '';
            posts.forEach((posts,index)=>{
                output += posts.title;
            });
            console.log();
            console.log(output);
            // resolve();
        }, 1000);
    // })
    
}

function createPost(post){
    return new Promise ((resolve, reject)=>{
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 2000);
    })
}

createPost({title: 'Post 3', body:'Body 3'})
    .then(()=>{
        getPosts() //here if i use getpost then it will run at the begining and return undefined
    } 
    );