
import { Data, firebaseManager } from '../lib/Data.js';
const mainData = Data('index', 'main');

const fbMainData = await firebaseManager.getData('/test/main');

export const mainBlock = /*html*/`
    <main role="main" class="homepage">
        <img class="logo" src="${mainData.logoImg}" />  
        <h2>${mainData.heading2}</h2>
        <h1>${mainData.heading1}</h1>
        <h3>${fbMainData.heading3}</h3>
        <mi-componente1></mi-componente1>
    </main>
`;