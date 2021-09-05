import '../../components/@majorfoca/inline-select-list/inline-select-list.js';
import { Data, detectPathLanguage } from '../lib/Data.js';
const headerData = Data('index', 'header');

const languagesList = "es,en";
const languageSelected = detectPathLanguage(languagesList);

export const headerBlock = /*html*/`
    <header class="main">
    <section class="texts">
    <h1>${headerData.title}</h1>
    <h2>${headerData.subtitle}</h2>
    </section>
    <inline-select-list elements-list="${languagesList}" element-selected="${languageSelected}"></inline-select-list>
    </header>
`;