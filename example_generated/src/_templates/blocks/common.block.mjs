import language from '../lib/language';

export class CommonBlock {
  constructor() {
    this.data = {};
    this.language = {};
    this.defaultLang = window.navigator.language;
    this.LANG = this.defaultLang;
  }

  static setData(data) {
    const dataKeys = Object.keys(data);
    dataKeys.forEach((dataKey) => {
      const localData = data[dataKey];
      const { common } = localData;
      delete(localData.common);
      const localDataKeys = Object.keys(localData);
      localDataKeys.forEach((localDataKey) => {
        localData[localDataKey] = { ...common, ...localData[localDataKey] };
      });
      data[dataKey] = localData;
    });
    this.data = data;
  }

  static setLanguage(language) {
    this.language = language;
    this.LANG = this.language.lang;
  }

  static detectLanguage() {
    const { pathname } = document.location;
    const regExpAnalyzeUrl = /(\/?)(?<lang>[\w_-]*)\//;
    const result = pathname.match(regExpAnalyzeUrl);
    let { lang } = result.groups;
    lang = (lang === '') ? 'es' : lang;
    this.setLanguage({ lang });
    return lang;
  }
}
