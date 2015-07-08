
riot.tag('calendar', '<input type="hidden" name="date"> <div name="datepicker" class="pikaday"></div>', function(opts) {
    var _this = this;
    
    var datePicker = new Pikaday({
      field: _this.datepicker,
      container: _this.datepicker,
      format: 'dddd, DD MMMM YYYY',
      onSelect: function(date) {
        _this.date.value = datePicker.toString();
      }
    });
    
    datePicker.hide = function() {}
    datePicker.show();
  
});