---
title: Quick Start
root: "/docs"
parents: ["Get Started"]
---
<h1 align="center">
  Quick Start
</h1>

Below is a quick example on how to get started

##### /App.js
```
import React, { Component } from 'react';
import Groundline, {Router as R} from 'groundline';
import schema from './schema/index.js';

class App extends Component {
  render() {

    const router = new R({
      baseUrl: "/"
    });

    const routes = router.getRoutes();

    const routerParams = {
      operator: router.getOperator(),
      payload: router.getPayload(),
      where: router.getWhere(),
      sort: router.getSort(),
      pagination: router.getPagination()
    };

    return (
      <React.Fragment>
        <Groundline 
          ref={React.createRef()}
          schema={schema} 
          routes={routes}
          goTo={router.goTo}
          routerParams={routerParams}
        />
      </React.Fragment>
    );
  }
}
```

##### ./schema/index.js
```
/** @jsx builder */

import {builder, FirebaseRtdbClientConnector} from 'groundline';
import firebase from 'firebase';
import Posts from './posts';

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
const defaultApp = firebase.app();
const connector = new FirebaseRtdbClientConnector({
  database: defaultApp.database()
});

export default (
  <schema connector={connector}>
    <Posts />
  </schema>
);

```

##### ./schema/posts.js
```
/** @jsx builder */

import {builder} from 'groundline';
import table from './componenta/table'; // You can create your own table component
import stringInput from './components/input'; // You can create your own input component

export default () => (
  <record 
    keyName="posts" 
    title="Posts" 
    interface={table}
  >
      <string keyName="title" title="Title" interface={stringInput} />
      <string keyName="description" title="Description" interface={stringInput} />
      <string keyName="content" title="Content" interface={stringInput} />
  </record>
);

```