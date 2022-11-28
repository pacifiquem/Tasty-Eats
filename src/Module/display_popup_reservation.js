import { getAllReservation, addReservation } from './create_reservation.js';
import { reserveCounter } from './reserveCounters.js';

const url2 = 'https://themealdb.com/api/json/v1/1/categories.php';

const displayPopup = async () => {
  const data = await fetch(url2).then((response) => response.json());
  const totalArray = data.categories;
  const reserve = document.querySelectorAll('.reservation-btn');
  const popup = document.querySelector('.popup');
  reserve.forEach((button, index) => {
    button.addEventListener('click', () => {
      popup.innerHTML = `<section class ="commentSection" id="commentCard">
            <div class="popup-card">
            <img src="${totalArray[index].strCategoryThumb}">
            <p class="cancel" >X</p>
            </div>
            <p class="food-description">${totalArray[index].strCategoryDescription}</p>
            <p id="reservationCount"></p>
            <div id="apireservation">
            
            </div>
           <div class="input-form"> 
            <input id="name" type="text" placeholder="your name..." required>
            <input id="startdate" type="date" placeholder="start date..." required>
            <input id="enddate" type="date" placeholder="end date..." required>
            <button class="submits">Submit</button>
            </div>
            </section>`;
      const dynamicSection = document.querySelector('.commentSection');
      document.querySelector('.cancel').addEventListener('click', () => {
        dynamicSection.style.display = 'none';
      });
      /* eslint-disable no-unused-vars */
      const reservationCount = document.getElementById('reservationCount');
      const apireservation = document.getElementById('apireservation');
      /* eslint-disable no-use-before-define */

      getAllReservation(button.id);
      reserveCounter(button.id);
      const submit = document.querySelector('.submits');
      submit.addEventListener('click', async () => {
        const startDate = document.getElementById('startdate');
        const endDate = document.getElementById('enddate');
        const name = document.getElementById('name');
        /* eslint-disable no-use-before-define */
        await addReservation(name, startDate, endDate, button.id);
        getAllReservation(button.id);
        reserveCounter(button.id);
      });
    });
  });
};

export default displayPopup;