import { Component, OnDestroy, OnInit } from '@angular/core';
import { SunService } from 'src/services/sun.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {
  hour: number = 0;
  isSunny: boolean;
  constructor(private sunService: SunService) {}
  ngOnInit(): void {
    this.sunService.hourObservable.subscribe((value) => {
      if (value) {
        this.hour = value;
        this.isSunny = this.sunService.getSunStatus();
      }
    })
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
