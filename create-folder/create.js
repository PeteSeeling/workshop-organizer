import { checkAuth, logout, createParticipant, getWorkshops } from '../fetch-utils.js';

const participantForm = document.querySelector('#participant-form');
const workshopButton = document.getElementById('go-workshops');
const logoutButton = document.getElementById('logout');

//checkAuth();


participantForm.addEventListener('submit', async(e) =>{
    e.preventDefault();

    const data = new FormData(participantForm);
    const name = data.get('participant-name');
    const workshop_id = data.get('workshop-id');
  

    await createParticipant({
        name:name,
        workshop_id:workshop_id
    });
    // window.location.href = '../workshops-page';
    participantForm.reset();

});

window.addEventListener('load', async() =>{
    const dropdown = document.querySelector('.workshop-id');

    const workshops = await getWorkshops();

    for (let workshop of workshops) {
        const selectEl = document.createElement('option');
        console.log(workshop)
        selectEl.value = workshop.id;
        selectEl.textContent = workshop.name;

        dropdown.append(selectEl);
    }
});
workshopButton.addEventListener('click', () =>{
    window.location.href = '../workshops-page/';
});

logoutButton.addEventListener('click', () => {
    logout();
});