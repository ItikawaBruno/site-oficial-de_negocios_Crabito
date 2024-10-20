
let section=document.querySelector("#mostrar")
let resultado='';

resultado+=`
    <section class="roboCup" >
        <h1>RoboCup</h1>
        <p>RoboCup é uma das competições mais tradicionais e animadas da faculdade. Destinada aos alunos do primeiro ano do curso de Sistemas de Informação, a Robocup desafia os estudantes a construírem robôs autônomos e programados para uma batalha eletrizante.</p>
    </section>
    <h1><span>V</span>S</h1>
    <section class="next" >
        <h1>Next</h1>
        <p>É um evento promovido pela FIAP que reúne os melhores projetos de Iniciação Científica e dasafios, desenvolvidos pelos alunos dos cursos de graduação da instituição. É uma oportunidade para os estudantes apresentarem suas ideias inovadoras e soluções criativas para o mundo atual. </p>
    </section>


`

section.innerHTML=resultado


document.querySelector('#btnNext').addEventListener('click',() => {

    resultado='';

    resultado+=`
    <section class="next" >
        <h1>Next</h1>
        <p>É um evento promovido pela FIAP que reúne os melhores projetos de Iniciação Científica e dasafios, desenvolvidos pelos alunos dos cursos de graduação da instituição. É uma oportunidade para os estudantes apresentarem suas ideias inovadoras e soluções criativas para o mundo atual. </p>
    </section>
    `
    section.innerHTML=resultado

})




document.querySelector('#btnRoboCup').addEventListener('click',() => {

    resultado='';

    resultado+=`
    <section class="roboCup" >
        <h1>RoboCup</h1>
        <p>RoboCup é uma das competições mais tradicionais e animadas da faculdade. Destinada aos alunos do primeiro ano do curso de Sistemas de Informação, a Robocup desafia os estudantes a construírem robôs autônomos e programados para uma batalha eletrizante.</p>
    </section>
    `
    section.innerHTML=resultado

})