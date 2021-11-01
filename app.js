window.addEventListener('load', () => {

    document.querySelector("button#Searchbtn").addEventListener("click", (event) => {
        event.preventDefault();

        let divResult = document.querySelector("div#result");


        fetch(`superheroes.php?query= ${document.querySelector("input#searchfld").value.replace(/[-&\/\\#,+()$@|~%!.'":;*?<>{}]/g,'')}`.replace(/"[^-0-9+&@#/%?=~_|!:,.;\(\)]"/g, ''), { method: 'GET' })
            .then(resp => resp.text())
            .then(data => {
                let e1 = document.createElement("h2");
                e1.appendChild(document.createTextNode("Your superhero I guess"));
                let e2 = document.createElement("hr");
                divResult.innerHTML = '';
                divResult.innerHTML = data;
                divResult.prepend(e1, e2)

            })
    });

});