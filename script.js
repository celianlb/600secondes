$('.slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: true,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='./img/slider/prev-arrow.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='./img/slider/next-arrow.png'>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });









document.getElementById("btnDecrement").disabled = true;
    
    // définition de la variable compteur avec une valeur initiale de 0
    let compteur = 0;
    let consommation_compteur = 0.5;
    let fintableau=false;  
    // tableau consommation et équivalent
    const consommation = ["28,5", "57", "85,5","114", "142,5","171", "199,5","228", "256,5", "285", "313,5", "342", ">342"];
 const equivalent = ["280", "560", "840", "1120", "1400", "1680", "1960", "2240", "2520", "2800", "3080", "3360", ">3360"];
//   document.getElementById('compteur').innerHTML = consommation[0] + " KG DE CO2 PAR AN <br> " + equivalent[0] + " KM PARCOURUS EN VOITURE " + 0.5;
    document.getElementById('compteur1').innerHTML = "<span class=\"total\">" + consommation[0] + "<span/>"
    document.getElementById('compteur2').innerHTML = "<span class=\"total\">" + equivalent[0] + "<span/>"
    document.getElementById('compteur3').innerHTML = 0.5
    

// Incrementation du compteur
function incrementCounter() {
    if(compteur == consommation.length-1){
        fintableau=true
        document.getElementById("btnIncrement").disabled = true;
        return; 
    }
    
    compteur++;
    consommation_compteur += 0.5;
    document.getElementById("btnDecrement").disabled = false;
    affichage(compteur,consommation_compteur)
    }
    
    // Affichage du compteur et des valeurs 
    function affichage(compteur,consommation_compteur){
    let consomme = consommation[compteur];
    let equivaut = equivalent[compteur];
    // document.getElementById('compteur').innerHTML = consomme + " KG DE CO2 PAR AN <br> " + equivaut + " KM PARCOURUS EN VOITURE " + consommation_compteur;
    document.getElementById('compteur1').innerHTML = "<span class=\"total\">" + consomme + "<span/>"
    document.getElementById('compteur2').innerHTML = "<span class=\"total\">" + equivaut + "<span/>"
    document.getElementById('compteur3').innerHTML = consommation_compteur
    
    if(compteur == consommation.length-1){
        document.getElementById("btnIncrement").disabled = true;
    }
}

// Decrementation du compteur
function decrementCounter(){
    if(compteur == consommation.length-1){
        
        document.getElementById("btnIncrement").disabled = false;
    } 
    compteur--;  
    consommation_compteur -= 0.5;
    
        if (compteur == 0) {
        document.getElementById("btnDecrement").disabled = true;
    }
    
    affichage(compteur,consommation_compteur)
}     




