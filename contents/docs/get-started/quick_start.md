---
title: Quick Start
root: "/docs"
parents: ["I. Get Started"]
weight: 2
---
<h1 align="center">
  Quick Start
</h1>

Below is a quick example on how to get started using Firebase

##### /App.js
```
import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Groundline from 'groundline';
import schema from './groundline.schema';

function BasicExample() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <Groundline schema={schema}  />
    </div>
  );
}

ReactDOM.render(
  <BasicExample />,
  document.getElementById('root')
);
```

##### ./schema/index.js
```
/** @jsx builder */

import {builder, ConnectFirebaseClientRealtimeDB} from 'groundline';
import firebase from 'firebase';
import AreaChart from '../components/areaChart';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "your-firebase-api-key",
    authDomain: "your-firebase-auth-domain",
    databaseURL: "your-firebase-database-url",
    projectId: "your-firebase-project-id",
    storageBucket: "your-firebase-storage-bucket",
    messagingSenderId: "your-firebase-messaging-id"
  });
}
const myApp = firebase.app();
const connector = new ConnectFirebaseClientRealtimeDB({
  database: myApp.database()
});

export default (
  <schema connector={connector}>
    <container
      keyName="dashboard"
      title="${dashboard.title}"
      description="${dashboard.desc}"
    >
        <component
            render={AreaChart}
            keyName="area-chart"
            container={{
              height: 300
            }}
            xAxis={{
              tickCount: 5,
              style: { tickLabels: { 
                angle: -30,
                textAnchor: "middle"
              } }
            }}
            chart={{
              style: {data: {fill: "#1890ff"}}
            }}
            transformData={(chart) => {
              return chart || null;
            }}
            graphql={`
              query {
                democharts {
                  x
                  y
                }
              }
            `}
            />
            
    </container>
  </schema>
);

```

##### ./components/areaChart.js
```
import * as React from 'react';
import {VictoryChart, VictoryTheme, VictoryArea, VictoryAxis, VictoryVoronoiContainer, VictoryStack} from 'victory';

export default class AreaChart extends React.Component<DefaultProps> {
  render() {
    const {value, container, xAxis, yAxis, chart} = this.props;
    return (
      <VictoryChart
        theme={VictoryTheme.material}
        containerComponent={
          <VictoryVoronoiContainer/>
        }
        {...container}
      >
        <VictoryAxis {...xAxis}/>
        <VictoryAxis {...yAxis} dependentAxis/>
        <VictoryStack>
          <VictoryArea
            animate={{duration: 500, delay: 100}}
            interpolation="natural"
            labels={(datum) => datum.y}
            data={value}
            style={{
              labels: {fill: "white"}
            }}
            {...chart}
          />
        </VictoryStack>
      </VictoryChart>
    )
  }
}

```