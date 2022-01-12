import { checkAuth, logout, deleteParticipant } from '../fetch-utils.js';

// checkAuth();

const logoutButton = document.getElementById('logout');
const worshopsEl = document.getElementById('workshops');







logoutButton.addEventListener('click', () => {
    logout();
});
