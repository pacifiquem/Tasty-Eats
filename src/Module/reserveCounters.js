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

export const reserveCounter = async (id) => {
  const allReservation = await fetch(`${url}${urlID}/reservations?item_id=${id}`);
  const dataObj = await allReservation.json();
  const checkLength = homeLength(dataObj);
  if (dataObj.length === undefined) {
    reservationCount.textContent = 'Reservations (0)';
    return;
  }
  reservationCount.textContent = `Reservations (${checkLength})`;
};

export const homeLength = (data) => data.length;