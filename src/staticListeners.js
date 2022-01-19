//Load dom and logic modules
const dom = require('./dom.js');
const logic = require('./logic.js');

const staticListeners = (() => {

    const init = function() {
        //console.log('static listeners init');
        this.searchBtnListener();
        //Put initial load up here to feed logic data to dom. maybe

    }

    const searchBtnListener = function() {
        document.getElementById('searchBtn').addEventListener('click',function(){
            //trigger logic function that searches city
           let userInput = document.getElementById('userInput').value;

           if (!userInput) {
               console.log('blank');
           } else {
               if (document.getElementById('cardsContainer')) {
                   //clear div
                   document.getElementById('cardsContainer').innerHTML = '';
                   logic.getData(userInput);
                   document.getElementById('userInput').focus();
               }
               else {
                logic.getData(userInput);
                document.getElementById('userInput').focus();
               }
               
           }
        })
    }

    return {
        init,
        searchBtnListener,
    }


})();

module.exports = staticListeners;