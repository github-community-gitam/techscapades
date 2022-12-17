import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formData = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void { }

  allowedUsers = ["test1", "test2", "test3", "test4", "test5"]

  login() {
    if (!this.formData.valid) {
      alert('Fill all the credentials')
    } else if (!this.allowedUsers.includes(this.formData.controls.username.value as string)) {
      alert('Accessible only on event day')
    } else {
      this.http.post(environment.endpoint + '/login', this.formData.value).subscribe((res: any) => {
        if (res.status) {
          localStorage.setItem('username', this.formData.controls.username.value as string)
          localStorage.setItem('password', this.formData.controls.password.value as string)
          this.router.navigate(['/dashboard'])
          alert('User authenticated successfully')
        } else {
          alert('User not found')
        }
      })
    }
  }

}
