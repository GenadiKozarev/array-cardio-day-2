const people = [
    { name: 'Rudolph', year: 1988 },
    { name: 'Sarah', year: 1986 },
    { name: 'Tommy', year: 1970 },
    { name: 'Alex', year: 2015 },
];
console.table(people);

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 },
];
console.table(comments);

// Is at least one person 18 or older?
const isAdult = people.some(person => {
    const currentYear = new Date().getFullYear();
    return currentYear - person.year >= 18;
});
console.log({ isAdult });

// Is everyone 18 or older?
const areAllAdults = people.every(person => {
    const currentYear = new Date().getFullYear();
    return currentYear - person.year >= 18;
});
console.log({ areAllAdults });

// Find the comment with the ID of 823423
const findCommentById = id => comments.find(comment => comment.id === id);
const { text } = findCommentById(823423);
console.log(`Found comment id 823423: '${text}'`);

// Find the index of the comment with ID 823423 and then delete that comment
const index = comments.findIndex(comment => comment.id === 823423);
const result = comments.splice(index, 1);
console.log(`Comment ID ${result[0].id} was deleted!`);
console.table('Here is an updated comments table: ');
console.table(comments);
