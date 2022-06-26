let prodotti = [{nome_prodotto: "Baldur's Gate III", prezzo: 59.99}, 
                {nome_prodotto: "Civilization VI", prezzo: 39.99}, 
                {nome_prodotto: "Dark Souls III", prezzo: 45.50}, 
                {nome_prodotto: "Elden Ring", prezzo: 72.00}, 
                {nome_prodotto: "FIFA 22", prezzo: 49.99}, 
                {nome_prodotto: "Jurassic World Evolution II", prezzo: 65.30}, 
                {nome_prodotto: "No Man's Sky", prezzo: 30}, 
                {nome_prodotto: "Tekken 7", prezzo: 89.90}];
let carrello = [];


function add_to_Cart(nome_prod, fonte_immagine){
    let trovato = false;
    let occorrenza = 1;
    for(i = 0; i<prodotti.length && !trovato; i++){
        if(nome_prod == prodotti[i].nome_prodotto){
            if(carrello.length != 0){
                for(j = 0; j < carrello.length; j++){
                    if(prodotti[i].nome_prodotto == carrello[j].nome_prodotto){
                        occorrenza++;
                    }
                }
            }
            let nome_gioco_inCart = "" + prodotti[i].nome_prodotto + "_n" + occorrenza;
            /*   
            OGGETTO CARRELLO
            - nome_prodotto
            - prezzo
            - id_prodotto
            */
            let gioco = {nome_prodotto: prodotti[i].nome_prodotto, prezzo: prodotti[i].prezzo, 
                    id_prodotto: nome_gioco_inCart};
            carrello.push(gioco);
            aggiungi_elemento_Lista(occorrenza, fonte_immagine, prodotti[i].nome_prodotto, prodotti[i].prezzo);
            trovato = true;
            conto();
        }
    }
    //Status_variabili()
}


function aggiungi_elemento_Lista(occorrenza, fonte_immagine, nome_prod, prezzo_prod){    
    //  CREAZIONE ELEMENTO LISTA e SETTING DI ALCUNI ATTRIBUTI
    let elemento_carrello = document.createElement('li');
    let id_elemento_carrello = "" + nome_prod + "_n" + occorrenza;
    elemento_carrello.setAttribute('id', id_elemento_carrello);
    elemento_carrello.setAttribute('class', 'prodotto_carrello');
    elemento_carrello.setAttribute('onclick', 'rimuovi_elemento_Lista(this.id)');
    //  AGGIUNTA DELL'ELEMENTO LISTA NEL DOM, COME FIGLIO DEL CARRELLO UL
    document.getElementById('cart_row').appendChild(elemento_carrello);
    //  CREAZIONE DEL CONTENUTO DELL'ELEMENTO LISTA 
    let immagine_li = "<img class='icona_carrello' src='" + fonte_immagine + "' alt='icona_prodotto'>";
    let prezzo_li = "<div class='prezzo_prodotto'>" + prezzo_prod + " $</div>"; 
    //  INSERIMENTO DEL CONTENUTO NELL'ELEMENTO LISTA 
    document.getElementById(id_elemento_carrello).innerHTML = immagine_li + prezzo_li;    
}


function conto(){
    let totale = 0;
    for(const prodotto of carrello){
        totale = totale + prodotto.prezzo;
    }
    let stamp_ans = "Conto = " + totale.toFixed(2) + "$";
    document.getElementById("schermo_cassa").innerHTML = stamp_ans;
}


function rimuovi_elemento_Lista(id_elemento){
    document.getElementById(id_elemento).remove();
    for(i = 0; i < carrello.length; i++){
        if(id_elemento == carrello[i].id_prodotto){
            carrello.splice(i, 1);
        }
    }
    conto();
}


function array_Id_dei_Prodotti(){
    let array_ids = [];
    for(const prodotto of carrello){
        array_ids.push(prodotto.id_prodotto);
    }
    return array_ids;
}


function svuota_carrello(){
    let array_ids_prodotti = array_Id_dei_Prodotti();
    for(const id_attuale of array_ids_prodotti){
        rimuovi_elemento_Lista(id_attuale);
    }
}


function Status_variabili(){
    console.log(carrello);
}

