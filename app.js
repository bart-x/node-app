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
]
const people = [];

function randChoice() {
    for (i = 0; i < 20; i++) {
        let person = {};
        const genGender = Math.floor(Math.random() * genders.length);
        person.gender = genders[genGender];
        if (person.gender === 'female') {
            const genFemaleName = Math.floor(Math.random() * FemaleNames.length);
            person.FemaleName = FemaleNames[genFemaleName];

        } else {
            const genMaleName = Math.floor(Math.random() * MaleNames.length);
            person.MaleName = MaleNames[genMaleName];
        }
        const genLastName = Math.floor(Math.random() * LastNames.length);
        person.LastName = LastNames[genLastName];

        person.age = Math.floor(Math.random() * 60) + 18;
        people.push(person);
        console.log('people', people);
    }
}
randChoice();
const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});