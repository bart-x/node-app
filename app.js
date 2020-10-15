// const os = require('os');
// // console.log(os);
// console.log('Platform: ', os.platform());
// console.log('Arch: ', os.arch());
// console.log('Type:', os.userInfo());

const fs = require('fs');

const genders = [
    'female',
    'male'
];
const MaleNames = [
    'Adam',
    'Peter',
    'Antoni',
    'Maxwell',
    'Conner',
    'Farhan',
    'Alan',
    'Harley',
    'Erik',
    'Charles',
    'Robbie',
    'Omar',
    'Oliver',
    'Jimmy',
    'Yasin',
    'Ellis',
    'Kieron',
    'Anas',
    'Hamish',
    'Leonard',
    'Roman',
    'Connor',
    'Maximilian',
    'Zakariya',
    'Dale',
    'Owain',
    'Tristan',
    'Clayton',
    'Theodore',
    'Amir',
    'Usman',
    'Guy',
    'Saul',
    'Kyle',
    'Umar',
    'Imran',
    'Cory',
    'Jenna',
    'Rhys',
    'Douglas',
    'Ricky',
    'Lewis',
    'Muhammad',
    'Hashim',
    'Cole',
    'Declan',
]

const FemaleNames = [
    'Lillian',
    'Nellie',
    'Chantelle',
    'Tia',
    'Christine',
    'Karen',
    'Hayley',
    'Alice',
    'Scarlet',
    'Tara',
    'Holly',
    'Alicia',
    'Hazel',
    'Fern',
    'Ida',
    'Monica',
    'Lia',
    'Sharon',
    'Ayla',
    'Layla',
    'Bertha',
    'Ellen',
    'Max',
    'Carla',
    'Susan',
    'Halima',
    'Aimee',
    'Michaela',
    'Lauren',
    'Kara',
    'Erika',
    'Gracie',
    'Nora',
    'Melissa',
    'Harmony',
    'Cassie',
    'Troy',
    'Alina',
    'Isobelle',
    'Angela',
    'Victoria',
    'Lillie',
    'Leonie',
    'Sally',
    'Bethany',
    'Martha',
    'Carly',
    'Kathleen',
    'Alyssa',
    'Connie',
    'Maisie',
]
const LastNames = [
    'Mccarthy',
    'Cunningham',
    'Townsend',
    'Fischer',
    'Donnelly',
    'Bush',
    'Herbert',
    'Crawford',
    'Walters',
    'Potter',
    'Cox',
    'Farmer',
    'Wolf',
    'Whelan',
    'Harrington',
    'Morgan',
    'Stevenson',
    'Richardson',
    'Steele',
    'Black',
    'Spence',
    'Burns',
    'Jensen',
    'Garner',
    'Smith',
    'Adams',
    'Reese',
    'Barnett',
    'Thompson',
    'Zhang',
    'Jenkins',
    'Mathis',
    'Allen',
    'Sparks',
    'Simpson',
    'Martinez',
    'Conner',
    'Thomas',
    'Jackson',
    'Moore',
    'Mendoza',
    'Daniels',
    'Ford',
    'Carroll',
    'Barker',
    'Kay',
    'Olson',
    'Lewis',
    'Torres',
    'Baker',
    'Osborne',
    'Reyes',
    'Leon',
    'Chapman',
    'Griffin',
]
const people = [];

function randChoice() {
    for (i = 0; i < 20; i++) {
        const genGender = Math.floor(Math.random() * genders.length);
        const randGender = genders[genGender];
        people.push('gender: ' + randGender);
        if (randGender === 'female') {
            const genFemaleName = Math.floor(Math.random() * FemaleNames.length);
            const randFemaleName = FemaleNames[genFemaleName];
            people.push('name: ' + randFemaleName);
        } else {
            const genMaleName = Math.floor(Math.random() * MaleNames.length);
            const randMaleName = MaleNames[genMaleName];
            people.push('name: ' + randMaleName);
        }
        const genLastName = Math.floor(Math.random() * LastNames.length);
        const randLastName = LastNames[genLastName];
        people.push('Last name: ' + randLastName);
        console.log('randLastName:', randLastName);
        const genAge = Math.floor(Math.random() * 60) + 18;
        people.push('Age: ' + genAge);
        console.log('people', people);
    }
}
randChoice();
fs.writeFile('people.json', people, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});