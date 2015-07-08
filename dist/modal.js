
riot.tag('modal', '<button onclick="{ toggle }" class="pure-button modal-toggle"><img src="static/img/button-add.svg" width="60" height="60"></button> <section id="modal" class="{ visible: visibility, fadein: fading }"> <div class="modal"> <header class="modal-header"> <div class="pull-left"> <h1>Add expense</h1> </div> <div class="pull-right"> <button onclick="{ toggle }" class="pure-button modal-toggle"><img src="static/img/button-close.svg" width="60" height="60"></button> </div> </header> <div class="modal-body"> <form onsubmit="{ add }" class="pure-form"> <div class="padding"> <calendar></calendar> </div> <div class="padding"> <input type="text" name="customers" placeholder="Customers"> <div class="spacer-20"></div> <input type="text" name="title" placeholder="Title"> <div class="spacer-20"></div> <input type="text" name="expense" placeholder="Expense"> <div class="spacer-20"></div> <button type="submit" class="primary"><span>Add to list</span></button> </div> </form> </div> </div> </section>', function(opts) {
    this.visibility = opts.show;
    this.fading = opts.show;
    
    this.toggle = function(e) {
      if (this.visibility) {

        this.fading = false;
        
        var _this = this;
        setTimeout(function () {
          _this.visibility = false;
          _this.update();
        }, 500);
        
      } else {

        this.visibility = true;
        
        var _this = this;
        setTimeout(function () {
          _this.fading = true;
          _this.update();
        }, 10);
      }
    }.bind(this);
    
    this.add = function(e) {
      var toadd = {
        id: new Date(),
        date: new Date(),
        title: this.title,
        customers: [
          { name: 'Plastic Panda' }
        ],
        expense: this.expense,
        billed: false
      };

      
      console.log(parent.projects);
      
    }.bind(this);
  
});