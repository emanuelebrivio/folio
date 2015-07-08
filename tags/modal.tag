modal
  button.pure-button.modal-toggle(onclick='{ toggle }')
    img(src='static/img/button-add.svg', width='60', height='60')
  
  section#modal(class='{ visible: visibility, fadein: fading }')
    .modal
      header.modal-header
        .pull-left
          h1 Add expense

        .pull-right
          button.pure-button.modal-toggle(onclick='{ toggle }')
            img(src='static/img/button-close.svg', width='60', height='60')

      .modal-body
        form.pure-form(onsubmit='{ add }')
          .padding
            calendar

          .padding
            input(type='text', name='customers', placeholder='Customers')
            .spacer-20
            input(type='text', name='title', placeholder='Title')
            .spacer-20
            input(type='text', name='expense', placeholder='Expense')
            .spacer-20
            button.primary(type='submit')
              span Add to list

  script.
    this.visibility = opts.show;
    this.fading = opts.show;
    
    toggle(e) {
      if (this.visibility) {
        // Hide
        this.fading = false;
        
        var _this = this;
        setTimeout(function () {
          _this.visibility = false;
          _this.update();
        }, 500);
        
      } else {
        // Show
        this.visibility = true;
        
        var _this = this;
        setTimeout(function () {
          _this.fading = true;
          _this.update();
        }, 10);
      }
    }
    
    add(e) {
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
      
      //parent.projects.push(toadd);
      
      console.log(parent.projects);
      
    }
