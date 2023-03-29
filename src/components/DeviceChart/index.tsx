import React from "react";
import ReactApexChart, { ApexOptions } from "apexcharts";
import Chart from 'react-apexcharts';
import dayjs from 'dayjs'

type MonitorData = {
  temp: number[],
  w_temp: number[],
  illum: number[],
  created_at: number[]
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
    }],
    yaxis: {
      min: 0,
      max: 80
    }
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
      tickAmount: 2,
      min: 0,
      max: 80
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
