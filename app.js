window.addEventListener('load', () => {

    document.querySelector("button#Searchbtn").addEventListener("click", (event) => {
        fetch("superheroes.php")
            .then(resp => resp.text())
            .then(data => alert(data))
    });

});