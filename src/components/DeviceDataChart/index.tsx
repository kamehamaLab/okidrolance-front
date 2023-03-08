import React from "react";
import { useRecoilValue } from "recoil";
import { selectDevice } from "../../lib/recoil";
import { Line } from "react-chartjs-2";
import useSWR from 'swr';
import fetcher from "../../lib/fetcher";
import { baseURL } from "../../lib/env";

const DeviceDataChart: React.FC = () => {
  const currentDevice = useRecoilValue(selectDevice);

  if (currentDevice === 0) return (
    <div className="h-screen w-screen flex justify-center items-center">
      <h1>デバイスを選択してください</h1>
    </div>
  );
  else return(
    <div className="h-screen w-screen flex justify-center items-center">
      <h1>選択中のデバイス:{currentDevice}</h1>
    </div>
  );
};

export default DeviceDataChart;
