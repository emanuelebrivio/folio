/*jshint browser:true, indent:2, laxcomma:true, loopfunc: true */
/*global NodeList, HTMLCollection */

(function () {

  'use strict';
  
  var modalToggle = document.querySelectorAll('.modal-toggle');
  if (modalToggle) {
    modalToggle.on('click', function () {
      
      var dataModal = this.getAttribute('data-modal');
      var modal = document.getElementById('modal');
      
      if (dataModal === 'open' || !modal.classList.contains('visible')) {
        modal.classList.add('visible');
        setTimeout(function () {
          modal.classList.add('fadein');
        }, 5);
      } else if (dataModal === 'close' || modal.classList.contains('visible')) {
        modal.classList.remove('fadein');
        setTimeout(function () {
          modal.classList.remove('visible');
        }, 500);
      }
      
    });
  }
  

})();