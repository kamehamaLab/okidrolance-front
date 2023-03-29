import React from "react";
import { ApexOptions } from "apexcharts";
import Chart from 'react-apexcharts';
import ja from "apexcharts/dist/locales/ja.json";

const DataChart: React.FC<{data: number[][], name: string}> = ({data, name}) => {
  const optionMainLine: ApexOptions = {
    chart: {
      locales: [ja],
      defaultLocale: 'ja',
      id: 'mainChart-' + name,
      type: 'line',
      height: 230,
      toolbar: {
        autoSelected: 'pan',
        show: false
      }
    },
    colors: ['#546E7A'],
    stroke: {
      curve: 'straight',
      width: 3
    },
    dataLabels: {
      enabled: true,
    },
    tooltip: {
      x: {
        format: 'yyyy/MM/dd/HH:mm'
      }
    },
    fill: {
      opacity: 1,
    },
    xaxis: {
      type: 'datetime',
      labels: {
        formatter: function (value) { //DB側で時間をミリ秒単位に変換してる（device.rb参照）
          var d = new Date(value);
          var month = ((d.getUTCMonth()+1)<10?'0':'') + (d.getUTCMonth()+1);  //一桁の時０を入れる処理
          var date = ((d.getUTCDate())<10?'0':'') + (d.getUTCDate());
          var hour = ((d.getUTCHours())<10?'0':'') + (d.getUTCHours());
          var minutes = ((d.getUTCMinutes())<10?'0':'') + (d.getUTCMinutes());
          var sec = ((d.getUTCSeconds())<10?'0':'') + (d.getUTCSeconds());
          return (month + "/" + date + "-" + hour + ":" + minutes + ":" + sec)
        },
      }
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
      locales: [ja],
      defaultLocale: 'ja',
      id: 'subChart-' + name,
      height: 130,
      type: 'area',
      brush:{
        target: 'mainChart-' + name,
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
      labels: {
        format: 'MM/dd',
      },
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
    <div id="chartWrapper" className="w-4/5 mx-auto my-10 border-4 p-5">
      <div className="text-center text-xl">{name}</div>
      <div id="chart">
        <Chart options={optionMainLine} series={[{name: name, data: data}]} type="line" height={230} />
      </div>
      <div id="subChart">
        <Chart options={optionSubLine} series={[{name: name, data: data}]} type="area" height={130} />
      </div>
    </div>
  );
};

export default DataChart;
