import { CovidService } from '../service/covid.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private covidService: CovidService) {}

  data: any;

  ngOnInit(): void {
    this.covidService.getCovid().subscribe((data: any) => {

      data.Countries.map((nActive: any) => nActive.Premium.active = nActive.TotalConfirmed - nActive.TotalRecovered)

      this.data = data.Countries.sort(function (a: any, b: any) {
        if (a.Premium.active < b.Premium.active) {
          return 1;
        }
        if (a.Premium.active > b.Premium.active) {
          return -1;
        }
        return 0;
      });
    });
  }
}
