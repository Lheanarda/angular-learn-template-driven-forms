import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild ('f',{static:true}) signupForm:NgForm;
  defaultQuestion = 'pet';
  answer:string = "";
  genders=['male','female'];
  user={
    userData:{
      username:'aaa',
      email:'aaa',
    },
    secretQuestion:'aaa',
    answer:'',
    gender:''
  }
  submitted:boolean= false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData:{
    //     username: suggestedName,
    //     email:''
    //   },
    //   secret:'pet',
    //   questionAnswers:'',
    //   gender:'male'
    // });

    this.signupForm.form.patchValue({
      userData:{
        username:suggestedName
      }
    });
  }

  // onSubmit(form: NgForm){
  //   console.log(form)
  // }
  onSubmit(){
    console.log(this.signupForm);
    this.user.userData.username = this.signupForm.value.userData.username;
    this.user.userData.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.gender = this.signupForm.value.gender;
    this.user.answer = this.signupForm.value.questionAnswers;

    this.submitted = true;

    this.signupForm.reset();  
  }
}
