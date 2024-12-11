import qr from 'qrcode-terminal';

async function handler(err, result) {
    if (err) {
        console.log(err);
        return;
    }

    const isSmall = result.Type == 2;
    qr.generate(result.link, { small: isSmall }, (qrcode) => {
        console.log('QR code gerado com sucesso\n');
        console.log(qrcode);
    });
}

export default handler;
