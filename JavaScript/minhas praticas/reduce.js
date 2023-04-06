const people = [
  {name: "Kyle", age: 26},
  {name: "John", age: 31 },
  {name: "Sally", age: 42 },
  {name: "Jill", age: 42 }
]

console.log(people)

const result = people.reduce(function(sumAge, person){
  return sumAge + person.age},0)

console.log(result)

const byAge = people.reduce(function(groupedPeople, person){
  const age = person.age
  if (groupedPeople[age] == null) groupedPeople[age] = []
    groupedPeople[age].push(person)
    return groupedPeople
}, {})

console.log (byAge)