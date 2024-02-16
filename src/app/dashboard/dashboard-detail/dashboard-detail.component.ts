import { Component, OnInit } from '@angular/core';
import { DashboardDetail } from './dashboard-detail.model';
import { DashboardService } from '../dashboard.service';

interface RekonFilter{
  option: string;
}

@Component({
  selector: 'app-dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrl: './dashboard-detail.component.css'
})
export class DashboardDetailComponent implements OnInit {
  filterBar: boolean = false;
  agentIdFilter: string;
  rekonFilter: RekonFilter[];
  selectedRekonFilter: RekonFilter;

  details: DashboardDetail[];
  filteredDetails: DashboardDetail[];

  isDate(value: any): boolean {
    return value instanceof Date && !isNaN(value.valueOf());
  }

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.rekonFilter = [
      { option: 'Tanpa Selisih'},
      { option: 'Selisih'}
    ];

    this.getData()
  }

  private getData() {
    this.dashboardService.fetchDetails().subscribe(
      res => {
        this.details = res
      }
    )
  }

  applyFilter() {
    if (!this.agentIdFilter && !this.selectedRekonFilter) {
      this.getData();
      return;
    } else {
      this.dashboardService.fetchDetails().subscribe(
        res => {
          this.details = res.filter(data => {
            const idMatch = !this.agentIdFilter || data.agentId.includes(this.agentIdFilter);
            const rekonMatch = !this.selectedRekonFilter || data.depoStatus === this.selectedRekonFilter.option;

            return idMatch && rekonMatch;
          })
        }
      );
    };
  }

  closeData(index) {
    this.details[index].isOpen = false
  }
}
