import { checkAuth, logout, deleteParticipant, getWorkshops } from '../fetch-utils.js';

// checkAuth();

const logoutButton = document.getElementById('logout');
const workshopsEl = document.getElementById('workshops');
const createButton = document.getElementById('go-create');


window.addEventListener('load', async()=> {
    displayWorkshops(); 
});

async function displayWorkshops(){

    workshopsEl.textContent = '';
    const workshopList = await getWorkshops();
    console.log(workshopList);
    
    for (let workshop of workshopList) {
        
        const workshopEl = document.createElement('div');
        const workshopNameEl = document.createElement('h3');
        const participantsEl = document.createElement('div');
        
        workshopEl.classList.add('workshop');
        workshopNameEl.textContent = workshop.name;
        
        workshopEl.append(workshopNameEl, participantsEl);
    
        for (let participant of workshop.participants) {
            const participantEl = document.createElement('p');
             
            participantEl.classList.add('participant');
            participantEl.textContent = participant.name;

            participantEl.addEventListener('click', async() =>{
                await deleteParticipant(participant.id);

                await displayWorkshops();
            });
           
           
            participantsEl.append(participantEl);
            
        }
        workshopsEl.append(workshopEl);
    }

}
createButton.addEventListener('click', () =>{
    window.location.href = '../create-folder';
});

logoutButton.addEventListener('click', () => {
    logout();
});

