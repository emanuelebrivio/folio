
riot.tag('calendar', '<div name="datepicker" class="pikaday"></div>', function(opts) {
    this.pikaday = new Pikaday({
      field: this.datepicker,
      container: this.datepicker
    });
    
    this.pikaday.hide = function() {}
    this.pikaday.show();
    
    this.getDate = function() {
      return this.pikaday.getDate();
    }.bind(this);
    
    this.reset = function() {
      this.pikaday.setDate(null);
    }.bind(this);
  
});

riot.tag('folio', '<header><a class="folio"><img src="static/img/folio-white.svg" width="60" height="25"></a> <div class="pull-left"> <button class="pure-button"><img src="static/img/button-logout.svg" width="60" height="60"></button> </div> <div class="pull-right"> <modal></modal> </div> </header> <section id="chart"> <div class="container"> <div class="ct-summary"> <p><strong>Expense Summary</strong></p> </div> <div class="ct-chart ct-area"></div> <div class="spacer-20"></div> <div class="ct-legends text-center"> <div class="ct-legend ct-legend-0"></div><span>Total expense</span> <div class="ct-legend ct-legend-1"></div><span>Billed</span> </div> </div> </section> <section id="table"> <div class="container"> <div class="spacer-40"></div> <table if="{ hasprojects }" class="pure-table"> <thead> <tr> <th style="width: 140px;">Date</th> <th>Title</th> <th style="width: 250px;">Customer</th> <th style="width: 120px;">Expense</th> <th style="width: 60px;">Billed</th> </tr> </thead> <tbody riot-tag="projects" items="{projectslist}"></tbody> </table> <div if="{ !hasprojects }"> <p>You have not added any expense yet</p> </div> <div class="spacer-40"></div> </div> </section>', function(opts) {
    this.projectslist = [ 
      {
        id: 1,
        date: new Date(),
        title: 'New PC',
        customers: [
          {name: 'Plastic Panda' }
        ],
        expense: 540.00,
        billed: true
      }, 
      {
        id: 2,
        date: new Date(),
        title: 'New Site',
        customers: [
          {name: 'UTilia HR'},
          {name: 'Hitrea'}
        ],
        expense: 540.00,
        billed: false
      }];
    
    this.on('update', function () {
      this.hasprojects = this.projectslist.length > 0;
    });
  
});

riot.tag('modal', '<button onclick="{ toggle }" class="pure-button modal-toggle"><img src="static/img/button-add.svg" width="60" height="60"></button> <section id="modal" class="{ visible: visibility, fadein: fading }"> <div class="modal"> <header class="modal-header"> <div class="pull-left"> <h1>Add expense</h1> </div> <div class="pull-right"> <button onclick="{ toggle }" class="pure-button modal-toggle"><img src="static/img/button-close.svg" width="60" height="60"></button> </div> </header> <div class="modal-body"> <form onsubmit="{ add }" class="pure-form"> <div class="padding"> <calendar inputname="date"></calendar> </div> <div class="padding"> <tagselect></tagselect> <div class="spacer-20"></div> <input type="text" name="title" placeholder="Title"> <div class="spacer-20"></div> <input type="text" name="expense" placeholder="Expense"> <div class="spacer-20"></div> <button type="submit" class="primary"><span>Add to list</span></button> </div> </form> </div> </div> </section>', function(opts) {
    this.visibility = opts.show;
    this.fading = opts.show;
    
    this.toggle = function() {
      if (this.visibility) {

        this.fading = false;
        
        var _this = this;
        setTimeout(function () {
          _this.visibility = false;
          _this.update();
          _this.reset();
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
    
    this.reset = function() {
      this.title.value = '';
      this.expense.value = '';
      this.tags.tagselect.reset();
      this.tags.calendar.reset();
    }.bind(this);
    
    this.add = function() {
      if (this.tags.calendar.getDate() == '' || !this.title.value || this.tags.tagselect.getTags().length == 0 || !this.expense.value) {
        console.log('Missing some fields...');
        return false;
      }
    
      var toadd = {
        id: new Date(),
        date: this.tags.calendar.getDate(),
        title: this.title.value,
        customers: this.tags.tagselect.getTags(),
        expense: this.expense.value,
        billed: false
      };
    
      this.parent.projectslist.push(toadd);
      this.parent.projectslist.sort(function(a,b) { return (a.date < b.date) ? 1 : ((b.date < a.date) ? -1 : 0); } );
      
      this.parent.update();
      this.toggle();
      
    }.bind(this);
  
});

riot.tag('projects', '<tr each="{ projectslist }"> <td class="date">{ moment(date).format(\'ddd, DD MMMM YYYY\') } </td> <td>{ title }</td> <td><span data-cli="{ name }" each="{ customers }" class="client { selected: checkStatus }">{ name }</span></td> <td>{ expense }</td> <td> <div data-id="{ id }" onclick="{ parent.toggleBill }" class="switch { billed: billed }"> <div class="switch-container"><span></span></div> </div> </td> </tr>', function(opts) {
    this.projectslist = opts.items;
    
    this.toggleBill = function(e) {
      e.item.billed = !e.item.billed;
    }.bind(this);
  
});

riot.tag('tagselect', '<ul> <li each="{customers}" class="tag"><span> {name}<i onclick="{ parent.removecustomer }" class="icon">&times;</i></span></li> <li> <input type="text" name="newtag" placeholder="Add client..." class="awesomplete"> </li> </ul>', function(opts) {
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
    
    
    this.removecustomer = function(e) {
      this.customers = _.filter(this.customers, function (c) { return c.name !== e.item.name; });
    }.bind(this);
    
    this.getTags = function() {
      return this.customers;
    }.bind(this);
    
    this.reset = function() {
      this.customers = [];
    }.bind(this);
  
});