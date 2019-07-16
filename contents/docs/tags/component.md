---
title: Component
root: "/docs"
parents: ["III. Tags"]
weight: 3
---
# Component
Rendering component. Use to communicate with your data source and display data.
```
 <component />
```
<br/>

### Properties

| Props   |      Description      |  Required |
|----------|:-------------:|------:|
| keyName |  Unique keyname of the field. | true |
| transformData |  Function use to transform retreived data before rendering. | true|
| render |  Render the UI for the schema   |   false |
| graphql |  Query data using graphql string | false |
