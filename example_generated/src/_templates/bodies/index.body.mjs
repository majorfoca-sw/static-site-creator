import { headerBlock } from '../blocks/header.block.mjs';
import { footerBlock } from '../blocks/footer.block.mjs';
import { mainBlock } from '../blocks/main.block.mjs';

export const bodyBlock = /*html*/`
  ${headerBlock}
  ${mainBlock}
  ${footerBlock}
`;
