const comments = [
  { text: 'Love this!', id: 52423},
  { text: 'Super good', id: 823423},
  { text: 'You are the best', id: 2039842},
  { text: 'Ramen in my fav food ever', id: 123523},
  { text: 'Nice Nice', id: 542328},
]


// some
const isAdult = people.some(function(person) {
  const currentYear = (new Date()).getFullYear();
  return currentYear - person.year >= 19;
})

const isAdult = people.some(person => ((new Date()).
    getFullYear()) - person.year >= 19) ;


// every
const allAdult = people.some(person => ((new Date()).
    getFullYear()) - person.year >= 19) ;


// find 하나의 객체를 돌려줌
const comment = comments.find(function(comment) {
  if(comment.id === 823423) {
    return true;
  }
})

const comment = comments.find(coment => comment.id === 823423 );


// findindex()
const index = comments.findIndex(comment => comment.id === 823423);
console.log(index)

console.table(comments)
comments.splice(index,1)


// 새로운 배열로 하는 법(find 연장) (오리지널 데이터는 건드리지 않기!!)
const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1)
]