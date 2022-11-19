const posts=[
    {title:'Post One',body:"This is first Post",CreatedAt:new Date().getTime()},
    {title:'Post Two',body:"This is Second Post",CreatedAt:new Date().getTime()}
];
console.log(posts)
function getpost(){
    setInterval(()=>{
        let output= '';
        posts.forEach((post,index)=>{
            output +=`<li>${post.title} Created ${(new Date().getTime()-post.CreatedAt)/1000} seconds Ago</li>`;
        });
        document.body.innerHTML=output;

    },1000);
}

function createPost(post,callback){
    setTimeout(() =>{
        posts.push(post);
        callback()
    
    },2000)
}
createPost({title:'Post Three',body:"This is post three",CreatedAt:new Date().getTime()},getpost);
function createPost4(post,callback){
    setTimeout(() =>{
        posts.push(post);
        callback()

    },2000)
}
createPost4({title:'Post 4',body:"This is post 4",CreatedAt:new Date().getTime()},getpost);





