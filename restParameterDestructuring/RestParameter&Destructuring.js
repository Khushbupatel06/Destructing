function sum(...nums) {
    console.log(nums);
    return nums.reduce((total, el) => total + el)
}

function raceResults(gold, silver, ...everyoneElse){
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`THANK YOU TO EVERYONE ELSE: ${everyoneElse}`)
}

// ===============================================================
// DESTRUCTURING ARRAYS/OBJECECTS/PARAMETERS
// ===============================================================

const scores = [9580146, 665587, 485367, 635897, 369874, 954781, 125436];

const highScore = scores[0];
const secondHighScore = scores[1];

const [gold, silver, bronze, ...everyoneElse] = scores;

// =================================================
// DESTRUCTURING FROM OBJECT
// =================================================

const user = {
    email: 'harvey@yahoo.com',
    password: 'sCoehni6784*',
    firstName: 'Harvey',
    lastName: 'Sceohni',
    born: 1935,
    died: 2020,
    bio: 'Harvey Bernard Milk was an American Plitician and the first openly gay eleted official in the history of califonia, where he was elected to the San Francisco Board of Supervisors',
    city: 'San Francisco', 
    state: 'California' 
}
const firstName = user.firstName;
const lastName = user.lastName;
const email = user.email;

const {email, firstName, lastName, password, city, born, bio, died, state} = user;

const { born: birthYear, died: deathYear } = user;

const user2 = {
    email: 'Stacy@yahoo.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa', 
    state: 'Oklahoma' 
}
const { city, state, died = 'N/A' } = user2;

// =================================================
// DESTRUCTURING FROM PARAMETERS
// =================================================
function fullName(user) {
    return `${user.firstName} ${user.lastName}`
}
function fullName(user) {
    const { firstName, lastName } = user;
    return `${firstName} ${lastName}`
}
function fullName({firstName, lastName}) {
    return `${firstName} ${lastName}`
}

const movies = [
        {
            title: 'Amadeus',
            score: 99,
            year: 1984
        },
        {
            title: 'Stand By Me',
            score: 85,
            year: 2013
        },
        {
            title: 'Parasite',
            score: 95,
            year: 2019
        },
        {
            title: 'Alien',
            score: 90,
            year: 1986
        },
        {
            title:'Waterworld',
            score:62,
            year: 1995
        },
        {
            title:'Jingle All The Way',
            score: 71,
            year: 1996
        },
        {
            title:'Notting Hill',
            score: 77,
            year: 1999
        },
        {
            title: '13 Going On 30',
            score: 70,
            year: 1979
        }
    ]
    movies.filter((movie) => movie.score >= 90)
    movies.filter(({score}) => score >= 90)

movies.map(movie => {
    return `${movie.title} (${movie.year}) is rated ${movie.score}`
});
                    // OR WRITE IT THIS WAY
movies.map(({title, score, year}) => {
    return `${title} (${year}) is rated ${score}`
});