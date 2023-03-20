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
  //if (error) return <div className="h-screen w-screen flex justify-center items-center">Error....</div>;
  // if (!monitoringData) return <div>Now Loading...</div>;

  if (currentDevice === 0 || monitoringData === undefined) return (
    <div className="h-screen w-screen flex justify-center items-center text-5xl font-bold">
      デバイスを選択してください
    </div>
  );
  else
  return(
    <div className="h-screen w-screen items-center">
      <h1 className="flex justify-center text-2xl p-2">選択中のデバイス:{currentDevice}</h1>
      <div className="h-1/3 w-full">
        <Line
          data={{
            labels: monitoringData.created_at,
            datasets:[
              {
                label: "Temperture",
                data: monitoringData.temp,
                borderColor: "rgb(75, 100, 192)",
              },
            ]
          }}
          options={options}
        />
      </div>
      <div className="h-1/3 w-full">
        <Line
          data={{
            labels: monitoringData.created_at,
            datasets:[
              {
                label: "Water Temperture",
                data: monitoringData.w_temp,
                borderColor: "rgb(75, 100, 192)",
              },
            ]
          }}
          options={options}
        />
      </div>
      <div className="h-1/3 w-full">
        <Line
          data={{
            labels: monitoringData.created_at,
            datasets:[
              {
                label: "illumination",
                data: monitoringData.illum,
                borderColor: "rgb(75, 100, 192)",
              },
            ]
          }}
          options={options}
        />
      </div>
    </div>
  );
};

export default DeviceDataChart;
