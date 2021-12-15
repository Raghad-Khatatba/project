"use strict";
(function () {
    window.addEventListener("load", init);
    let main=Id("main");
    let biggercontainer=Id("biggercontainer");
    let Prev=Id("Prev");
    let playagain=qs(".newgame");
    function init() {
main.addEventListener("click", (eo) => {
    switch (eo.target.className) {
        case "rock1":
            //Hide the current page
          main.style.display="none";
           //show the bigger container
          biggercontainer.style.display="flex";
          //Hide the prev botton
          Prev.style.display="none";
          //Add the image that the user has pressed
          Id("userimage").src="images/Rock-icon.png";
         let x= coputerimage();
         console.log(x);
        break;
        case "scissor1":
            //Hide the current page
            main.style.display="none";
             //show the bigger container
            biggercontainer.style.display="flex";
            //Hide the prev botton
            Prev.style.display="none";
            //Add the image that the user has pressed
            Id("userimage").src="images/Scissor-icon.png";
            coputerimage();
        break;
        case "paper1":
            //Hide the current page
            main.style.display="none";
            //show the bigger container
            biggercontainer.style.display="flex";
            //Hide the prev botton
            Prev.style.display="none";
            //Add the image that the user has pressed
            Id("userimage").src="images/Paper-icon.png";
           coputerimage();
        break;
    }
})
//return to the main page
playagain.addEventListener("click", () => {
    //show the current page
    main.style.display="flex";
    //Hide the bigger container
    biggercontainer.style.display="none";
    //show the prev botton
    Prev.style.display="block";
})
//go to the previse page
Prev.addEventListener("click",()=>{
    document.location.href = "Rules Page and game type page.html";
})
    }
    //show the random img
   let coputerimage= ()=>{
        let images=["images/Paper-icon.png","images/Scissor-icon.png","images/Rock-icon.png"];
        let randimg=images[Math.floor(Math.random()*3)];
        Id("coputerimage").src=randimg;
        return randimg ;
    }
    /**
      * Returns the element that has the ID attribute with the specified value.
      * @param {string} name - element ID.
      * @returns {object} - DOM object associated with id.
      */
    function Id(name) {
        return document.getElementById(name);
    }

    /**
     * Returns first element matching selector.
     * @param {string} selector - CSS query selector.
     * @returns {object} - DOM object associated selector.
     */
    function qs(selector) {
        return document.querySelector(selector);
    }
    /**
     * Returns an array of elements matching the given query.
     * @param {string} query - CSS query selector.
     * @returns {array} - Array of DOM objects matching the given query.
     */
    function qsa(query) {
        return document.querySelectorAll(query);
    }
})();
    