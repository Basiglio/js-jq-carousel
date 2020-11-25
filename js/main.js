// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider.
// Inoltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera.
// Utiliziamo una classe first e last per capire quali sono la prima e ultima immagine dello slider.
// Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider.
// Bonus:
// Clicchiamo sui pallini e mostriamo l’immagine corrispondente.
// Generiamo i pallini con JS.




// ATTIVO JS NEL MIO HTML
$(document).ready(
  function () {
    // COLLEGO IL CLICK A DESTRA
    $(".next").click(
      function () {
        nextImage();
        console.log("clicco a destra");
      }
    );
    // COLLEGO IL CLICK A SINISTRA
    $(".prev").click(
      function () {
        prevImage();
        console.log("clicco a sinistra");
      }
    );
    // COLLEGO I BOTTONI ALLO SCROLL
    $(document).keydown(
      function () {
        console.log(event.keyCode);
        if (event.keyCode == 37) {
          prevImage();
        } else if (event.keyCode == 39)  {
          nextImage();
        }
      }
    );
    // COLLEGO IL CLICK AI CERCHI
    $(".nav i").click(
      function (){
        // RIMUOVO IL BACKGROUND DEL CERCHIO AL CLICK
        $(".nav i").removeClass("active");
        // AGGIUNGO BACKGROUND DEL CERCHIO AL CLICK
        $(this).addClass("active");
        // PRENDO E SALVO LA POSIZIONE DEL CERCHIO IN UNA VAR
        var circleIndex = $(this).index();
        // AL CLICK RIMUOVO CLASSE ACTIVE ALL'IMMAGINE
        $("img").removeClass("active");
        // AL CLICK AGGIUNGO CLASSE ACTIVE ALL'IMMAGINE IN BASE ALLA POSIZIONE(INDEX) DEL CERCHIO
        $(".images > img").eq(circleIndex).addClass("active");
        // CON .EQ SELEZIONO UN ELEMENTO CON UN DETERMINATO INDEX
      }
    )

  }
);


// MY FUNCTION------------------------------------------------

// COLLEGO IL CLICK A SINISTRA
function prevImage() {
  // SELEZIONO L'IMMAGINE NELL'HTML
  var activeImage = $(".images .active");
  // SELEZIONO I NELL'HTML
  var activeCircle = $(".nav .active");
  // RIMUOVO LA CLASSE ACTIVE
  activeImage.removeClass("active");
  activeCircle.removeClass("active");
  // SE IL MIO ELEMENTO HA CLASSE FIRST
  if (activeImage.hasClass("first") == true) {
    // SPOSTA LA CLASSE ACTIVE SULL'ELEMENTO CON CLASSE FIRST
    $(".images img.last").addClass("active");
    $(".nav i.last").addClass("active");
  } else {
    // ALTRIMENTI SPOSTA LA CLASSE SULL'ELEMENTO SUCCESSIVO
    activeImage.prev("img").addClass("active");
    activeCircle.prev("i").addClass("active");
  }
}

// COLLEGO IL CLICK A DESTRA
function nextImage() {
  // SELEZIONO L'IMMAGINE NELL'HTML
  var activeImage = $(".images .active");
  // SELEZIONO I NELL'HTML
  var activeCircle = $(".nav .active");
  // RIMUOVO LA CLASSE ACTIVE
  activeImage.removeClass("active");
  activeCircle.removeClass("active");
  // SE IL MIO ELEMENTO HA CLASSE LAST
  if (activeImage.hasClass("last") == true) {
    // SPOSTA LA CLASSE ACTIVE SULL'ELEMENTO CON CLASSE FIRST
    $(".images img.first").addClass("active");
    $(".nav i.first").addClass("active");
  } else {
    // ALTRIMENTI SPOSTA LA CLASSE SULL'ELEMENTO SUCCESSIVO
    activeImage.next("img").addClass("active");
    activeCircle.next("i").addClass("active");
  }
}
