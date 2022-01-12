import { checkAuth, logout, createParticipant } from '../fetch-utils.js';

const participantForm = document.querySelector('#participant-form');
const addButton = document.querySelector('#add-participant');
const dropdown = document.querySelector('workshop-id');
const logoutButton = document.getElementById('logout');

//checkAuth();


participantForm.addEventListener('submit', async(e) =>{
    e.preventDefault();

    const data = new FormData(participantForm);
    const name = data.get('participant-name');
    const workshop_id = data.get('workshop_id');

    await createParticipant({
        name:name,
        workshop_id:workshop_id
    });
    participantForm.reset();

});


logoutButton.addEventListener('click', () => {
    logout();
});