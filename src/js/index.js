/*

Obiettivo 1 - quando l'utente clicca sul pulsante di selezione delle piattaforme, dovrebbe aprirsi una casella con i pulsanti di selezione della piattaforma

Passo 1 - Ottenere il pulsante di selezione delle piattaforme in JavaScript per poter verificare quando l'utente clicca su di esso.
Passo 2 - Ottenere l'elemento del contenuto che deve essere mostrato.
Passo 3 - Catturare il clic dell'utente in JavaScript.
Passo 4 - Quando l'utente fa clic, aggiungere la classe "attivo" nell'elenco delle piattaforme all'interno del pulsante in modo che il contenuto venga visualizzato.

Obiettivo 2 - nel caso in cui l'elenco dei pulsanti delle piattaforme sia già visibile e l'utente clicchi sul pulsante, il contenuto deve essere nascosto

Passo 1 - Verificare se il pulsante è già aperto; in tal caso, dobbiamo rimuovere la classe "attivo" in modo che nasconda nuovamente il contenuto.

    */


const botao = document.querySelector(".btn-piattaforma");
const elementoPiattaforme = document.querySelector(".btn-piattaforma .piattaforme");

botao.addEventListener("click", () => {
    elementoPiattaforme.classList.toggle("attivo");
});
