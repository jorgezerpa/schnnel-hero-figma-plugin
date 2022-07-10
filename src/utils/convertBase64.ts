const fs = require('fs')

export default function convertBase64(image:any):string{
    const base64str = fs.base64_encode(image);
    return base64str; 
}


