import fs from 'fs';
import path from 'path';

const distPath = './dist/js';
const microfrontends = JSON.parse(fs.readFileSync('./microfrontends.json', 'utf-8'));

const files = fs.readdirSync(distPath);
Object.keys(microfrontends).forEach((name) => {
    const chunkFile = files.find((file) => file.startsWith(name) && file.endsWith('.js'));
    if (chunkFile) {
        microfrontends[name].chunk = `/dist/js/${chunkFile}`;
    }
});

fs.writeFileSync('./microfrontends.json', JSON.stringify(microfrontends, null, 2));
console.log('Файл microfrontends.json обновлен с реальными ссылками на чанки.');
