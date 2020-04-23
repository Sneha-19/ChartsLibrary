import { GET_LINEDATA,ADD_LINEDATA, GET_PIEDATA } from '../ActionTypes';

export const addLineData  = (dataObj) => ({
    type : ADD_LINEDATA,
    payload : dataObj
})

export const getLineData = () => ({
    type : GET_LINEDATA,
        payload : [
        {
            name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
        },
        {
            name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
        },
        {
            name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
        },
        {
            name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
        },
        {
            name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
        },
        {
            name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
        },
        {
            name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
        },
        {
            name: 'Page H', uv: 3490, pv: 4300, amt: 2100,
        },
        {
            name: 'Page I', uv: 3490, pv: 4300, amt: 2100,
        },
        {
            name: 'Page J', uv: 3490, pv: 4300, amt: 2100,
        },
        {
            name: 'Page K', uv: 10490, pv: 4300, amt: 2100,
        },
        {
            name: 'Page L', uv: 9490, pv: 4300, amt: 2100,
        },
    ]
})