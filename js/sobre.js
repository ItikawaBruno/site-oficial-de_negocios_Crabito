let resposta=''
let section=document.querySelector('#mostrar')

resposta=''

resposta+=`<div id="resultado">
                <h1>Um pouco sobre a empresa Crabito.</h1>
                <p>Somos uma StartUp de robótica educacional,
                 visamos entregar ao maximo uma ótima experiência e 
                 sempre trazer novidades a nossos alunos. Nosso objetivo é passar uma vivencia que nós 
                 5 do grupo tivemos no nosse primeiro ano de Sistemas de Informação. </p>
            </div>
`

section.innerHTML=resposta



document.querySelector('#sobre').addEventListener('click',()=>{

    resposta=''

    resposta+=`<div id="resultado">
                    <h1>Um pouco sobre a empresa Crabito.</h1>
                    <p>Somos uma StartUp de robótica educacional,
                     visamos entregar ao maximo uma ótima experiência e 
                     sempre trazer novidades a nossos alunos. Nosso objetivo é passar uma vivencia que nós 
                     5 do grupo tivemos no nosse primeiro ano de Sistemas de Informação. </p>
                </div>
    `
    
    section.innerHTML=resposta
})


document.querySelector('#historia').addEventListener('click',()=>{
    resposta=''

resposta+=`<div id="resultado">
                <h1>Hisória</h1>
                <p>Nossa equipe é composta por cinco integrantes Bruno, Caio, Cesar, Kevin e Matheus. 
                Como foi uma jornada longa com muitos desafios para construir o que o Crabito é hoje, não podemos deixar ele
                de fora desse grupo especial e além do mais ele que nos uniu deixando cada um de nós mais proximos.
                No começo pensávamos que iria ser fácil de fazer mas esse pensamento parou de existir no primeiro dia do
                projeto, então focamos mutito e decidimos na quele dia que se fosse pra gente competir seria para ganha.
                finalmente o reconhecimento veio e Estamos felizes de competir na RobôCup(NEXT).</p>
            </div>
`

section.innerHTML=resposta
})


document.querySelector('#empresa').addEventListener('click',()=>{
    resposta=''

resposta+=`<div id="resultado">
                <h1>Nossa Empresa.</h1>
                <p>Nós como uma StartUp de tecnologia e voltada para preservar o meio ambiente, criamos o primeiro projeto 
                que era construir um robô que se asemelha a um caranguejo. E nome crabito surgiu em uma reunião entre os cinco
                integrantes do grupo e pensamos muito até que chegamos a conclusão de que o nome teria que ser em inglês. Então Crab(caranguejo)
                e como ele é amigo de todos colocamos "bito", pois da uma sensação de aproximidade com as pessoas.</p>
            </div>
`

section.innerHTML=resposta
})
