import "bootstrap";
import "./style.css";

window.onload = function() {
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'raccoon'];
  
  
  let domains = [pronoun, adj, noun]
    
  let contenido = ''
  const tag = document.querySelector('ul')
  
  domains.map((item) => {
    contenido += `
      <li class="list-group-item d-flex justify-content-between">
        ${item}
      </li>`
    
  })
  tag.innerHTML = contenido

};
