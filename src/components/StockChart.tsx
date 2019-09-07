import * as React from 'react';
import * as Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const options: any = {
  title: {
    text: 'My stock chart'
  },
  series: [
    {
      data: [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7]
    }
  ]
};

const MyStockChart = () => (
  <HighchartsReact
    highcharts={Highcharts}
    constructorType={'stockChart'}
    options={options}
  />
);

export default MyStockChart;
