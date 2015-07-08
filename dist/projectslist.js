
riot.tag('projectslist', '<tr each="{pjs}"> <td class="date">{date} </td> <td>{title}</td> <td><span data-cli="{name}" each="{customers}" class="client {selected: checkStatus}">{name}</span></td> <td>{expense}</td> <td> <div data-id="{id}" onclick="{parent.toggleBill}" class="switch {billed: billed}"> <div class="switch-container"><span></span></div> </div> </td> </tr>', function(opts) {
    this.pjs = opts.items;
    
    console.log(opts);
    
    this.toggleBill = function(e) {
      e.item.billed = !e.item.billed;
    }.bind(this);
  
});