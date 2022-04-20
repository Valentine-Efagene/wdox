import styles from './FlowChart.module.css'
import MyImage from '../MyImage/MyImage'
import img from '../../assets/images/flow_chart.png'
import SideNote from '../SideNote/SideNote'

export default function FlowChart() {
  return (
    <div className={styles.main}>
      <SideNote>FLOW CHART</SideNote>
      <div className={styles.container}>
        <div className={styles.heading}>
          How are you planning to use WDOX DAO?{' '}
        </div>
        <div className={styles.flowChart}>
          <MyImage src={img} alt="" />
        </div>
      </div>
    </div>
  )
}
