import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DashboardOverview } from './dashboard-overview/dashboard-overview.model';
import { DashboardDetail } from './dashboard-detail/dashboard-detail.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private overview: DashboardOverview[] = [
    new DashboardOverview(
      'Total Transaksi',
      10,
      false
    ),
    new DashboardOverview(
      'Tanpa Selisih',
      150048265,
      true
    ),
    new DashboardOverview(
      'Uang Kurang',
      10048265,
      true
    ),
    new DashboardOverview(
      'Jumlah Transaksi',
      160097270,
      true
    ),
    new DashboardOverview(
      'Total Agen',
      10,
      false
    ),
    new DashboardOverview(
      'Total Selisih',
      4,
      false
    ),
    new DashboardOverview(
      'Total Tanpa Selisih',
      6,
      false
    ),
  ];

  constructor(
    private http: HttpClient
  ) { }

  getOverview() {
    return this.overview.slice();
  }

  fetchDetails() {
    return this.http.get<DashboardDetail[]>("https://backoffice-bank-mas-default-rtdb.asia-southeast1.firebasedatabase.app/dashboardDetails.json");
  }
}
