////////// Insérez ici votre code  ///////////////////////

animals = animals.sort().reverse()
                .filter(animal => animal[0] !== "e" && animal[0] !== "m")
                .filter(animal => !animal.includes("ll"))



let search = function(searchText){
    return animals.filter(animal => animal.includes(searchText.toLowerCase()))
}

///////////////////////////////////////////////