import React from "react";
import ReactApexChart, { ApexOptions } from "apexcharts";
import Chart from 'react-apexcharts';
import dayjs from 'dayjs'

type MonitorData = {
  temp: number[],
  w_temp: number[],
  illum: number[],
  created_at: Date[]
};

const DeviceChart: React.FC<{data: MonitorData}> = ({data}) => {
  const optionMainLine: ApexOptions = {
    chart: {
      id: 'chart1',
      type: 'line',
      height: 230,
      toolbar: {
        autoSelected: 'pan',
        show: false
      }
    },
    colors: ['#546E7A'],
    stroke: {
      width: 3
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 1,
    },
    markers: {
      size: 0
    },
    xaxis: {
      type: 'datetime',
    },
    series: [{
      name: "temp",
      data: data.temp
    }]
  };

  console.log(data?.temp)

  const optionSubLine: ApexOptions = {
    chart: {
      id: 'chart2',
      height: 130,
      type: 'area',
      brush:{
        target: 'chart1',
        enabled: true
      },
      selection: {
        enabled: true,
        xaxis: {
          min: dayjs(data?.created_at[data.created_at.length - 10]).toDate().getTime(),
          max: dayjs(data?.created_at[data.created_at.length - 1]).toDate().getTime()
        }
      },
    },
    colors: ['#008FFB'],
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.91,
        opacityTo: 0.1,
      }
    },
    xaxis: {
      type: 'datetime',
      tooltip: {
        enabled: false
      }
    },
    yaxis: {
      tickAmount: 2
    }
  };

  return(
    <div id="tempWrapper">
      <div id="chart">
        <Chart options={optionMainLine} series={optionMainLine.series} type="line" height={230} />
      </div>
      <div id="subChart">
        <Chart options={optionSubLine} series={optionMainLine.series} type="area" height={130} />
      </div>
    </div>
  );
};

export default DeviceChart;
