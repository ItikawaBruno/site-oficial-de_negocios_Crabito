let tbody=document.querySelector('tbody');
let form=document.querySelector('form');
let mostrar=document.querySelector('#mostrar')
let resultado='';

document.querySelector('form').addEventListener('submit',(event)=>{

    let nome=document.querySelector('#nome').value.toLowerCase();
    event.preventDefault();

    resultado='';
    

    const dados=[
        document.querySelector('#nome'),
        document.querySelector('#user'),
        document.querySelector('#email')
    ];


    const tr=document.createElement('tr')

    dados.forEach(dado=>{
        const td=document.createElement('td');
        td.textContent=dado.value;
        tr.appendChild(td);
    });
    


    

    tbody.appendChild(tr);

    form.reset();

    resultado+=`<h1>Boas-vindas ${nome}!</h1>
        <h4>Seu cadastro foi realizado com sucesso!</h4>`

        mostrar.innerHTML=resultado

    
});