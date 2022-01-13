import { checkAuth, logout, deleteParticipant, getWorkshops } from '../fetch-utils.js';

// checkAuth();

const logoutButton = document.getElementById('logout');
const worshopsEl = document.getElementById('workshops');

window.addEventListener('load', async()=> {
    displayWorkshops(); 
});
    
async function displayWorkshops(){
    const workshopList = await getWorkshops();
    
    
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
                // participantEl.textContent = participant.name;

            participantEl.addEventListener('click', async() =>{
                await deleteParticipant(participant.id);

                displayWorkshops();
            });
           
           
            participantsEl.append(participantEl);
            
        }
        worshopsEl.append(workshopEl);
    }

}

logoutButton.addEventListener('click', () => {
    logout();
});
