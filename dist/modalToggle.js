
var ModalMixins = {
  init: function() {
    this.on('updated', function() { console.log('Updated!') })
  },
 
  toggleModal: function() {
    this.visibility = !this.visibility;
  }
}
riot.tag('modalToggle', '<button onclick="{ toggle }" class="pure-button modal-toggle"><img src="static/img/button-add.svg" width="60" height="60"></button>', function(opts) {
    this.mixin('ModalMixins');
    
    this.toggle = function(e) {
      this.toggleModal();
    }.bind(this);
  
});