import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import { userData } from '../../dummyData'
import "./home.css"
export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title={"Users Analytics"} dataKey={"Active User"} grid={true}/>
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  )
}
