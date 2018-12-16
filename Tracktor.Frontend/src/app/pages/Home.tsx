import * as React from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";

import * as routes from "../constants/routes";
import { NavButton } from "../componentStore/NavButton/NavButton";

echarts.registerTheme("my_theme", {
  backgroundColor: "#f4cccc"
});

export class Home extends React.PureComponent<null, null> {
  onChartClick() {
    console.log("on chart click");
  }

  onChartLegendselectchanged() {
    console.log("legend select changed");
  }

  getOption() {
    return {
      title: {
        show: true
      }
    };
  }

  onChartReadyCallback() {
    console.log("chart ready");
  }

  render() {
    const onEvents = {
      click: this.onChartClick,
      legendselectchanged: this.onChartLegendselectchanged
    };

    return (
      <React.Fragment>
        <NavButton path={routes.ADD_SUGAR}>Add sugar</NavButton>
        <ReactEcharts
          option={this.getOption()}
          notMerge={true}
          lazyUpdate={true}
          theme={"my_theme"}
          style={{ height: "300px", width: "100%" }}
          onChartReady={this.onChartReadyCallback}
          onEvents={onEvents}
        />
      </React.Fragment>
    );
  }
}

export default Home;
