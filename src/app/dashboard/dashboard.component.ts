import { Component, OnInit } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  allowedFormats = [BarcodeFormat.QR_CODE]
  scan = false

  constructor() { }

  ngOnInit(): void {}

  scanSuccessHandler(event: any){

  }

}
