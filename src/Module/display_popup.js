import { getAllComments, addComment } from './create_comments.js';
import { commentCounter } from './counters.js';

const url2 = 'https://themealdb.com/api/json/v1/1/categories.php';

const displayPopup = async () => {
  const data = await fetch(url2).then((response) => response.json());
  const totalArray = data.categories;
  const comment = document.querySelectorAll('.comment-btn');
  const popup = document.querySelector('.popup');
  comment.forEach((button, index) => {
    button.addEventListener('click', () => {
      popup.innerHTML = `<section class ="commentSection" id="commentCard">
            <div class="popup-card">
            <img src="${totalArray[index].strCategoryThumb}">
            <p class="cancel" >X</p>
            </div>
            <p class="food-description">${totalArray[index].strCategoryDescription}</p>
            <p id="commentCount"></p>
            <div id="apicomment">
            
            </div>
           <div class="input-form"> 
            <input id="name" type="text" placeholder="your name..." required>
            <textarea id="message" placeholder="your message..." required></textarea>
            <button class="submits">Submit</button>
            </div>
            </section>`;
      const dynamicSection = document.querySelector('.commentSection');
      document.querySelector('.cancel').addEventListener('click', () => {
        dynamicSection.style.display = 'none';
      });
      /* eslint-disable no-unused-vars */
      const commentCount = document.getElementById('commentCount');
      const apicomment = document.getElementById('apicomment');
      /* eslint-disable no-use-before-define */

      getAllComments(button.id);
      commentCounter(button.id);
      const submit = document.querySelector('.submits');
      submit.addEventListener('click', async () => {
        const message = document.getElementById('message');
        const name = document.getElementById('name');
        /* eslint-disable no-use-before-define */
        await addComment(name, message, button.id);
        getAllComments(button.id);
        commentCounter(button.id);
      });
    });
  });
};

export default displayPopup;