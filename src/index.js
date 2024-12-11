import prompt from 'prompt';
import mainPrompt from './prompts/prompt-main.js';
import createQr from './services/qr-code/create-QrCode.js';
import createPassword from './services/password/create-password.js';

async function main() {
    prompt.get(mainPrompt, async (err, result) => {
        if (err) {
            console.log(err);
            return;
        }

        if (result.select == 1) {
            await createQr();  
        }
        if (result.select == 2) {
            await createPassword();
        }
    });
}

main();
