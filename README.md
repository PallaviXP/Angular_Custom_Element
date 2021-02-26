npm run el-build will build this app, 
this is custom build task, it will generate custom-element.js in dist folder

I have tried below,

I took this js in different hosted site, and inject belwo in html body of some different html, it renders angular component in different html.

<body>
     ************************** start ********************<br/>

  <app-element></app-element>
  <script type="text/javascript" src="custom-element.js"></script>

  <br/>************************** end ********************  
    
   
</body>

Ref: https://medium.com/@kitson.mac/wrapping-an-angular-app-in-a-custom-element-web-component-angular-element-in-4-simple-steps-ded3554e9006 

