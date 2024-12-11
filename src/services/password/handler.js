import dotenv from 'dotenv';  // Se ainda não estiver importando dotenv

dotenv.config();  // Carrega as variáveis de ambiente

async function createPassword() {
    console.log('Gerando senha...');

    // Função para gerar a senha
    let character = [];
    let password = '';

    const passwordLength = parseInt(process.env.PASSWORD_LENGTH);  


    if (process.env.UPPERCASE_LETTERS === 'true') {
        character.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }
    if (process.env.LOWCASE_LETTERS === 'true') {
        character.push(...'abcdefghijklmnopqrstuvwxyz');
    }
    if (process.env.NUMBERS === 'true') {
        character.push(...'0123456789');
    }
    if (process.env.SPECIAL === 'true') {
        character.push('!@#$%&*');
    }

    for (let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * character.length);
        password += character[index];
    }

    console.log(`Senha gerada: ${password}`);
}

export default createPassword;
