// Without global

var pattern = /h./

pattern.exec('h1 h2 h3') // ["h1"]
pattern.exec('h1 h2 h3') // ["h1"]
pattern.exec('h1 h2 h3') // ["h1"]


//With global

var pattern = /h./g

pattern.exec('h1 h2 h3') // ["h1"]
pattern.exec('h1 h2 h3') // ["h2"]
pattern.exec('h1 h2 h3') // ["h3"]
pattern.exec('h1 h2 h3') // null
pattern.exec('h1 h2 h3') // ["h1"]
