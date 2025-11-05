import "bootstrap";
import "./style.css";

window.onload = function() {
  let pronouns = ['the', 'our'];
  let adjs = ['great', 'big'];
  let nouns = ['jogger', 'raccoon'];
  let extension = '.com'
  let domains = [];
  
  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        domains.push(`${pronoun}${adj}${noun}${extension}`)
      }
    }
  }
    
  const ul = document.querySelector('#domain-list')
  let contenido = '';
  
  domains.forEach((domain) => {
    contenido += `
      <li class="list-group-item d-flex justify-content-between">
        ${domain}
      </li>`
    
  })
  
  ul.innerHTML = contenido

};
