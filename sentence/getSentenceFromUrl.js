
// load sentence from param url, ?*
function getSentenceFromUrl() {
    var params = window.location.search.slice(1)
        .split('&')
        .reduce(function _reduce(/*Object*/ a, /*String*/ b) {
            b = b.split('=');
            a[b[0]] = decodeURIComponent(b[1]);
            return a;
        }, {});
    var sentence = Object.keys(params)[0];
    sentence = decodeURI(sentence);
    console.log(sentence, params);

    return sentence;
}
