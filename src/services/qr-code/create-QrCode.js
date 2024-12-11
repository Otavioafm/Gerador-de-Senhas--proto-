import prompt from 'prompt';
import promptQrcode from '../../prompts/prompt-qrcode.js';
import handler from './handler.js';  

async function createQr() {
    prompt.start(); 

    prompt.get(promptQrcode, handler);  
}

export default createQr;
