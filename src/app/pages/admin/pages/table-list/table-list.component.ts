import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '@app/services/title.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss'],
})
export class TableListComponent implements OnInit {
  constructor(private titleService: PageTitleService) {
    this.titleService.setTitle('Table list');
  }

  displayedColumns: string[] = ['id', 'name', 'country', 'city', 'salary'];
  dataSource = [
    {
      id: 1,
      name: 'Calv Bleacher',
      country: 'Japan',
      city: 'Toba',
      salary: '$72836.03',
    },
    {
      id: 2,
      name: 'Maitilde Gillivrie',
      country: 'Czech Republic',
      city: 'Hrob',
      salary: '$75832.83',
    },
    {
      id: 3,
      name: 'Renell Hedingham',
      country: 'Sweden',
      city: 'Kista',
      salary: '$61660.70',
    },
    {
      id: 4,
      name: 'Gus Monckman',
      country: 'Brazil',
      city: 'Barra Velha',
      salary: '$79832.82',
    },
    {
      id: 5,
      name: 'Bertrando Gheraldi',
      country: 'China',
      city: 'Altay',
      salary: '$59653.54',
    },
    {
      id: 6,
      name: 'Phillis Tenby',
      country: 'Indonesia',
      city: 'Cinunjang',
      salary: '$68020.40',
    },
  ];

  ngOnInit(): void {}
}
