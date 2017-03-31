import { Component } from '@angular/core';

@Component({
  selector  : 'demoForm',
  template  : `
    <div>
      <h2 >Demo Form: Sku</h2>
        <form #f="ngForm"  (ngSubmit)="onSubmit(f.value)" >
          <div class='form-group'>
            <label for="skuInput">Name:</label>
            <input class='form-control' type="text" id="skuInput" placeholder="Enter name here..." name="userName" ngModel>
            
            <label for="skuInput">Email:</label>
            <input class='form-control' type="email" id="skuInput" placeholder="E.g don.jones143@gmail.com" name="userEmail" ngModel>
          </div>
         <button type="submit" class="btn btn-default">Submit</button>
        </form>
    </div>
  `
})

export class DemoForm{
  onSubmit(form : any): void{
    console.log("you submitted value: ", form);
    document.write("This is the name field: ", form.userName);
    document.write("This is the email field: ",form.userEmail);
  }
}
