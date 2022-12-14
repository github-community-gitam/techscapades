import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeFormat } from '@zxing/library';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  allowedFormats = [BarcodeFormat.QR_CODE]
  scan = true
  team_name = ''
  total_points = ''
  progress = ''

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.post('https://TreasureHunt.supersum4n.repl.co/team', { 'username': localStorage.getItem('username') }).subscribe((res: any) => {
      this.team_name = res.team_name
      this.total_points = (parseInt(res.questions) * 10).toString()
      this.progress = ((parseInt(res.questions) / 10) * 100).toString()
    })
  }

  scanSuccessHandler(data: any) {
    this.scan = false
    const question = JSON.parse(window.atob(data)).question

    console.log(question)
  }

  logout() {
    localStorage.removeItem('username')
    localStorage.removeItem('password')
    this.router.navigate(['login'])
  }
}
