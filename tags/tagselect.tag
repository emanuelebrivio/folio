tagselect
  ul
    li.tag(each='{customers}')
      span {client}
    li
      input(type='text', name='newtag', placeholder='eg: Plastic Panda')

  script.
    
    var _this = this;

    this.awesomplete = new Awesomplete(_this.newtag, {
      list: ['Plastic Panda', 'UTilia', 'Hitrea'],
      filter: function (text, input) {
        return Awesomplete.FILTER_CONTAINS(text, input.match(/[^,]*$/)[0]);
      },
      replace: function(text) {
        console.log(text);
        _this.newtag.value = '';
        _this.customers.push({ client: text });
        _this.update();
      }
    });

    this.customers = [];


    getTags() {
      return [];
    }
    
    reset() {
      return;
    }
    