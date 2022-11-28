/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */

const url2 = 'https://themealdb.com/api/json/v1/1/categories.php';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const urlID = '7amfNDyGsWWSaz3PJUCx';

export const itemCounter = async () => {
  const data = await fetch(url2).then((response) => response.json());
  const checkLength = homeLength(data.categories);
  document.querySelector('#itemsCount').innerHTML = `All Meals(${checkLength})`;
};

export const commentCounter = async (id) => {
  const allComments = await fetch(`${url}${urlID}/comments?item_id=${id}`);
  const dataObj = await allComments.json();
  const checkLength = homeLength(dataObj);
  if (dataObj.length === undefined) {
    commentCount.textContent = 'Comments (0)';
    return;
  }
  commentCount.textContent = `Comments (${checkLength})`;
};

export const homeLength = (data) => data.length;