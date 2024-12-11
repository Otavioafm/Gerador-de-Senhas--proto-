const promptQrcode = [
    {
        name: 'link',
        description: 'Digite o link para gerar o Qr Code ',
    },
    {
        name: 'Type',
        description: 'Escolha entre o tipo | 1 para [Normal] ou 2 para [Terminal]', 
        pattern: /^[1-2]+$/,
        message: 'Escolha apenas entre 1 e 2',
        required: true,
    }
];

export default promptQrcode;
