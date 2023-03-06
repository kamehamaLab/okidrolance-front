import React from "react";
import useSWR from 'swr';
import { baseURL } from "../../lib/env";
import fetcher from "../../lib/fetcher";

const DeviceList: React.FC  = () =>{
  const { data: devices, error } = useSWR(`${baseURL}devices`, fetcher);
  if (error) return <div>Error....</div>;
  if (!devices) return <div>Now Loading...</div>;
  return (
    <h1>this is DeviceList</h1>
  );
};

export default DeviceList;
