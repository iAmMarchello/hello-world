# hello-world
This is a test repository where I will store random ideas.


// This is a form template that can be used in angular to extract individual field values

<form #f="ngForm"  (ngSubmit)="onSubmit(f.value)" >
  <div class='form-group'>
    <!-- Name Field -->
    <label for="skuInput">Name:</label>
    <input class='form-control' type="text" id="skuInput" placeholder="Enter name here..." name="userName" ngModel>
    <!-- Email Field (notice the name attribute specified by input tag will be used to extract the value -->          
    <label for="skuInput">Email:</label>
    <input class='form-control' type="email" id="skuInput" placeholder="E.g don.jones143@gmail.com" name="userEmail" ngModel>
  </div>
  <button type="submit" class="btn btn-default">Submit</button> 
</form>

<!-- This is where you specify the class so that you can extract values from the form -->

export class DemoForm{
  onSubmit(form: any): void {
    console.log("Extraction of name value: ", form.userName);
    console.log("Extraction of email value: ", form.userEmail);
  }
}
