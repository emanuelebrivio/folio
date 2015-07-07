projects
  
  table.pure-table(if='{hasPrjs}')
    thead
      tr
        th(style='width: 80px;') Date
        th Title
        th(style='width: 250px;') Customer
        th(style='width: 120px;') Expense
        th(style='width: 60px;') Billed
    tbody

      tr(each='{prjs}')
        td.date {date} 
        td {title}
        td
          span.client(data-cli='{name}', each='{customers}', onclick='{parent.parent.clientClick}', class='{selected: checkStatus}') {name}
        td {expense}
        td
          .switch(data-id='{id}', class='{billed: billed}', onclick='{parent.toggleBill}')
            .switch-container
              span

  div.alert(if='{!hasPrjs}')
    p 0 items

  script.
    this.prjs = opts.items;
    this.hasPrjs = this.prjs.length !== 0;
    this.clicked = '';

    toggleBill(e) {
      e.item.billed = !e.item.billed;
    }

    clientClick(e) {

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

      /*
      var wasSelected = this.classList.contains('selected');  
      
      
      
      if (!wasSelected) {
        document.querySelectorAll('#table .client[data-cli="' + me + '"]').forEach(function (c) {
          c.classList.add('selected');
        });
      } else if (ctrlKey) {
        document.querySelectorAll('#table .client[data-cli="' + me + '"]').forEach(function (c) {
          c.classList.remove('selected');
        });
      }
      
      filterTable();
      */

    }


//-
  var clients = document.querySelectorAll('#table .client');
  if (clients) {
  
    clients.on('click', function (e) {
      var ctrlKey = e.ctrlKey || e.shiftKey;
      var me = this.getAttribute('data-cli');
      var wasSelected = this.classList.contains('selected');  
      
      if (!ctrlKey) {
        document.querySelectorAll('#table .client.selected').forEach(function (c) {
          c.classList.remove('selected');
        });
      }
      
      if (!wasSelected) {
        document.querySelectorAll('#table .client[data-cli="' + me + '"]').forEach(function (c) {
          c.classList.add('selected');
        });
      } else if (ctrlKey) {
        document.querySelectorAll('#table .client[data-cli="' + me + '"]').forEach(function (c) {
          c.classList.remove('selected');
        });
      }
      
      filterTable();
      
    });
  
  }
  
  
  var filterTable = function () {
  
    if (document.querySelectorAll('#table tbody tr .selected').length > 0) {
      document.querySelectorAll('#table tbody tr').forEach(function (tr) {

        if (tr.querySelectorAll('.client.selected').length === 0) {
          tr.classList.add('fadeout');
        } else {
          tr.classList.remove('fadeout');
        }

      });
    } else {
      document.querySelectorAll('#table tbody tr').forEach(function (tr) {
        tr.classList.remove('fadeout');
      });
    }
  
  };

