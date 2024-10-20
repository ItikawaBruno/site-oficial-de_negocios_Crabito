let resposta=''
let section=document.querySelector('#mostrar')

resposta+=`
<div class="box-mostrar">
    <img src="./image/img_05.jpeg" alt="">
    <h1>Componente essenciais</h1>
    <p>Base: A estrutura principal do seu robô. Pode ser feita de madeira (mais leve e fácil de trabalhar) ou metal 
    (mais resistente e durável). A base serve como suporte para todos os outros componentes.</p>
    <p>Arduino: O "cérebro" do seu robô. É uma placa eletrônica de código 
    aberto que permite programar diversos comportamentos e interações.</p>
    <p>Soquete de pilhas: A fonte de energia do seu robô. Ele permite
     conectar as pilhas e fornecer energia para os componentes eletrônicos.</p>
    <p>Motor: O motor é o responsável por gerar o movimento do seu
     robô. Pode ser usado para mover rodas, braços ou outras partes móveis.</p>
</div>
`

section.innerHTML=resposta

resposta=''

document.querySelector('#essenciais').addEventListener('click',()=>{
    resposta=''

    resposta+=`
    <div class="box-mostrar">
        <img src="./image/img_05.jpeg" alt="">
        <h1>Componente essenciais</h1>
        <p>Base: A estrutura principal do seu robô. Pode ser feita de madeira (mais leve e fácil de trabalhar) ou metal 
        (mais resistente e durável). A base serve como suporte para todos os outros componentes.</p>
        <p>Arduino: O "cérebro" do seu robô. É uma placa eletrônica de código 
        aberto que permite programar diversos comportamentos e interações.</p>
        <p>Soquete de pilhas: A fonte de energia do seu robô. Ele permite
         conectar as pilhas e fornecer energia para os componentes eletrônicos.</p>
        <p>Motor: O motor é o responsável por gerar o movimento do seu
         robô. Pode ser usado para mover rodas, braços ou outras partes móveis.</p>
    </div>
    `

    section.innerHTML=resposta
})
document.querySelector('#importantes').addEventListener('click',()=>{
    resposta=''

    resposta+=`
    <div class="box-mostrar">
        <img src="./image/img_05.jpeg" alt="Motor de uma roda sendo soldado.">
        <h1>Componentes importantes</h1>
        <p>Protoboard: Uma placa com furos onde você pode conectar os componentes eletrônicos
         sem a necessidade de solda, facilitando a montagem e a experimentação.</p>
        <p>Bluetooth: Permite controlar o robô remotamente através de um dispositivo móvel
         como um smartphone ou tablet.</p>
        <p>Jumpers: Pequenos fios utilizados para conectar os diferentes componentes do circuito eletrônico.
         Eles permitem a passagem da corrente elétrica entre os componentes.</p>
    </div>
    `

    section.innerHTML=resposta
})
document.querySelector('#extras').addEventListener('click',()=>{
    resposta=''

    resposta+=`
    <div class="box-mostrar">
        <img src="./image/img_04.jpeg" alt="Um robo sendo visto de frente mostrando componentes como o arduino.">
        <h1>Componentes extras</h1>
        <p>LEDs: Diodos emissores de luz que podem ser usados para indicar o estado do robô ou criar efeitos visuais.</p>
        <p>Sensores: Permitem ao robô interagir com o ambiente, detectando luz, som, movimento, distância, entre outros.p>
    </div>
    `

    section.innerHTML=resposta
})
document.querySelector('#estilizacao').addEventListener('click',()=>{
    resposta=''

    resposta+=`
    <div class="box-mostrar">
        <img src="./image/finalizado-4.jpeg" alt="robo finaizado com forma de caranguejo com suas guarras recolhidas.">
        <h1>Materias para estilização</h1>
        <p>Servomotores: Motores que podem ser controlados com precisão para realizar movimentos específicos.</p>
        <p>Materiais de Estilização: Tinta, massa de modelar e papel 
        podem ser usados para personalizar o seu robô e torná-lo mais divertido.</p>
    </div>
    `

    section.innerHTML=resposta
})