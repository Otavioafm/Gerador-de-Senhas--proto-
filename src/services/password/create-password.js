import handle from './handler.js';

async function createPassword() {
    const password = await handle();  
    console.log('Password: ' + password);
}

export default createPassword;
