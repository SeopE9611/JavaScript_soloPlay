import { getEmployees, getMenus } from './asyncFunctions.js';

const employeesPromise = getEmployees(); // 직원 데이터를 가져오는 Promise
const menusPromise = getMenus(); // 메뉴 데이터를 가져오는 Promise

const [employees, menus] = await Promise.all([employeesPromise, menusPromise]); // 병렬 처리

// 테스트 코드
console.log('직원 데이터:');
console.log(employees);
console.log('메뉴 데이터:');
console.log(menus);
