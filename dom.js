
/*document.querySelector("#changeTextButton").addEventListener("click",
   function() {
    let novoText = document.querySelector("#inputText").value;
    let elemento = document.querySelector("#paragraph");
    elemento.innerText = novoText;

});*/

document.querySelector("#changeTextButton").addEventListener("click",
    function() {
let novoText = document.querySelector("#inputText").value; 
let elemento = document.querySelector("#paragraph");
elemento.innerHTML = `<span>${novoText}</span>`;

});


document.querySelector("#changeAttributeButton").addEventListener("click",
  function() {
    let imagem = document.querySelector("#image");
    imagem.setAttribute("src", "images/solo2.jpg");
  } 
);

document.querySelector("#addButton").addEventListener("click",
function() {
    let novoParagrafo = document.createElement("p");
    novoParagrafo.textContent = "novo parágrafo adicionado!";
    document.querySelector("#container").appendChild(novoParagrafo);

}
);

document.querySelector("#removeButton").addEventListener("click",
    function() {
        let paragrafo = document.querySelector("p");
        if(paragrafo){
          paragrafo.remove();  
        }
    }
);

document.querySelector("#changeStyleButton").addEventListener("click", function() {
    let paragrafo = document.querySelector("#paragraph");

    paragrafo.style.color = "red";       
    paragrafo.style.fontSize = "20px";   
});
