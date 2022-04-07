// The "Superpowers"

const superheroes = [{
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
    },
    {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
    },
    {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
    },
    {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
    },
    {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
    },
    {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
    },
    {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
    },
    {
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
    },
    {
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
    },
    {
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
    },
    {
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
    },
    {
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
    },
    {
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
    },
    {
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
    },
    {
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "unknown"
    }
    ]
        // Answer no.1 Using .map
    const names = superheroes.map(superheroe => {
        return superheroe.name;
    })
    console.log(names);

        // Answer no.2 Using .filter
    const light = superheroes.filter(superheroe => {
        return superheroe.weight < 190;
    })
    console.log(light);

        // Answer no.3 Using .filter
    const bigWeigh = superheroes.filter(superheroe => {
        return superheroe.weight == 200;
    })

    const bigWeighNames = bigWeigh.map(superheroe => {
        return superheroe.name;
    })
    console.log(bigWeighNames);

            // Short Code 
    const weighChain = superheroes.filter(superheroe => superheroe.weight == 200).map(superheroe => superheroe.name);
    console.log(weighChain);

        // Answer no.4 
    const comics = superheroes.map(superheroe => superheroe.first_appearance);
    console.log("first appearances: ", comics);

        // Answer no.5
    const comicsDC = superheroes.filter(superheroe => superheroe.publisher == "DC Comics");
    const marvel = superheroes.filter(superheroe => superheroe.publisher == "Marvel Comics");
    console.log("DC Comics: ", comicsDC,  "Marvel Comics: ", marvel);

        // Answer no.6
    const weighDC = comicsDC.map(superheroe => superheroe.weight !== "unknown" ? parseInt(superheroe.weight, 10) : 0)
    .reduce((weight1, weight2) => weight1 + weight2);
    console.log(weighDC);

        
    const weighHeroes = comicsDC.map(superheroe => {
        if (superheroe.weight !== "unknown") {
            return parseInt(superheroe.weight, 10);
        } else {
            return 0;
        }
    })
        // Total Weight
    const weighHeroesTotal = weighHeroes.reduce((weight1, weight2) => weight1 + weight2);
    
    console.log(weighHeroes, weighHeroesTotal);

        // Answer no.7
    const weighMarvel = marvel.map(superheroe => superheroe.weight !== "unknown" ? parseInt(superheroe.weight, 10) : 0)
    .reduce((weight1, weight2) => weight1 + weight2);
    console.log(weighMarvel);

        /* Answer Bonus
    const toughest = superheroes.reduce(superheroe => superheroe.toughest);
    console.log(toughest); */