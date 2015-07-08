folio
  header
    a.folio
      img(src='static/img/folio-white.svg', width='60', height='25')

    .pull-left
      button.pure-button
        img(src='static/img/button-logout.svg', width='60', height='60')

    .pull-right
      modal

  section#chart
    .container
      .ct-summary
        p: strong Expense Summary
      .ct-chart.ct-area
      .spacer-20
      .ct-legends.text-center
        .ct-legend.ct-legend-0
        span Total expense
        .ct-legend.ct-legend-1
        span Billed

  section#table
    .container
      .spacer-40
      
      table.pure-table(if='{ hasprojects }')
        thead
          tr
            th(style='width: 80px;') Date
            th Title
            th(style='width: 250px;') Customer
            th(style='width: 120px;') Expense
            th(style='width: 60px;') Billed

        tbody(riot-tag='projects', items='{projectslist}')
      
      div(if='{ !hasprojects }')
        p You have not added any expense yet

      .spacer-40
  
  
  script.
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