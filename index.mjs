export default function getImage(str) {
    const emoji = str.replace(/[\ufe00-\ufe0f\u200d]/g, '');
    const name = [];
    for (let i = 0; i < emoji.length; i++)
        name.push(('0000' + str.charCodeAt(i).toString(16)).slice(-4));
    return name.join('-')
}
