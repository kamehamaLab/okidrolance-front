import React from "react";
import { useRecoilValue } from "recoil";
import { selectDevice } from "../../lib/recoil";
import { Line } from "react-chartjs-2";
import useSWR from 'swr';
import fetcher from "../../lib/fetcher";
import { baseURL } from "../../lib/env";
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

type MonitorData = {
  temp: number[],
  w_temp: number[],
  illum: number[],
  created_at: string[]
};

const options: {} = {
  maintainAspectRatio: false,
};

const DeviceDataChart: React.FC = () => {
  const currentDevice = useRecoilValue(selectDevice);
  const { data: monitoringData, error } = useSWR<MonitorData, Error>(`${baseURL}devices/${currentDevice}`, fetcher);
  const labels = monitoringData?.created_at;

  if (currentDevice === 0 || monitoringData === undefined) return (
    <div className="h-screen w-screen flex justify-center items-center">
      <h1>デバイスを選択してください</h1>
    </div>
  );
  else
  return(
    <div className="flex justify-center">
      <h1>選択中のデバイス:{currentDevice}</h1>
      <Line
        data={{
          labels,
          datasets:[
            {
              label: "temp",
              data: monitoringData.temp,
              borderColor: "rgb(75, 100, 192)",
            },
          ]
        }}
        options={options}
      />
    </div>
  );
};

export default DeviceDataChart;
