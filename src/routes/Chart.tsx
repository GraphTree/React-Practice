import {useQuery} from "react-query"
import {fetchCoinHistory} from "./api"
import ApexChart from "react-apexcharts";
import { parse } from "path";

interface ICoinHistory{
    time_open: number;
    time_close:number,
    open:string;
    high:string;
    low:string;
    close:string;
    volume:string;
    market_cap:string;
}

interface ChartProps {
    coinId:string
}

function Chart({coinId}:ChartProps) {
    const {isLoading, data} = useQuery<ICoinHistory[]>(["history", coinId], () => fetchCoinHistory(coinId));
  return (
    <div>{isLoading? "Loading Chart..." : 
            <ApexChart 
                type="line" 
                series={[
                    {
                        data: data?.map(price=>parseFloat(price.close)) as number[],
                        name:"hello"
                    }
                ]}
                options={{
                        theme:{
                            mode:"dark"
                        },
                        chart:{
                            height : 500,
                            width : 500,
                                },
                        stroke:{
                            curve:"smooth",
                            width:2
                        }

                            }
                        }/>
    }
    </div>
  );
}

export default Chart;