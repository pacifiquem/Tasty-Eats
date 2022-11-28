/* eslint-disable no-undef */
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const urlID = '7amfNDyGsWWSaz3PJUCx';

export const addComment = async (userName, userComment, id) => {
  const awaitData = await fetch(`${url}${urlID}/comments`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username: userName.value,
      comment: userComment.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => res.status);
  return awaitData;
};

export const update = (data) => {
  data.forEach((datum) => {
    apicomment.innerHTML += `
        <p>${datum.creation_date} - ${datum.username}:  ${datum.comment}</p>`;
  });
};

export const getAllComments = async (id) => {
  const allComments = await fetch(`${url}${urlID}/comments?item_id=${id}`);
  const dataObj = await allComments.json();
  /* eslint-disable no-undef */
  apicomment.innerHTML = '';
  if (dataObj.length === undefined) {
    apicomment.innerHTML += '<p> No comments yet</p>';
    return;
  }
  update(dataObj);
};