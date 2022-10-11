const findTheOldest = function(people) {
    let date = new Date().getFullYear();
    let oldestAge = 0;
    let oldestPerson = [];
    for (let i = 0; i < people.length; i++) {
        if (people[i].yearOfDeath === undefined) {
            if(oldestAge < (date - people[i].yearOfBirth)) {
                oldestAge = (date - people[i].yearOfBirth)
                oldestPerson = people[i];
                continue;
            }
        }
        if (oldestAge < (people[i].yearOfDeath - people[i].yearOfBirth)) {
            oldestAge = (people[i].yearOfDeath - people[i].yearOfBirth);
            oldestPerson = people[i];
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
