function chargerproduits(){
    listItems = $("#list_items");

    $.ajax({
        url: "/produits",
        success: function( result ) {
            for(i = 0; i<result.length; i++){
                item = result[i];

                dColMd3 = $('<div></div>')
                    .addClass('col-md-3');

                dCardMb4 = $('<div></div>')
                    .addClass('card mb-4 rounded-3 shadow-sm');

                dCardHead = $('<div></div>')
                    .addClass('card-header py-3');

                hMy0 = $('<h4></h4>')
                    .addClass("my-0 fw-normal");
                hMy0.text(item.nom);

                dCardBody = $('<div></div>')
                    .addClass('card-body');

                hCardTitle = $('<h1></h1>')
                    .addClass('card-title text-center');
                hCardTitle.text(item.prix);

                ulListUnstyled = $('<ul></ul>')
                    .addClass("list-unstyled mt-3 mb-4")

                li1 = $('<li></li>');
                li1.text(item.qte_inventaire);

                li2 = $('<li></li>');
                li2.text(item.categorie.description);

                pW100 = $('<p></p>')
                    .addClass("w-100 display-6 text-center");

                iBi = $('<i></i>')
                    .addClass("bi bi-cart-plus");



                dCardHead.append(hMy0);

                ulListUnstyled.append(li1);
                ulListUnstyled.append(li2);

                pW100.append(iBi);

                dCardBody.append(hCardTitle);
                dCardBody.append(ulListUnstyled);
                dCardBody.append(pW100);

                dCardMb4.append(dCardHead);
                dCardMb4.append(dCardBody);

                dColMd3.append(dCardMb4);

                listItems.append(dColMd3);
            }
        }
    })
}

$(function () {

});

