/*
 * cases of secound game.
 * we want to show a 'YOU WIN','DRAW',and 'YOU LOSE' sentence when the player  
 * chooses his choice from the buttons.
 */

"use strict";
(function () {

    const main = id('main')
    const maintain = id('maintain')
    const buttons = qsa('.select');
    const playAgain = id('playAgain');
    const userPick = id('user-img')
    const computerPick = id('pc-img')
    const computerChoices = ['paper', 'rock', 'scissors', 'spock', 'lizard'];
    let userSelect = '';

    window.addEventListener("load", init);
    /**
     * Sets up event listeners for the buttons.
    */
    function init() {

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                userSelect = button.getAttribute('data-hand');
                //console.log(userSelect);
                showHide();
            });
        });
    }

    /**
       * TODO
       * function to play the game.
       * this count  
    */
    let count = 0;
    /**
     * Check if the user is win or not.
     * @param {number} result - Result of the game (Win 1),(Draw 0),(Lose -1).
     * Farha Dahman
     */
    function is_win(result) {
        if (result == 1) {
            count += 1;
            id("score").innerHTML = count;
            id("status").innerHTML = 'YOU WIN';
            Effect1();
        }
        if (result == 0) {
            id("status").innerHTML = 'DRAW';
        }
        if (result == -1) {
            count -= 1;
            id("score").innerHTML = count;
            id("status").innerHTML = 'YOU LOSE';
            Effect2();
        }
    }

    /**
     * Returns 1 if the result is win, if its tie 0, and if is lose -1.
     * @param {string} You_picked - ID of the button which the user pressed on it.
     * @param {string} House_picked - ID of the button which the host selected randomly.
     * @returns {number} - Number 1 , 0 , -1 according to the result.
     * Farha Dahman
     */

    function test_the_result(You_picked, House_picked) {

        if (You_picked == "scissors") {
            if (House_picked == "paper") { return 1; }
            else if (House_picked == "rock") { return -1; }
            else if (House_picked == "scissors") { return 0; }
            else if (House_picked == "lizard") { return 1; }
            else if (House_picked == "spock") { return -1; }
        }
        else if (You_picked == "paper") {
            if (House_picked == "scissors") { return -1; }
            else if (House_picked == "rock") { return 1; }
            else if (House_picked == "paper") { return 0; }
            else if (House_picked == "lizard") { return -1; }
            else if (House_picked == "spock") { return 1; }
        }
        else if (You_picked == "rock") {
            if (House_picked == "paper") { return -1; }
            else if (House_picked == "rock") { return 0; }
            else if (House_picked == "scissors") { return 1; }
            else if (House_picked == "lizard") { return 1; }
            else if (House_picked == "spock") { return -1; }
        }
        else if (You_picked == "lizard") {
            if (House_picked == "paper") { return 1; }
            else if (House_picked == "rock") { return -1; }
            else if (House_picked == "lizard") { return 0; }
            else if (House_picked == "scissors") { return -1; }
            else if (House_picked == "spock") { return 1; }
        }
        else if (You_picked == "spock") {
            if (House_picked == "paper") { return -1; }
            else if (House_picked == "rock") { return 1; }
            else if (House_picked == "spock") { return 0; }
            else if (House_picked == "lizard") { return -1; }
            else if (House_picked == "scissors") { return 1; }
        }
    }

    /**
     * Show the div that contains the choices.
     * Ahmad Amer
     */
    function showHide() {
        const computerChoose = getComputerchoice();
        updatemaintain(userPick, userSelect);
        updatemaintain(computerPick, computerChoose);

        let final_result = test_the_result(userSelect, computerChoose);
        is_win(final_result);
        //hide the main
        main.style.display = 'none';
        Prev.style.display = "none";
        //show the main maintain
        maintain.style.display = 'flex';

    };

    /**
    *  Random copmuter choices from 0-4
    * @returns id of House_picked
    * Ahmad Amer
    */
    function getComputerchoice() {
        //random number multiplied
        //with length of the computer choices
        let randomImg = Math.random() * computerChoices.length;
        return computerChoices[Math.floor(randomImg)];
    }

    /**
     * To hide the main screen and show the user choice.
     * @param {id} maintainElement
     * @param {id} choice
     * Ahmad Amer
     */
    function updatemaintain(maintainElement, choice) {
        //remove class
        maintainElement.classList.remove('btn-paper');
        maintainElement.classList.remove('btn-rock');
        maintainElement.classList.remove('btn-scissors');
        maintainElement.classList.remove('btn-spock');
        maintainElement.classList.remove('btn-lizard');

        let img = maintainElement.querySelector('img');
        /**
         * Enter the class list in the maintaine and change the btn-rock to btn-what ever  user or pc chooce
         * for example user chooce paper the class btn-rock will change to btn-paper
         */
        maintainElement.classList.add(`btn-${choice}`);
        //we enter the img and change it icon-rock will become icon-paper if user or pc chose paper
        img.src = `./images/icon-${choice}.svg`;
        //change the alt attribute
        img.alt = choice;
    };

    /**
     * get back to the previous page
     */
    Prev.addEventListener("click", () => {
        document.location.href = "Rules Page and game type page.html";
    })
    playAgain.addEventListener('click', () => {
        //show the main
        main.style.display = 'flex';
        //hide the maintain
        maintain.style.display = 'none';
        Prev.style.display = "block";
        id("user-img").style.boxShadow = "";
        id("pc-img").style.boxShadow = "";
    })
    /*
    show Effects on the winning photo
    Raghad Khatatba
    */
    let Effect1 = () => {
        id("user-img").style.boxShadow = "0 0 0 40px #293251 , 0 0 0 80px #232C4B , 0 0 0 130px #1E2949";
        id("user-img").style.zIndex = "-1";
        id("pc-img").style.zIndex = "1";
    }
    let Effect2 = () => {
        id("pc-img").style.boxShadow = "0 0 0 40px #293251 , 0 0 0 80px #232C4B , 0 0 0 130px #1E2949";
        id("pc-img").style.zIndex = "-1";
        id("user-img").style.zIndex = "1";
    }
    /* --- TP1 HELPER FUNCTIONS --- */

    /**
     * Returns the element that has the ID attribute with the specified value.
     * @param {string} name - element ID.
     * @returns {object} - DOM object associated with id.
     */
    function id(name) {
        return document.getElementById(name);
    }
    /**
     * Returns the element that has the ID attribute with the specified value.
     * @param {string} name - element class.
     * @returns {object} - DOM object associated with class.
     */
    function classname(name) {
        return document.getElementsByClassName(name);
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