import { checkAuth, logout } from '../fetch-utils.js';

const participantForm = document.querySelector('#participant-form');
const addButton = document.querySelector('#add-participant');
const dropdown = document.querySelector('workshop-id');
const logoutButton = document.getElementById('logout');

//checkAuth();





logoutButton.addEventListener('click', () => {
    logout();
});