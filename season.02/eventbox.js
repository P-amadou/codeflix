const EventEmitter = require('events');
const myEmitter = new EventEmitter();
const myEmitter2 = new EventEmitter();

function empty() {
    myEmitter.on('hi', () => {
        console.log('Ch0ooooooper!');
    });
    myEmitter.emit('hi');
}
function withArgs(tabNames=[]) {
    myEmitter2.on('newFellow',()=> {
        for (let i = 0; i < tabNames.length; i++) {
            console.log("Here come's a new pirate ->>",tabNames[i]);
        }
    })
    myEmitter2.emit('newFellow');
}

module.exports={
    empty,
    withArgs
}