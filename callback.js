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

    },2000);
}

function createPost(post,callback){
    setTimeout(() =>{
        posts.push(post);
        callback()
    
    },1000)
}
createPost({title:'Post Three',body:"This is post three",CreatedAt:new Date().getTime()},getpost);
function createPost4(post,callback){
    setTimeout(() =>{
        posts.push(post);
        callback()

    },2000)
}
createPost4({title:'Post 4',body:"This is post 4",CreatedAt:new Date().getTime()},getpost);




//////////////////////////////////////////////////////////////////////////////////
function buyACar(cb1,cb2){
    setTimeout( ()=>{
        console.log("Buy a car")
        cb1(cb2);
    }, 10000)
}
function trip( cb2){
    setTimeout(()=>{
        console.log("Trip to manali ")
        cb2();
    },1000
    )
}
function Reached(){
    setTimeout( ()=>{
        console.log("Reached to manali ")
    }, 5000)
}
buyACar(trip,Reached); 
/// This is called callback , calling other function inside one another so that it gets executed in real world scenario 
//as we want to execeute the event 3 after execution of event 2 and for event2 we want to execute it only after execution of event 1
// so this is becoming callback hell and say supppose we have other events to execute it will be quite difficulte to perform 
// using callback .
/// hence PROMISES COMES IN TO PICTURE .

