calendar
  div.pikaday(name='datepicker')

  script.
    this.pikaday = new Pikaday({
      field: this.datepicker,
      container: this.datepicker,
      format: 'ddd, DD MMMM YYYY'
    });

    this.pikaday.hide = function() {}
    this.pikaday.show();
    
    getDate() {
      return this.pikaday.toString();
    }
    
    reset() {
      this.pikaday.setDate(null);
    }
    