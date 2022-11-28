import './index.css';
// import './assets/images/logo.png';
import displayPopup from './Module/display_popup.js';
import displayReservation from './Module/display_popup_reservation.js';
import display from './Module/display_home.js';
import { itemCounter } from './Module/counters.js';
/* eslint-disable no-unused-vars */

/* eslint-disable no-use-before-define */
display();
displayPopup();
displayReservation();
itemCounter();