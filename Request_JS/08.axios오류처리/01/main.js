// main

import { getColorSurveys , getColorSurvey, createColorSurvey } from './axiosApi.js';

const Survey = await getColorSurvey(123);
console.log(Survey);
