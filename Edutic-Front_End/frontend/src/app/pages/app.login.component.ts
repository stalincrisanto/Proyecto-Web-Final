import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { LoginService } from '../servicios/login/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './app.login.component.html',
})
export class AppLoginComponent implements OnInit {

  itemForm: FormGroup;
  rolUsuario:''

  constructor(private formBuilder:FormBuilder,private loginService:LoginService,private router:Router) {
    
  }
  ngOnInit(): void {
    this.buidForm();
  }
  private buidForm(){

    this.itemForm=this.formBuilder.group({
      username:[''],
      password:['']
    })
  }
  private login(){
    let data = this.itemForm.value
    console.log(data.username)

    let usuario={username:'',
                 password:''   
  }
    usuario.username=data.username
    usuario.password=data.password
    
    this.loginService.loginEdutic(usuario).subscribe((result)=>{

      localStorage.setItem('usuario',JSON.stringify(result)); 

      this.router.navigate(['/edutic'])

      console.log(result);
    })
  }


}
