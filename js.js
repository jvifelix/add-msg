function fazPost(nome, classificacao, comentario){
    fetch("http://localhost:8080/apisms/insert", {
        headers:{
            "Accpet": "application/json",
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            nome: nome,
            classificacao: classificacao,
            comentario: comentario
        })
    }).then(function (res) {
        console.log(res);
    }).catch(function(res){
        console.log(res);
    });
}

const nome = document.getElementById("nome");
const select = document.querySelector("select")
const comentario = document.getElementById("comentario");
const form = document.querySelector("form");



form.addEventListener("submit", (e)=>{
    console.log(nome.value, select.options[select.selectedIndex].value, comentario.value);
    fazPost(nome.value, select.options[select.selectedIndex].value, comentario.value);
    e.preventDefault();
    
    
})