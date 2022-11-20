const posts=[
    {title:'Post One',body:"This is first Post"},
    {title:'Post Two',body:"This is Second Post"}
];
console.log(posts)
function getPosts(){
    setTimeout(()=>{
        let output= '';
        posts.forEach((post,index)=>{
            output +=`<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;

    },1000);
}

function createPost(post){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            posts.push(post);
            const error =false;
            if (!error){
                resolve();
            }else{
                reject('Error:Something went Wrong');
            }
            
        
        },2000)
    });    

}
function deletePosts(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            
            
            if (posts.length>0){
                resolve(posts.pop());
            }else{
                reject('Array is empty now')
            }
        },1000)
    })
}
// createPost({title:'object 3', body: 'This is third post'})
// .then(()=>{
//     getPosts()
//     deletePosts().then(()=>{
//         getPosts()
//         deletePosts().then(()=>{
//             getPosts()
//             deletePosts().then(()=>{
//                 getPosts()
//                 deletePosts()
//             })
//         })
//     })
// })
//  const promise1= Promise.resolve("Hello Sharpener");
//  const promise2=20;
//  const promise3= new Promise((resolve,reject)=>setTimeout(resolve,1000,"Hi there"));
//  Promise.all([promise1,promise2,promise3]).then(val=>console.log(val));
