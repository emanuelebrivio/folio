
riot.tag('plist', '<table class="pure-table"> <thead> <tr> <th style="width: 80px;">Date</th> <th>Title</th> <th style="width: 250px;">Customer</th> <th style="width: 120px;">Expense</th> <th style="width: 60px;">Billed</th> </tr> </thead> <tbody> <projects></projects> </tbody> </table>', function(opts) {
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
    
    riot.mount('projects', { items: this.projectslist });
  
});