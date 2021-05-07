import { createPostObject } from "./addPost.js";

function display() {
    let allPosts = JSON.parse(localStorage.getItem('data'));
    allPosts = allPosts !== null ? allPosts : [];
    for (const post of allPosts) {
        let output = document.querySelector('#post-list');
        output.insertAdjacentHTML('beforeend', createPostObject(post));
    }
}

export { display };