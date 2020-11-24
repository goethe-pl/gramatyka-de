// inputs = Array.from(document.querySelectorAll('button'));
setTimeout(function () {
    // load depnds part of sentence to correct part, replace it
    const node = document.getElementById('sentence');
    node.addEventListener("keyup", function(event) {

        if (event.key === "Enter") {
            updateUrlFromSentenceInput();
        }
    });
}, 200);
