
riot.tag('projects', '<table if="{hasPrjs}" class="pure-table"> <thead> <tr> <th style="width: 80px;">Date</th> <th>Title</th> <th style="width: 250px;">Customer</th> <th style="width: 120px;">Expense</th> <th style="width: 60px;">Billed</th> </tr> </thead> <tbody> <tr each="{prjs}"> <td class="date">{date} </td> <td>{title}</td> <td><span data-cli="{name}" each="{customers}" onclick="{parent.parent.clientClick}" class="client {selected: checkStatus}">{name}</span></td> <td>{expense}</td> <td> <div data-id="{id}" onclick="{parent.toggleBill}" class="switch {billed: billed}"> <div class="switch-container"><span></span></div> </div> </td> </tr> </tbody> </table> <div if="{!hasPrjs}" class="alert"> <p>0 items</p> </div>', function(opts) {
    this.prjs = opts.items;
    this.hasPrjs = this.prjs.length !== 0;
    this.clicked = '';
    
    this.toggleBill = function(e) {
      e.item.billed = !e.item.billed;
    }.bind(this);
    
    this.clientClick = function(e) {
    
      var ctrlKey = e.ctrlKey || e.shiftKey;
      var me = e.item;
    
    
      if (!ctrlKey) {
        this.clicked = '';
      }
    
      if (this.clicked.indexOf('###' + me.name) === -1) {
        this.clicked += '###' + me.name;
        me.checkStatus = true;
      } else if (ctrlKey) {
        this.clicked.replace('###' + me.name, '');
        me.checkStatus = false;
      }
    
      
    
    }.bind(this);
    
    
  
});