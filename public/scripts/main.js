import { addPost, createPostObject } from './addPost.js';
import { display } from "./readPost.js";

function init() {
    // Ok button confirms addition of post
    const okBtn = document.querySelector("#ok");
    okBtn.addEventListener("click", addPost);
    
    display();
}

window.addEventListener('DOMContentLoaded', init);