import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

const data = [
  { name: 'Page A', uv: 688, pv: 2610, amt: 4308 },
  { name: 'Page D', uv: 323, pv: 2928, amt: 4218 },
  { name: 'Page C', uv: 377, pv: 2449, amt: 3711 },
  { name: 'Page D', uv: 880, pv: 2611, amt: 2006 },
  { name: 'Page E', uv: 660, pv: 2806, amt: 2169 },
  { name: 'Page F', uv: 968, pv: 2367, amt: 3663 },
  { name: 'Page G', uv: 321, pv: 2089, amt: 2104 },
  { name: 'Page H', uv: 964, pv: 2883, amt: 2199 },
]

const RenderLineChart = (
  <div className="p-8 text-xs">
    <LineChart width={700} height={400} data={data}>
      <Line type="monotone" dataKey="amt" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  </div>
)

export { RenderLineChart }
