import React from "react";
import useSWR from 'swr';
import { baseURL } from "../../lib/env";
import fetcher from "../../lib/fetcher";
import { useSetRecoilState } from "recoil";
import { selectDevice } from "../../lib/recoil";

type Device = {
  id: number,
  location: string
};

const DeviceList: React.FC = () => {
  const { data: devices, error } = useSWR<Device[], Error>(`${baseURL}devices`, fetcher);
  const setDevice = useSetRecoilState(selectDevice);
  if (error) return <div>Error....</div>;
  if (!devices) return <div>Now Loading...</div>;
  const handleChengeDevive = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setDevice(value);
  };
  return (
    <>
    <ul id="deviceSelectRadio" className="items-center m-1 p-1 w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      {devices.map((device)=>(
        <li key={`li-${device.id}`} className="w-full p-1 border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <input key={`input-${device.id}`} id={device.location} type="radio" value={device.id} name="devices" onChange={handleChengeDevive} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
          <label key={`label-${device.id}`} className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{device.id}</label>
        </li>
      ))}
    </ul>
    </>
  );
};

export default DeviceList;
