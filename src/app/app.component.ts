import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { PieChart } from 'echarts/charts';
import { LegendComponent, TitleComponent, TooltipComponent } from 'echarts/components';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  readonly echartsExtentions;
  echartsOptions: EChartsOption = {};
  constructor () {
    this.echartsExtentions = [PieChart, TitleComponent, TooltipComponent, LegendComponent];
  }
  ngOnInit(): void {
    this.echartsOptions = {
      title: {
        text: 'Spending my time',
        subtext: 'Fake Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Time',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 980, name: 'Youtube' },
            { value: 501, name: 'Writing blog' },
            { value: 100, name: 'Watch TDD' },
            { value: 200, name: 'C# source generator' },
            { value: 250, name: 'Play Valorant' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  }
}
