import React from "react";
import { useRecoilValue } from "recoil";
import { selectDevice } from "../../lib/recoil";
import useSWR from 'swr';
import fetcher from "../../lib/fetcher";
import { baseURL } from "../../lib/env";
import { Chart, registerables } from "chart.js"
import DeviceChart from "../DeviceChart";

Chart.register(...registerables)

type MonitorData = {
  temp: number[],
  w_temp: number[],
  illum: number[],
  created_at: Date[]
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
      <DeviceChart data={monitoringData} />
    </div>
  );
};

export default DeviceDataChart;
