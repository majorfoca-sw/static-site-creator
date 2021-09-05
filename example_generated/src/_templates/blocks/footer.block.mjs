import { Data } from '../lib/Data.js';
const footerData = Data('index', 'footer');

export const footerBlock = /*html*/`
    <footer>
      ${footerData.toolName} - &copy;${new Date().getFullYear()} - Powerd by @majorfoca
    </footer>
`;