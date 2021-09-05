// Blockes
import { bodyBlock } from './bodies/index.body.mjs';
import { loadingBlock } from './blocks/loading.block.mjs';

document.body.innerHTML = `
  ${loadingBlock}
  <div id="main">
    ${bodyBlock}
  </div>
`;