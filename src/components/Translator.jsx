import React, { useEffect } from 'react';

const Translator = () => {
  function googleTranslateElementInit() {
    new window.google.translate.TranslateElement(
      {
        // layout: google.translate.TranslateElement.InlineLayout.autoDisplay.hide,
        // includedLanguages: 'ar,en,fr,hu,ru,it'
      },
      'google_translate_element'
    );
  }

  function onLangChange() {
    var e = this.getElementsByTagName('select')[0];
    var language = e.options[e.selectedIndex].text;
    localStorage.setItem('ptf-user-lang', language);
  }

  function onSetLang(languageCode) {
    var selectElement = document.getElementsByTagName('select')[0];
    for (var i = 0; i < selectElement.options.length; i++) {
      if (selectElement.options[i].value === languageCode) {
        selectElement.options[i].selected = true;
        break;
      }
    }
    selectElement.dispatchEvent(new Event('change'));
  }

  useEffect(() => {
    var addScript = document.createElement('script');

    addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    addScript.setAttribute('defer', 'true');
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;

    document.getElementById('google_translate_element').addEventListener('change', onLangChange, false);
  }, []);

  return <div id="google_translate_element"></div>;
};

export default Translator;
