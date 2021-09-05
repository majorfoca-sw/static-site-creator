export class Language {
  static setLanguage(language) {
    const defaultLang = document.documentElement.lang || window.navigator.language.split('-')[0];
    this.LANG = language || defaultLang;
  }

  static detectLanguage() {
    const defaultLang = document.documentElement.lang || window.navigator.language.split('-')[0];
    const { pathname } = document.location;
    const regExpAnalyzeUrl = /(\/?)(?<lang>[\w_-]*)\//;
    const result = pathname.match(regExpAnalyzeUrl);
    let { lang } = result.groups;
    lang = (lang === '') ? defaultLang : lang;
    this.setLanguage(lang);
    return lang;
  }
}
