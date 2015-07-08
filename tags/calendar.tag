calendar
  div.pikaday(name='datepicker')

  script.
    var datePicker = new Pikaday({
      field: this.datepicker,
      container: this.datepicker,
      format: 'dddd, DD MMMM YYYY'
    });
    
    datePicker.hide = function() {}
    datePicker.show();
    
    getDate() {
      return datePicker.toString();
    }