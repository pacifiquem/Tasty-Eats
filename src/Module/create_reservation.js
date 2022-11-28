/* eslint-disable no-undef */
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const urlID = '7amfNDyGsWWSaz3PJUCx';

export const addReservation = async (userName, startDate, endDate, id) => {
  const awaitData = await fetch(`${url}${urlID}/reservations/`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username: userName.value,
      date_start: startDate.value,
      date_end: endDate.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => res.status);
  return awaitData;
};

export const update = (data) => {
  data.forEach((datum) => {
    apireservation.innerHTML += `
        <p>${datum.date_start} - ${datum.date_end} by  ${datum.username}</p>`;
  });
};

export const getAllReservation = async (id) => {
  const allReservation = await fetch(`${url}${urlID}/reservations?item_id=${id}`);
  const dataObj = await allReservation.json();
  /* eslint-disable no-undef */
  apireservation.innerHTML = '';
  if (dataObj.length === undefined) {
    apireservation.innerHTML += '<p> No reservation yet</p>';
    return;
  }
  update(dataObj);
};