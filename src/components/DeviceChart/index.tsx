import React from "react";
import { ApexOptions } from "apexcharts";
import Chart from 'react-apexcharts';

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
    yaxis: {
      decimalsInFloat: 0,
      tickAmount:8,
      min: 0,
      max: 80
    }
  };

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
      decimalsInFloat: 0,
      tickAmount: 2,
      min: 0,
      max: 80
    }
  };

  return(
    <>
    <div id="tempWrapper" className="w-4/5 mx-auto my-10 border-4 p-5">
      <div className="text-center text-xl">温度</div>
      <div id="chart">
        <Chart options={optionMainLine} series={[{name: "temp", data: data.temp}]} type="line" height={230} />
      </div>
      <div id="subChart">
        <Chart options={optionSubLine} series={[{name: "temp", data: data.temp}]} type="area" height={130} />
      </div>
    </div>
    <div id="w_tempWrapper" className="w-4/5 m-auto my-10 border-4 p-5">
      <div className="text-center text-xl">水温</div>
      <div id="chart">
        <Chart options={optionMainLine} series={[{name: "w_temp", data: data.w_temp}]} type="line" height={230} />
      </div>
      <div id="subChart">
        <Chart options={optionSubLine} series={[{name: "w_temp", data: data.w_temp}]} type="area" height={130} />
      </div>
    </div>
    <div id="iliimWrapper" className="w-4/5 m-auto my-10 border-4 p-5">
      <div className="text-center text-xl">照度</div>
      <div id="chart">
        <Chart options={optionMainLine} series={[{name: "illum", data: data.illum}]} type="line" height={230} />
      </div>
      <div id="subChart">
        <Chart options={optionSubLine} series={[{name: "illum", data: data.illum}]} type="area" height={130} />
      </div>
    </div>
    </>
  );
};

export default DeviceChart;
