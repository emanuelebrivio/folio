calendar
  div.pikaday(name='datepicker')

  script.
    this.pikaday = new Pikaday({
      field: this.datepicker,
      container: this.datepicker
    });

    this.pikaday.hide = function() {}
    this.pikaday.show();
    
    getDate() {
      return this.pikaday.getDate();
    }
    
    reset() {
      this.pikaday.setDate(null);
    }
    