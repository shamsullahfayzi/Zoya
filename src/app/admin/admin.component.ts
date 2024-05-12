import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule, MatNavList } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';

// import * as apex from "apexcharts";
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { UserService } from '../service/user.service';
export type ChartOptions = {
  series: any;
  chart: any;
  responsive: any;
  labels: any;
  stroke: any;
  fill: any;
  dataLabels: any;
  xaxis: any;
  grid: any;
  title: any

};
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  standalone: true,
  imports: [MatIconModule, MatSidenavModule, MatSidenavModule, MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    RouterOutlet,
    MatListModule,
    NgApexchartsModule,
    MatCardModule,
    RouterLink
  ]
})

export class AdminComponent {
  @ViewChild("chart")
  chart!: ChartComponent;
  public sales: Partial<ChartOptions>;
  public weekSales: Partial<ChartOptions>;
  @ViewChild(MatSidenav)

  sidenav!: MatSidenav;
  isMobile = true;
  isCollapsed = true;

  constructor(private observer: BreakpointObserver, private _user: UserService) {
    this.weekSales = {
      series: [
        {
          name: "Hair Transplant",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Confirmed patients this week",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "M",
          "T",
          "W",
          "T",
          "F",
          "S",
          "S",
        ]
      }
    };

    this.sales = {
      series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
      chart: {
        type: "polarArea"
      },
      stroke: {
        colors: ["#fff"]
      },
      fill: {
        opacity: 0.8
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
  isAdmin = false;

  ngOnInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if (screenSize.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
    this.isAdmin = this._user.roleMatch('admin')
  }
  toggleMenu() {
    if (this.isMobile) {
      this.sidenav.toggle();
      this.isCollapsed = false; // On mobile, the menu can never be collapsed
    } else {
      this.sidenav.open(); // On desktop/tablet, the menu can never be fully closed
      this.isCollapsed = !this.isCollapsed;
    }
  }


  initCharts() {
    // Hardcoded chart data (replace with real data from API)

    // Render charts using charting library of your choice (e.g., Chart.js, ngx-charts)
    // Example:
    // this.renderChart1(chartData1);
    // this.renderChart2(chartData2);
  }
}
