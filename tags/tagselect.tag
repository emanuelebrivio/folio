tagselect
  ul
    li.tag(each='{customers}')
      span {name}
    li
      input.awesomplete(type='text', name='newtag', placeholder='Add client...')

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
        _this.customers.push({ name: text });
        _this.update();
      }
    });

    this.customers = [];


    getTags() {
      return this.customers;
    }
    
    reset() {
      this.customers = [];
    }
    