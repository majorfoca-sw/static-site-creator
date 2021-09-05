import rawData from '../../_json/index.json.js'; /* FUENTE DE DATOS JSON */
import { Language } from './Language.js';
import { firebaseConfig } from './FirebaseManager/firebase.config.js';
import { FirebaseManager } from './FirebaseManager/FirebaseManager.js';

function setData() {
  const data = {};
  const dataKeys = Object.keys(rawData);
  dataKeys.forEach((dataKey) => {
    const localData = rawData[dataKey];
    const { common } = localData;
    delete localData.common;
    const localDataKeys = Object.keys(localData);
    localDataKeys.forEach((localDataKey) => {
      localData[localDataKey] = {
        ...common,
        ...localData[localDataKey],
      };
    });
    data[dataKey] = localData;
  });
  return data;
}

export function detectPathLanguage(languagesList) {
  const languagesArr = languagesList
    .split(',')
    .map((lang) => lang.toUpperCase());
  const pathParts = document.location.pathname.split('/');
  let languageSelected;
  if (
    pathParts.length > 1
        && languagesArr.includes(pathParts[1].toUpperCase())
  ) {
    languageSelected = pathParts[1].toUpperCase();
  } else {
    languageSelected = 'ES';
  }
  return languageSelected.toLocaleLowerCase();
}

const DATA = setData();
Language.detectLanguage();

export function Data(page, block) {
  return DATA[page][Language.LANG][block];
}

export const firebaseManager = new FirebaseManager(firebaseConfig);
