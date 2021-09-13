import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '@app/services/title.service';
import {
  IBarChartOptions,
  IChartistAnimationOptions,
  IChartistData,
  ILineChartOptions,
} from 'chartist';
import { ChartEvent, ChartType } from 'ng-chartist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  firstRow = [
    {
      subtitle: 'Used Space',
      title: '49/50 GB',
      headerIcon: 'content_copy',
      headerIconColor: 'bg-yellow-500',
      footerText: 'Get More Space',
      footerIcon: 'warning',
      footerIconColor: 'text-red-600',
    },
    {
      subtitle: 'Revenue',
      title: '$34,245',
      headerIcon: 'store',
      headerIconColor: 'bg-green-500',
      footerText: 'Last 24 Hours',
      footerIcon: 'date_range',
      footerIconColor: 'text-gray-400',
    },
    {
      subtitle: 'Fixed Issues',
      title: '75',
      headerIcon: 'info',
      headerIconColor: 'bg-red-500',
      footerText: 'Tracked from Github',
      footerIcon: 'local_offer',
      footerIconColor: 'text-gray-400',
    },
    {
      subtitle: 'Followers',
      title: '+245',
      headerIcon: 'fitbit',
      headerIconColor: 'bg-cyanBlue-500',
      footerText: 'Just Updated',
      footerIcon: 'update',
      footerIconColor: 'text-gray-400',
    },
  ];
  type: ChartType = 'Line';
  data1: IChartistData = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', ''],
    series: [[10, 15, 5, 15, 20, 12, 30]],
  };
  data2: IChartistData = {
    labels: ['J', 'F', 'W', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    series: [[500, 400, 300, 600, 550, 420, 300, 400, 450, 500, 550, 600]],
  };
  data3: IChartistData = {
    labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a', ''],
    series: [[150, 600, 400, 300, 200, 150, 120, 110]],
  };
  options: ILineChartOptions = {
    axisX: {
      showGrid: true,
    },
    fullWidth: true,
    low: 0,
    high: 40,
    height: 150,
    width: 480,
  };

  options3: ILineChartOptions = {
    axisX: {
      showGrid: true,
    },
    fullWidth: true,
    low: 0,
    high: 800,
    height: 150,
    width: 480,
  };
  constructor(private titleService: PageTitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Dashboard');
  }
}
