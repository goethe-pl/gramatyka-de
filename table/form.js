
function CopyToClipboardFromInputElement(input) {
    /* Select the text field */
    input.select();
    input.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Copied the text: " + input.value);
}

// inputs = Array.from(document.querySelectorAll('button'));
setTimeout(function () {
    // load depnds part of sentence to correct part, replace it
    console.log(sentence, params);
    document.getElementById('text').value = sentence;

    //# CLEAR
    document.getElementById('clear').addEventListener('click', function (event) {
        document.getElementById('text').value = "";
    }, false)

    //# Last reload
    document.getElementById('last').addEventListener('click', function (event) {
        // window.location.replace(window.location.pathname + window.location.search + window.location.hash);
        window.location.replace(window.location.pathname);
    }, false)

    //# Copy to
    document.getElementById('copy').addEventListener('click', function (event) {
        /* Get the text field */
        CopyToClipboardFromInputElement(document.getElementById("text"));

    }, false)

    // EVENTS on BUTTON'S
    document.querySelectorAll('.whole button').forEach(function (input) {
        input.addEventListener('click', function (event) {
            document.getElementById('text').value = this.innerText;


            this.parentElement.querySelectorAll('.active').forEach(function (subitem) {
                // console.log(subitem, subitem.className, this);
                subitem.className = subitem.className.replace(/\bactive\b/g, "");
            });

            this.classList.add('active');

        }, false)
    });

    document.querySelectorAll('.first button').forEach(function (input) {
        input.addEventListener('click', function (event) {

            var sentence = document.getElementById('text').value;

            var sentence_arr = sentence.split(" ");
            var find = sentence_arr[0]; //"Ich";
            var replace = this.innerText;
            // document.getElementById('text').value = [repstr1, repstr2].join(keepString);
            document.getElementById('text').value = sentence.replace(find, replace);


            this.parentElement.querySelectorAll('.active').forEach(function (subitem) {
                // console.log(subitem, subitem.className, this);
                subitem.className = subitem.className.replace(/\bactive\b/g, "");
            });

            this.classList.add('active');

        }, false)
    });

    document.querySelectorAll('.first_second button').forEach(function (input) {
        input.addEventListener('click', function (event) {

            var sentence = document.getElementById('text').value;

            var sentence_arr = sentence.split(" ");
            var find = sentence_arr[0] + " " + sentence_arr[1]; //"Ich";
            var replace = this.innerText;
            // document.getElementById('text').value = [repstr1, repstr2].join(keepString);
            document.getElementById('text').value = sentence.replace(find, replace);

            console.log(this.parentElement);

            this.parentElement.querySelectorAll('.active').forEach(function (subitem) {
                // console.log(subitem, subitem.className, this);
                subitem.className = subitem.className.replace(/\bactive\b/g, "");
            });

            this.classList.add('active');

        }, false)
    });

}, 200);


/*
KEEP on the middle and replace first and last

function replace(totalString, keepString) {
  var newstr = totalString.split(keepString);
  var repstr1 = "I replaced the";
  var repstr2 = "using javascript";
  return [repstr1, repstr2].join(keepString);
}

var div = document.getElementById("testdiv");
div.innerHTML = replace(div.innerHTML, " sentence ");


MULTI REPLACE
    function replaceText(toReplace, target, string){
        toReplace.map((s, idx) => { string = string.replace(s.input, s.output) })
        target.textContent = string
    }

    let toReplace = [
        { input: 'This is an example of a', output: 'I replaced the'},
        { input: 'that i want to replace', output: 'using JavaScript'}]

    let elem = document.getElementById('testdiv')
    let string = elem.textContent

    replaceText(toReplace, elem, string)
    */


/*
    var object = document.getElementsByTagName('button')[0];
    var value = object.innerHTML;

    function toInput(that) {
        console.log(that);
        document.getElementById('text').value = "";
    }
    */

// object.addEventListener("click", toInput);
// document.querySelector('input').addEventListener('focus', function (event) {
// document.querySelector("button").addEventListener("click", function (event) {
//     console.log(event.target);
//     console.log(event);
// }, false)

/*
    function findGetParameter(parameterName) {
        var result = null,
            tmp = [];
        location.search
            .substr(1)
            .split("&")
            .forEach(function (item) {
                tmp = item.split("=");
                if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
            });
        return result;
    }
    */
