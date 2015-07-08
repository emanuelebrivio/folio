tagselect
  ul
    li.tag(each='{customers}')
      span 
        | {name}
        i.icon(onclick='{ parent.removecustomer }') &times;
    li
      input.awesomplete(type='text', name='newtag', placeholder='Add client...')

  script.
    
    var _this = this;

    this.awesomplete = new Awesomplete(_this.newtag, {
      list: ['Plastic Panda', 'UTilia', 'Hitrea', 'GSO', 'GSO L&C', 'GSO Pod', 'GSO Company'],
      filter: function (text, input) {
        return Awesomplete.FILTER_CONTAINS(text, input.match(/[^,]*$/)[0]);
      },
      replace: function(text) {
        _this.newtag.value = '';
        _this.customers.push({ name: text });
        _this.update();
      }
    });

    this.customers = [];


    removecustomer(e) {
      this.customers = _.filter(this.customers, function (c) { return c.name !== e.item.name; });
    }

    getTags() {
      return this.customers;
    }
    
    reset() {
      this.customers = [];
    }
    