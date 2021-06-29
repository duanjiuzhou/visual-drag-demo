import { Pie } from '@ant-design/charts'
import { PieConfig } from '@ant-design/charts/es/pie'
// import { PieConfig } from '@antv/g2plot'

function PieChart(props: PieConfig) {
  // 修复data
  return <Pie {...props} data={props.data || []} />
}

export default PieChart
