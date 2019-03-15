---
title: Quick Start
root: "/docs"
parents: ["I. Get Started"]
weight: 2
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

    return (
        <Groundline 
          schema={schema} 
          routes={router.getRoutes()}
          goTo={router.goTo}
        />
    );

  }
}
```

##### ./schema/index.js
```
/** @jsx builder */

import {builder, ConnectFirebaseClientRealtimeDB} from 'groundline';
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
const myApp = firebase.app();
const connector = new ConnectFirebaseClientRealtimeDB({
  database: myApp.database()
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
    render={table}
  >
      <string keyName="title" title="Title" render={stringInput} />
      <string keyName="description" title="Description" render={stringInput} />
      <string keyName="content" title="Content" render={stringInput} />
  </record>
);

```