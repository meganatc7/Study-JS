// sort
const ordered = inventors.sort(function(a, b) {
  if(a.year > b.year) {
    return 1;
  } else {
    return -1;
  }
})

const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);

// reduce
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

//
const category = document.querySelector('.mw-category')
const links = Array.from(category.querySelectorAll('a'));
// const links = [...category.querySelectorAll('a')];

const de = links
              .map(link => link.textContent)
              .filter(streetName => streetName.includes('de'));

              
//sort (배열인 경우, 위에는 객체)
const alpha = people.sort(function(lastOne, nextOne) {
  const [alast, afirst] = lastOne.split(', ');
  const [blast, bfirst] = nextOne.split(', ');
  
  return aLast > bLast ? 1 : -1;

//reduce
// const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk']

// const transportation = data.reduce(function(obj, item) {
//   if(!obj[item]) {
//     obj[item] = 0;
//   }
//   obj[item]++;
//   return obj;
//   }, {});