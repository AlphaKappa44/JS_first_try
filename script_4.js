let entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

/*console.log("Voici les personnes de l'array nées dans les années 70:")
const a = { entrepreneur[year] >= 1970 &&  entrepreneur[year] <= 1979}
console.log(entrepreneurs[entrepreneurs.year[a]});

array.forEach(entrepreneurs => {
  if (entrepreneurs.year < 1980 && entrepreneurs.year >= 1970) {
    console.log(entrepreneurs);*/
    
for (var i = 0; i < entrepreneurs.length; i++) {
    
console.log(entrepreneurs[i]);
   
  }
  const bornInThe70s = entrepreneurs.filter(element => element.year > 1969 && element.year < 1980);

console.log("Liste des entrepreneurs qui sont nés dans les années 70");
console.log(bornInThe70s);

const names = bornInThe70s.map(element => `${element.first} ${element.last}`);

console.log("Liste de leur nom et prénom :");
console.log(names);

const agesToday = bornInThe70s.map(element => `- ${element.first} ${element.last} a ${2020 - element.year} ans.`).join("\n");

console.log("Leur âge aujourd'hui :");
console.log(agesToday);

const sortByName = bornInThe70s.sort((a,b) => (a.last > b.last) ? 1 : ((b.last > a.last) ? -1 : 0));

console.log("Liste triée par ordre alphabétique :");
console.log(sortByName)