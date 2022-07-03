const findTheOldest = function(people) {
    let oldestPersonAge = 0;
    let oldestPerson;
    const date = new Date();
    let yearTo;
    people.forEach(person => {
        person["yearOfDeath"] === undefined ? yearTo = date.getFullYear() : yearTo = person["yearOfDeath"];
        let age = yearTo - person["yearOfBirth"];
        if (age > oldestPersonAge) {
            oldestPersonAge = age;
            oldestPerson = person;
        }
    });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
