// inputs = Array.from(document.querySelectorAll('button'));
setTimeout(function () {
    // load depnds part of sentence to correct part, replace it
    document.getElementById('text').value = getSentenceFromUrl();


    const node = document.getElementById('text');
    node.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            updateUrlFromSentenceInput();
        }
    });
    node.focus();
    //
    // window.onload = function() {
    //     node.focus();
    // }

}, 200);
