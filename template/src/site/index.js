import { createI18n } from 'vue-i18n';

const languageFiles = import.meta.glob('@/locales/**/*.js', { eager: true });
const sitefiles = import.meta.glob('./*.js', { eager: true });
const defaultSite = 'www';

const prefixReg = /[\.]\w+/g;
const hostPrefix = window.location.host.replace(prefixReg, ''); 
const siteName = window.location.protocol === 'https:' ? hostPrefix : defaultSite;

const languages = Object.keys(languageFiles)
  .reduce((obj, modulePath) => {
    const fileName = /(?<=\/)[a-zA-Z]+(?=.js)/.exec(modulePath)?.[0] || '';
    return Object.assign({}, obj, {[fileName]: languageFiles[modulePath]?.default });
  }, {});

const sites = Object.keys(sitefiles)
  .reduce((obj, modulePath) => {
    const moduleName = /(?<=\/)[a-zA-Z]+(?=.js)/.exec(modulePath)?.[0] || '';
    return Object.assign({}, obj, { [moduleName]: sitefiles[modulePath]?.default });
  }, {});


export const initI18n = () => {
  return createI18n({
    legacy: false,
    locale: sites[siteName].lang,
    messages: languages
  });
};

export const site = sites[siteName];
