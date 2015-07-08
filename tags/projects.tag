projects
  tr(each='{projects}')
    td.date {date} 
    td {title}
    td
      span.client(data-cli='{name}', each='{customers}', class='{selected: checkStatus}') {name}
    td {expense}
    td
      .switch(data-id='{id}', class='{billed: billed}', onclick='{parent.toggleBill}')
        .switch-container
          span

  script.
    this.projects = opts.items;

    toggleBill(e) {
      e.item.billed = !e.item.billed;
    }
