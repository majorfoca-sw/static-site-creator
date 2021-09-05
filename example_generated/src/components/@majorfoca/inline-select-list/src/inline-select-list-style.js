import { css } from 'lit-element';

export const componentStyles = css`
  .link-element_box {
    display: flex;
  }
  .link-element_box:first-child {
    margin-left: 35px;
  }

  .link-element {
    background-color: #F5F6FA;
    display: flex;
    font-size: 12px;
    font-weight: 300;
    line-height: 16px;
    cursor: pointer;
    color: #4D4D4E;
    padding: 5px 10px;
    margin: 0 15px 0 0;
    outline:none;
    border:none;
    text-decoration: none;
  }

  .link-element--click {
    cursor: not-allowed; 
    font-weight: 800;
  }

  @media all and (min-width: 1024px) {
    .link-element_container {
      margin: 0;
      padding: 0;
      width: 100%;
    }
    .link-element_box:first-child {
      margin-left: 5px;
    }      

    .link-element_box {
      display: flex;
      justify-content: space-evenly;
      padding: 0;
    }
    .link-element {
      font-size: 14px;
      padding: 5px;
      margin: 0px 7px 0px 0px;
      background-color: inherit;
    }
  }
  @media all and (min-width: 1280px) {
    .link-element_box:first-child {
      margin-left: 35px;
    } 
    .link-element {
      padding: 5px 10px;
      margin: 0 15px 0 0;
    }
  }

  @media all and (max-width: 320px) {
    .link-element_box:first-child {
      margin-left: 5px;
    } 
    .link-element {
      padding: 2px 5px;
      margin: 0 5px 0 0;
      font-size: 10px;
    }
  }
`;
