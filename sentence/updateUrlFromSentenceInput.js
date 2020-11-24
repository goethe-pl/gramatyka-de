
function updateUrlFromSentenceInput() {
    // document.getElementById('text').value = getSentenceFromUrl();
    // var param = window.location.search;
    var sentence = document.getElementById('text').value;
    if (sentence.length < 2) return false;

    var param = "?";
    param += sentence;
    // window.location.replace(window.location.pathname);
    return window.location.replace(window.location.pathname + param);
}