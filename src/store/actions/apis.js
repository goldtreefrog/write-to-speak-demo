function sendToLanguageToolAPI(textToCheck) {
  // Find misspellings with LanguageTool
  const params = {
    site: "",
    text: textToCheck,
    language: "en-us"
  };

  let url = "https://languagetool.org/api/v2/check";
  $.getJSON(url, params, displayFeedback);
}

// Function: sayIt
// Speak text string with optional focus and scrolling
function sayIt(textToSay, focusElem, scrollElem) {
  responsiveVoice.speak(textToSay);
  if (focusElem) {
    $(focusElem).focus();
  }
  if (scrollElem) {
    $(window).scrollTo(scrollElem);
  }
}
