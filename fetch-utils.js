
const SUPABASE_URL = 'https://oxugqnbooekgmdjhpmgx.supabase.co';

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQyMDkwODY1LCJleHAiOjE5NTc2NjY4NjV9.LhgGbQ6in8bIPCSfpSxCm3lddjxtA7TxtnJje0ZB2oU';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


export async function createParticipant(participant) {
    const response = await client
        .from('participants')
        .insert(participant);

    return checkError(response);
}

export async function deleteParticipant(participantId) {
    const response = await client 
        .from('participants')
        .delete()
        .match({ id: participantId })
        .single();

    return checkError(response);
}

export async function getWorkshops() {
    const response = await client
        .from('workshops')
        .select('*, participants (*) ');

    return checkError(response);
}


export async function getUser() {
    return client.auth.session();
}


export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('../'); 
}

export async function redirectIfLoggedIn() {
    if (await getUser()) {
        location.replace('./workshops-page');
    }
}

export async function signupUser(email, password){
    const response = await client.auth.signUp({ email, password });
    
    return response.user;
}

export async function signInUser(email, password){
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return window.location.href = '../';
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
