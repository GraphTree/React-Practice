import {useQuery} from "react-query"
import {fetchCoinHistory} from "./api"
import ApexChart from "react-apexcharts";
import { parse } from "path";
import {useRecoilValue} from "recoil"
import {isDarkAtom} from "../atoms"

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
    coinId:string;
}

function Chart({coinId}:ChartProps) {
    const isDark = useRecoilValue(isDarkAtom);
    const {isLoading, data} = useQuery<ICoinHistory[]>(["history", coinId], () => fetchCoinHistory(coinId));
  return (
    <div>{isLoading? "Loading Chart..." : 
            <ApexChart 
                type="line" 
                series={[
                    {
                        data: data?.map(price=>parseFloat(price.close)) as number[],
                        name:"price"
                    }
                ]}
                options={{
                        theme:{
                            mode: isDark? "dark" : "light"
                        },
                        chart:{
                            height : 300,
                            width : 500,
                            background:"transparent",
                            toolbar:{
                                show:false,
                            }
                                },
                        grid:{show:false},
                        yaxis:{show:false},
                        xaxis:{
                            labels:{show:false},
                            type:"datetime",
                            categories: data?.map(price=>price.time_close) as number[],
                        },
                        stroke:{
                            curve:"smooth",
                            width:2
                        },
                        fill:{type:"gradient", gradient :{gradientToColors:["blue"],stops:[0, 100]}},
                        colors:["red"],
                        tooltip:{
                            y:{formatter:(value)=>`$ ${value.toFixed(0)}`}
                        }
                        

                            }
                        }/>
    }
    </div>
  );
}

export default Chart;