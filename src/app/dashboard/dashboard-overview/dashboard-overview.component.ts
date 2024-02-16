import { Component, OnInit } from '@angular/core';
import { DashboardOverview } from './dashboard-overview.model';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-overview',
  templateUrl: './dashboard-overview.component.html',
  styleUrl: './dashboard-overview.component.css'
})
export class DashboardOverviewComponent implements OnInit {
  overview: DashboardOverview[];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.overview = this.dashboardService.getOverview();
  }
}
