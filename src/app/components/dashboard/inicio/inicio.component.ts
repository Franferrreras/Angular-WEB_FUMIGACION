import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  loading = false;
  //Constructor
  constructor(private fb: FormBuilder, private httpclient:HttpClient, private router: Router) { 
  
  }
  ngOnInit(): void {
  }

  fakeLoading() {
    this.loading = true;
    setTimeout(() => {
      // this.router.navigate(['dashboard']);
      this.loading = false;
    }, 1500);
  }
  
//Enviar email usando node.js
  // constructor(private fb: FormBuilder, private httpclient:HttpClient) { 
  //   this.dataClient = this.fb.group({
  //     name: ['', Validators.required],
  //     phone: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     mensaje: ['', Validators.required]
  //   })

  // sendMail() {
  //   let params = {
  //     email:'franferreraszl@gmail.com',
  //     asunto: 'FumigacionSevilla',
  //     mensaje: 'Nombre: ' + this.dataClient.value.email + '\n' + 'Telefono: ' + this.dataClient.value.phone
  //       + '\n' + 'Email: ' + this.dataClient.value.email 
  //       + '\n' + 'Mensaje: ' + this.dataClient.value.mensaje
  //   }

  //   console.log(params);
  //   this.httpclient.post('http://localhost:3000/sendMail',params).subscribe(resp=>{
  //     console.log(resp)
  //   })
  // }
}
