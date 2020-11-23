setTimeout(
    function () {
        var url = new URL(window.location.href);
        var domain = url.searchParams.get("host");
        //console.log(domain);
        document.getElementById("domain").value = domain;
        document.getElementById("title").innerHTML = domain;
    }
    , 300);



