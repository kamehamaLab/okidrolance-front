import axios from 'axios';
import {Fetcher} from 'swr';

// SWRで使うfetcher
// asyncでラップしているからPromiseを返す
const fetcher: Fetcher<URL, string> = url => axios.get(url).then(res => res.data);

export default fetcher;
