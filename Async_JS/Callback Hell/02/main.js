// main.js
import {getEmployees, json, groupEmployees} from './function.js'

getEmployees((response)=> {
  json(response, (data) => {
    groupEmployees(data,(result) => {
      console.log(result);
    });
  })
});

