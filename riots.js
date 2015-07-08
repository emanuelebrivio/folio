
riot.tag('modal', '<div class="modal"> <header class="modal-header"> <div class="pull-left"> <h1>Add expense</h1> </div> <div class="pull-right"> <button class="pure-button modal-toggle"><img src="static/img/button-close.svg" width="60" height="60"></button> </div> </header> <div class="modal-body"> <form class="pure-form"> <div class="padding"> <input id="datepicker-input" type="hidden" name="date"> <div id="datepicker"></div> </div> <div class="padding"> <input type="text" name="customers" placeholder="Customers"> <div class="spacer-20"></div> <input type="text" name="title" placeholder="Title"> <div class="spacer-20"></div> <input type="text" name="expense" placeholder="Expense"> <div class="spacer-20"></div> <button type="submit" class="primary"><span>Add to list</span></button> </div> </form> </div> </div>', function(opts) {

});

riot.tag('projects', '<tr each="{projects}"> <td class="date">{date} </td> <td>{title}</td> <td><span data-cli="{name}" each="{customers}" class="client {selected: checkStatus}">{name}</span></td> <td>{expense}</td> <td> <div data-id="{id}" onclick="{parent.toggleBill}" class="switch {billed: billed}"> <div class="switch-container"><span></span></div> </div> </td> </tr>', function(opts) {
    this.projects = opts.items;
    
    this.toggleBill = function(e) {
      e.item.billed = !e.item.billed;
    }.bind(this);
  
});