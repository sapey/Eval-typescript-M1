// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/users
interface Auteur {
    id : number ,
    name : string ,
    username : string,
    email : string,
}
interface Post {
    userId : number,
    id: number,
    title: string,
    body : string
}
let utilisateurs : Array<Partial<Auteur>>;
let articles :Array<Partial<Post>>;

function getDatas(users : Array<Partial<Auteur>>, posts: Array<Partial<Post>>){
    const div = document.querySelector('.data') as HTMLBodyElement;
    div.innerHTML ="";
    let html = "";
    users.forEach(user => {
        const articlesUser = posts.filter(p => p.userId === user.id)
        html += `
           <div class="col-md-4">
                <h4 style="color:blue;">${user.name}</h4>
                <p>${user.email}</p>
                <h5 style="color:yellow">Titre des articles rédigés :</h5>
                <ul>`;
        articlesUser.forEach(article => {
            html +=`
                <li>${article?.title}</li>
            `
        })
        html +=`
            </div>
            `;
    });
    div.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", async () => {
    const dataUsers = await fetch("https://jsonplaceholder.typicode.com/users"); 
    const dataPosts = await fetch("https://jsonplaceholder.typicode.com/posts"); 
    const users = (await dataUsers.json()) as Array<Partial<Auteur>>;
    utilisateurs = users;
    const posts = (await dataPosts.json()) as Array<Partial<Post>>;
    articles = posts;
    getDatas(users,posts);
    
})
