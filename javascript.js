"use strict";
(function () {
    window.addEventListener("load", init);
    function init() {
        let page = document.body.id;
        switch (page) {
            case "body1":
                let body = Id("body1");
                body.addEventListener("click", (eo) => {
                    switch (eo.target.className) {
                        case "but1": document.location.href = "Rules Page and game type page.html";
                            break;
                        case "but2": document.location.href = "Rules Page.html";
                            break;
                        case "but3":
                            window.open('', '_parent', '');
                            window.close();
                            break;
                    }
                })
                let soundbutton = qs(".soundbutton");
                soundbutton.addEventListener("click", () => {
                    soundbutton.classList.toggle("soundbutton2");
                })
                break;
            case "body2":
                let Prev = Id("Prev");
                Prev.addEventListener("click", () => {
                    document.location.href = "FirstBage.html";
                })
                Id("FirstLevel").addEventListener("click",()=>{
                    document.location.href="rock-paper-scissors.html";
                })
                break;
            case "body3":
                let Prev1 = Id("Prev1");
                let Rules1 = Id("Rules1");
                let Rules2 = Id("Rules2");
                Rules1.addEventListener("click", () => {
                    document.location.href = "rules1 page.html";
                })
                Rules2.addEventListener("click", () => {
                    document.location.href = "rule2 pages.html";
                })
                Prev1.addEventListener("click", () => {
                    document.location.href = "FirstBage.html";
                })
                break;
            case "body4":
                let buttonX = Id("buttonX");
                buttonX.addEventListener("click", () => {
                    document.location.href = "Rules Page.html";
                })
                break;
            case "body5":
                let buttonX2 = Id("buttonX2");
                buttonX2.addEventListener("click", () => {
                    document.location.href = "Rules Page.html";
                })
                break;
        }
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

