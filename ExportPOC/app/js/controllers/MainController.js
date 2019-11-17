'use strict'

eventsApp.controller('MainController', function MainController($scope) {
   $scope.message = "Export Audit POC";
   $scope.exportFormat="pdf";
   $scope.auditData = [
      {
         "id": "e424e4b0-b9d0-11e9-8f00-4126ae1617c9",
         "datestamp": "2019-08-08T11:37:24.184Z",
         "userid": "DemoUser",
         "action": "Assigned",
         "datatype": "Account Assignment",
         "summary": "Assigned account Sales Zone 1-Debit (Code 1) to category Balance sheet (BS)",
         "hasdetails": true
      },
      {
         "id": "e4218950-b9d0-11e9-8f00-4126ae1617c9",
         "datestamp": "2019-08-08T11:37:24.169Z",
         "userid": "DemoUser",
         "action": "Assigned",
         "datatype": "Account Assignment",
         "summary": "Assigned account Sales Zone 1-Credit (Code 1) to category Balance sheet (BS)",
         "hasdetails": true
      },
      {
         "id": "2a0bb7a0-b374-11e9-8b79-af77ef16345a",
         "datestamp": "2019-07-31T05:18:31.297Z",
         "userid": "DemoUser",
         "action": "Edited",
         "datatype": "Data Entry -CheckBox",
         "summary": "Selected checkbox Parent",
         "hasdetails": true
      },
      {
         "id": "f169e870-b1a9-11e9-bf3f-a3c240a0e299",
         "datestamp": "2019-07-29T02:38:28.023Z",
         "userid": "DemoUser",
         "action": "Added",
         "datatype": "Report",
         "summary": "Added report New Report",
         "hasdetails": true
      },
      {
         "id": "68ea8940-aeb7-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T08:37:18.121Z",
         "userid": "DemoUser",
         "action": "Edited",
         "datatype": "Report- Line Wrap",
         "summary": "Edited Line Wrap in Journal Summary Report (New) Report",
         "hasdetails": true
      },
      {
         "id": "64571e70-aeb7-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T08:37:10.418Z",
         "userid": "DemoUser",
         "action": "Edited",
         "datatype": "Report- Line Wrap",
         "summary": "Edited Line Wrap in Journal Summary Report (New) Report",
         "hasdetails": true
      },
      {
         "id": "20da6210-ae8f-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:49:00.039Z",
         "userid": "DemoUser",
         "action": "Assigned",
         "datatype": "Account Assignment",
         "summary": "Assigned account Account Description (Account ID) to category Primary (PRIMARY)",
         "hasdetails": true
      },
      {
         "id": "20d8b460-ae8f-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:49:00.023Z",
         "userid": "DemoUser",
         "action": "Assigned",
         "datatype": "Account Assignment",
         "summary": "Assigned account Account Description (Account ID) to category Primary (PRIMARY)",
         "hasdetails": true
      },
      {
         "id": "cada3d40-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.759Z",
         "userid": "DemoUser",
         "action": "Added",
         "datatype": "Journal Entry",
         "summary": "Added account Sub Bank 1 (Code 50) to journal 1 (IMP 001)",
         "hasdetails": true
      },
      {
         "id": "cad8ddb0-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.744Z",
         "userid": "DemoUser",
         "action": "Added",
         "datatype": "Journal Entry",
         "summary": "Added account Sub Sales 1 (Code 40) to journal 1 (IMP 001)",
         "hasdetails": true
      },
      {
         "id": "cad645a0-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.728Z",
         "userid": "DemoUser",
         "action": "Added",
         "datatype": "Journal Entry",
         "summary": "Added account Bank Account 4 (Code 30) to journal 1 (IMP 001)",
         "hasdetails": true
      },
      {
         "id": "cad4e610-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.728Z",
         "userid": "DemoUser",
         "action": "Added",
         "datatype": "Journal Entry",
         "summary": "Added account Bank Account 3 (Code 29) to journal 1 (IMP 001)",
         "hasdetails": true
      },
      {
         "id": "cad33860-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.697Z",
         "userid": "DemoUser",
         "action": "Added",
         "datatype": "Journal Entry",
         "summary": "Added account Bank Account 2 (Code 28) to journal 1 (IMP 001)",
         "hasdetails": true
      },
      {
         "id": "cad0ee70-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.697Z",
         "userid": "DemoUser",
         "action": "Added",
         "datatype": "Journal Entry",
         "summary": "Added account Bank Account 1 (Code 27) to journal 1 (IMP 001)",
         "hasdetails": true
      },
      {
         "id": "cacfb5f0-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.677Z",
         "userid": "DemoUser",
         "action": "Added",
         "datatype": "Journal Entry",
         "summary": "Added account Shares Type 6 (Code 26) to journal 1 (IMP 001)",
         "hasdetails": true
      },
      {
         "id": "cacea480-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.677Z",
         "userid": "DemoUser",
         "action": "Added",
         "datatype": "Journal Entry",
         "summary": "Added account Shares Type 5 (Code 25) to journal 1 (IMP 001)",
         "hasdetails": true
      },
      {
         "id": "cacccfc0-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.675Z",
         "userid": "DemoUser",
         "action": "Added",
         "datatype": "Journal Entry",
         "summary": "Added account Shares Type 4 (Code 24) to journal 1 (IMP 001)",
         "hasdetails": true
      },
      {
         "id": "cacbe560-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.666Z",
         "userid": "DemoUser",
         "action": "Added",
         "datatype": "Journal Entry",
         "summary": "Added account Shares Type 3 (Code 23) to journal 1 (IMP 001)",
         "hasdetails": true
      },
      {
         "id": "caca10a0-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.649Z",
         "userid": "DemoUser",
         "action": "Added",
         "datatype": "Journal Entry",
         "summary": "Added account Shares Type 2 (Code 22) to journal 1 (IMP 001)",
         "hasdetails": true
      },
      {
         "id": "cac72a70-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.639Z",
         "userid": "DemoUser",
         "action": "Added",
         "datatype": "Journal Entry",
         "summary": "Added account Shares Type 1 (Code 21) to journal 1 (IMP 001)",
         "hasdetails": true
      },
      {
         "id": "cac5f1f0-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.631Z",
         "userid": "DemoUser",
         "action": "Added",
         "datatype": "Journal Entry",
         "summary": "Added account Foreign Currency Translation SAR to AUD (Code 20) to journal 1 (IMP 001)",
         "hasdetails": true
      },
      {
         "id": "cac49260-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.622Z",
         "userid": "DemoUser",
         "action": "Added",
         "datatype": "Journal Entry",
         "summary": "Added account Foreign Currency Translation EUR to AUD (Code 19) to journal 1 (IMP 001)",
         "hasdetails": true
      },
      {
         "id": "cac1d340-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.603Z",
         "userid": "DemoUser",
         "action": "Added",
         "datatype": "Journal Entry",
         "summary": "Added account Foreign Currency Translation USD to AUD (Code 18) to journal 1 (IMP 001)",
         "hasdetails": true
      },
      {
         "id": "cac04ca0-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.572Z",
         "userid": "DemoUser",
         "action": "Added",
         "datatype": "Journal Entry",
         "summary": "Added account Foreign Currency Translation GBP to AUD (Code 17) to journal 1 (IMP 001)",
         "hasdetails": true
      },
      {
         "id": "cabd8d80-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.572Z",
         "userid": "DemoUser",
         "action": "Added",
         "datatype": "Journal Entry",
         "summary": "Added account Receivables Type 8 (Code 16) to journal 1 (IMP 001)",
         "hasdetails": true
      },
      {
         "id": "cabc2df0-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.556Z",
         "userid": "DemoUser",
         "action": "Added",
         "datatype": "Journal Entry",
         "summary": "Added account Receivables Type 7 (Code 15) to journal 1 (IMP 001)",
         "hasdetails": true
      },
      {
         "id": "cab995e0-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.541Z",
         "userid": "DemoUser",
         "action": "Added",
         "datatype": "Journal Entry",
         "summary": "Added account Receivables Type 6 (Code 14) to journal 1 (IMP 001)",
         "hasdetails": true
      },
      {
         "id": "cab6fdd0-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.525Z",
         "userid": "DemoUser",
         "action": "Added",
         "datatype": "Journal Entry",
         "summary": "Added account Receivables Type 5 (Code 13) to journal 1 (IMP 001)",
         "hasdetails": true
      },
      {
         "id": "cab5ec60-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.525Z",
         "userid": "DemoUser",
         "action": "Added",
         "datatype": "Journal Entry",
         "summary": "Added account Receivables Type 4 (Code 12) to journal 1 (IMP 001)",
         "hasdetails": true
      },
      {
         "id": "cab465c0-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.494Z",
         "userid": "DemoUser",
         "action": "Added",
         "datatype": "Journal Entry",
         "summary": "Added account Receivables Type 3 (Code 11) to journal 1 (IMP 001)",
         "hasdetails": true
      },
      {
         "id": "cab1cdb0-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.494Z",
         "userid": "DemoUser",
         "action": "Added",
         "datatype": "Journal Entry",
         "summary": "Added account Receivables Type 2 (Code 10) to journal 1 (IMP 001)",
         "hasdetails": true
      },
      {
         "id": "cab06e20-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.478Z",
         "userid": "DemoUser",
         "action": "Added",
         "datatype": "Journal Entry",
         "summary": "Added account Receivables Type 1 (Code 9) to journal 1 (IMP 001)",
         "hasdetails": true
      },
      {
         "id": "caadaf00-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.462Z",
         "userid": "DemoUser",
         "action": "Added",
         "datatype": "Journal Entry",
         "summary": "Added account Assets UK North (Code 8) to journal 1 (IMP 001)",
         "hasdetails": true
      },
      {
         "id": "caac4f70-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.447Z",
         "userid": "DemoUser",
         "action": "Added",
         "datatype": "Journal Entry",
         "summary": "Added account Assets UK East (Code 7) to journal 1 (IMP 001)",
         "hasdetails": true
      },
      {
         "id": "caaa7ab0-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.447Z",
         "userid": "DemoUser",
         "action": "Added",
         "datatype": "Journal Entry",
         "summary": "Added account Assets UK West (Code 6) to journal 1 (IMP 001)",
         "hasdetails": true
      },
      {
         "id": "caa96940-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.431Z",
         "userid": "DemoUser",
         "action": "Added",
         "datatype": "Journal Entry",
         "summary": "Added account Assets UK South (Code 5) to journal 1 (IMP 001)",
         "hasdetails": true
      },
      {
         "id": "caa7e2a0-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.431Z",
         "userid": "DemoUser",
         "action": "Added",
         "datatype": "Journal Entry",
         "summary": "Added account Sales Zone 4 (Code 4) to journal 1 (IMP 001)",
         "hasdetails": true
      },
      {
         "id": "caa54a90-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.415Z",
         "userid": "DemoUser",
         "action": "Added",
         "datatype": "Journal Entry",
         "summary": "Added account Sales Zone 3 (Code 3) to journal 1 (IMP 001)",
         "hasdetails": true
      },
      {
         "id": "caa3c3f0-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.400Z",
         "userid": "DemoUser",
         "action": "Added",
         "datatype": "Journal Entry",
         "summary": "Added account Sales Zone 2 (Code 2) to journal 1 (IMP 001)",
         "hasdetails": true
      },
      {
         "id": "caa26460-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.384Z",
         "userid": "DemoUser",
         "action": "Added",
         "datatype": "Journal Entry",
         "summary": "Added account Sales Zone 1 (Code 1) to journal 1 (IMP 001)",
         "hasdetails": true
      },
      {
         "id": "ca9df790-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.369Z",
         "userid": "DemoUser",
         "action": "Created",
         "datatype": "Journal",
         "summary": "Created journal 1 (IMP 001)",
         "hasdetails": true
      },
      {
         "id": "ca9fa540-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.369Z",
         "userid": "DemoUser",
         "action": "Added",
         "datatype": "Journal Entry",
         "summary": "Added account Account Description (Account ID) to journal 1 (IMP 001)",
         "hasdetails": true
      },
      {
         "id": "ca9bada0-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.334Z",
         "userid": "DemoUser",
         "action": "Created",
         "datatype": "Account",
         "summary": "Created account Sub Bank 1 (Code 50)",
         "hasdetails": true
      },
      {
         "id": "ca99fff0-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.334Z",
         "userid": "DemoUser",
         "action": "Created",
         "datatype": "Account",
         "summary": "Created account Sub Sales 1 (Code 40)",
         "hasdetails": true
      },
      {
         "id": "ca991590-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.333Z",
         "userid": "DemoUser",
         "action": "Created",
         "datatype": "Account",
         "summary": "Created account Bank Account 4 (Code 30)",
         "hasdetails": true
      },
      {
         "id": "ca9767e0-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.322Z",
         "userid": "DemoUser",
         "action": "Created",
         "datatype": "Account",
         "summary": "Created account Bank Account 3 (Code 29)",
         "hasdetails": true
      },
      {
         "id": "ca967d80-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.307Z",
         "userid": "DemoUser",
         "action": "Created",
         "datatype": "Account",
         "summary": "Created account Bank Account 2 (Code 28)",
         "hasdetails": true
      },
      {
         "id": "ca94a8c0-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.290Z",
         "userid": "DemoUser",
         "action": "Created",
         "datatype": "Account",
         "summary": "Created account Bank Account 1 (Code 27)",
         "hasdetails": true
      },
      {
         "id": "ca925ed0-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.290Z",
         "userid": "DemoUser",
         "action": "Created",
         "datatype": "Account",
         "summary": "Created account Shares Type 6 (Code 26)",
         "hasdetails": true
      },
      {
         "id": "ca912650-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.275Z",
         "userid": "DemoUser",
         "action": "Created",
         "datatype": "Account",
         "summary": "Created account Shares Type 5 (Code 25)",
         "hasdetails": true
      },
      {
         "id": "ca8f2a80-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.259Z",
         "userid": "DemoUser",
         "action": "Created",
         "datatype": "Account",
         "summary": "Created account Shares Type 4 (Code 24)",
         "hasdetails": true
      },
      {
         "id": "ca8dcaf0-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.259Z",
         "userid": "DemoUser",
         "action": "Created",
         "datatype": "Account",
         "summary": "Created account Shares Type 3 (Code 23)",
         "hasdetails": true
      },
      {
         "id": "ca8bf630-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.244Z",
         "userid": "DemoUser",
         "action": "Created",
         "datatype": "Account",
         "summary": "Created account Shares Type 2 (Code 22)",
         "hasdetails": true
      },
      {
         "id": "ca8ae4c0-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.228Z",
         "userid": "DemoUser",
         "action": "Created",
         "datatype": "Account",
         "summary": "Created account Shares Type 1 (Code 21)",
         "hasdetails": true
      },
      {
         "id": "ca895e20-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.228Z",
         "userid": "DemoUser",
         "action": "Created",
         "datatype": "Account",
         "summary": "Created account Foreign Currency Translation SAR to AUD (Code 20)",
         "hasdetails": true
      },
      {
         "id": "ca871430-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.212Z",
         "userid": "DemoUser",
         "action": "Created",
         "datatype": "Account",
         "summary": "Created account Foreign Currency Translation EUR to AUD (Code 19)",
         "hasdetails": true
      },
      {
         "id": "ca8602c0-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.197Z",
         "userid": "DemoUser",
         "action": "Created",
         "datatype": "Account",
         "summary": "Created account Foreign Currency Translation USD to AUD (Code 18)",
         "hasdetails": true
      },
      {
         "id": "ca84ca40-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.197Z",
         "userid": "DemoUser",
         "action": "Created",
         "datatype": "Account",
         "summary": "Created account Foreign Currency Translation GBP to AUD (Code 17)",
         "hasdetails": true
      },
      {
         "id": "ca823230-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.181Z",
         "userid": "DemoUser",
         "action": "Created",
         "datatype": "Account",
         "summary": "Created account Receivables Type 8 (Code 16)",
         "hasdetails": true
      },
      {
         "id": "ca7d7740-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.150Z",
         "userid": "DemoUser",
         "action": "Created",
         "datatype": "Account",
         "summary": "Created account Receivables Type 7 (Code 15)",
         "hasdetails": true
      },
      {
         "id": "ca7c65d0-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.134Z",
         "userid": "DemoUser",
         "action": "Created",
         "datatype": "Account",
         "summary": "Created account Receivables Type 6 (Code 14)",
         "hasdetails": true
      },
      {
         "id": "ca7a1be0-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.134Z",
         "userid": "DemoUser",
         "action": "Created",
         "datatype": "Account",
         "summary": "Created account Receivables Type 5 (Code 13)",
         "hasdetails": true
      },
      {
         "id": "ca790a70-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.119Z",
         "userid": "DemoUser",
         "action": "Created",
         "datatype": "Account",
         "summary": "Created account Receivables Type 4 (Code 12)",
         "hasdetails": true
      },
      {
         "id": "ca775cc0-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.103Z",
         "userid": "DemoUser",
         "action": "Created",
         "datatype": "Account",
         "summary": "Created account Receivables Type 3 (Code 11)",
         "hasdetails": true
      },
      {
         "id": "ca73da50-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.087Z",
         "userid": "DemoUser",
         "action": "Created",
         "datatype": "Account",
         "summary": "Created account Receivables Type 1 (Code 9)",
         "hasdetails": true
      },
      {
         "id": "ca762440-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.087Z",
         "userid": "DemoUser",
         "action": "Created",
         "datatype": "Account",
         "summary": "Created account Receivables Type 2 (Code 10)",
         "hasdetails": true
      },
      {
         "id": "ca72c8e0-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.072Z",
         "userid": "DemoUser",
         "action": "Created",
         "datatype": "Account",
         "summary": "Created account Assets UK North (Code 8)",
         "hasdetails": true
      },
      {
         "id": "ca6ef850-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.056Z",
         "userid": "DemoUser",
         "action": "Created",
         "datatype": "Account",
         "summary": "Created account Assets UK West (Code 6)",
         "hasdetails": true
      },
      {
         "id": "ca70cd10-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.056Z",
         "userid": "DemoUser",
         "action": "Created",
         "datatype": "Account",
         "summary": "Created account Assets UK East (Code 7)",
         "hasdetails": true
      },
      {
         "id": "ca6e5c10-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.040Z",
         "userid": "DemoUser",
         "action": "Created",
         "datatype": "Account",
         "summary": "Created account Assets UK South (Code 5)",
         "hasdetails": true
      },
      {
         "id": "ca6c1220-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.025Z",
         "userid": "DemoUser",
         "action": "Created",
         "datatype": "Account",
         "summary": "Created account Sales Zone 4 (Code 4)",
         "hasdetails": true
      },
      {
         "id": "ca69a120-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:35.025Z",
         "userid": "DemoUser",
         "action": "Created",
         "datatype": "Account",
         "summary": "Created account Sales Zone 3 (Code 3)",
         "hasdetails": true
      },
      {
         "id": "ca66baf0-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:34.994Z",
         "userid": "DemoUser",
         "action": "Created",
         "datatype": "Account",
         "summary": "Created account Sales Zone 2 (Code 2)",
         "hasdetails": true
      },
      {
         "id": "ca63d4c0-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:34.978Z",
         "userid": "DemoUser",
         "action": "Created",
         "datatype": "Account",
         "summary": "Created account Sales Zone 1 (Code 1)",
         "hasdetails": true
      },
      {
         "id": "ca61b1e0-ae8e-11e9-8891-499da17be352",
         "datestamp": "2019-07-25T03:46:34.962Z",
         "userid": "DemoUser",
         "action": "Created",
         "datatype": "Account",
         "summary": "Created account Account Description (Account ID)",
         "hasdetails": true
      },
      {
         "id": "a32401b0-ae0b-11e9-8891-499da17be352",
         "datestamp": "2019-07-24T12:06:26.867Z",
         "userid": "DemoUser",
         "action": "Created",
         "datatype": "Account",
         "summary": "Created account TC2 (TC2)",
         "hasdetails": true
      },
      {
         "id": "193ca970-ae0b-11e9-8891-499da17be352",
         "datestamp": "2019-07-24T12:03:52.823Z",
         "userid": "DemoUser",
         "action": "Created",
         "datatype": "Account",
         "summary": "Created account TC1 (TC1)",
         "hasdetails": true
      },
      {
         "id": "a7d18400-ade6-11e9-8891-499da17be352",
         "datestamp": "2019-07-24T07:42:58.258Z",
         "userid": "DemoUser",
         "action": "Edited",
         "datatype": "ReportElement-UpdATED pARA 3",
         "summary": "Edited UpdATED pARA 3 of report Audit Trail Report1",
         "hasdetails": true
      },
      {
         "id": "3ce04300-adca-11e9-8891-499da17be352",
         "datestamp": "2019-07-24T04:19:32.856Z",
         "userid": "DemoUser",
         "action": "Edited",
         "datatype": "ReportElement-First PAra",
         "summary": "Edited First PAra of report Audit Trail Report1",
         "hasdetails": true
      }
   ];
   var mystyle = {
      sheetid: 'Audit Trail Sheet',
      headers: true,
      column: {
        style:{
           Font:{
              Bold:"1",
              Color:"#3C3741"
            }
         },

      }
  };

   $scope.export = function () {
      if ($scope.exportFormat == "pdf") {
         //Open the document  
         var doc = new jsPDF();
       

         var data=[];
         
         $scope.auditData.forEach(function (auditEntry, i) {
            var auditBody={
               "date":auditEntry.datestamp,
               "user":auditEntry.userid,
               "action":auditEntry.action,
               "type":auditEntry.datatype,
               "summary":auditEntry.summary
            };
            data.push(auditBody); 
         });
      
          var columns=  [{header: 'Date', dataKey: 'date'}, {header: 'User', dataKey: 'user'},{header: 'Action', dataKey: 'action'},{header: 'Type', dataKey: 'type'},{header: 'Summary', dataKey: 'summary'}];
         
         doc.autoTable(columns,data,{
            // didParseCell: function (table) {

            //    if (table.section === 'head') {
            //       table.cell.styles.textColor = '#000000'
            //       table.cell.styles.fillColor = '#ffffff';
            //    }
              
            // },
            headStyles:{
               textColor : '#000000',
               fillColor:  '#ffffff',
              
               
            },
            theme:'striped',
            columnStyles: {
               0: {columnWidth: 30},
               1: {columnWidth: 30},
               2: {columnWidth: 20},
               3: {columnWidth: 30},
               4: {columnWidth: 70},
               // etc
             }
         });   

         doc.save('audit.pdf');
      }
      else if($scope.exportFormat == "xlsx"){
          alasql('SELECT [datestamp] as [Date],[userid] as [User],[action] as [Action],[datatype] as [Type],[summary] as [Summary] INTO XLSX("audit.xlsx",?) FROM ?',[mystyle,$scope.auditData]);
         

      }

   }


});
