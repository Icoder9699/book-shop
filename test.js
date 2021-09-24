const arr = [1,2,3,4,5]

const newArr = [ 7,7,7,7, ...arr,]

const txt = 'hello.world'
console.log(txt.split('.'));
const [firstKey, ...keys] = txt.split('.')


// example 
var arr = [1, 2, 3, 4, 5]

var result = arr.reduce(function(sum, current) {
   return sum + current;
}, 0);

const _get = (obj, path) => {
   const [firstKey, ...keys] = path.split('.');
   return keys.reduce((val, key) => {
     return val[key];
   }, obj[firstKey]);
 };
 
const getTotalSum = (obj, path) => {
   return Object.values(obj).reduce((sum, obj) => {
     const value = _get(obj, path);
     return sum + value;
   }, 0);
};
 
const newObjItems = [
   ...state.items[action.payload].items,
   state.items[action.payload].items[0],
];
const newItems = {
   ...state.items,
   [action.payload]: {
      items: newObjItems,
      totalPrice: getTotalPrice(newObjItems),
   },
};
 const totalCount = getTotalSum(newItems, 'items.length');
 const totalPrice = getTotalSum(newItems, 'totalPrice');