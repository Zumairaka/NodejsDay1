var events = require('events');
var eventEmitter = new events.EventEmitter();
function ringBell(){
    console.log('ring,ring,ring');
}
eventEmitter.on('doorOpen',ringBell); // Event Binding // Register an Event
eventEmitter.emit('doorOpen');        // Event Firing //raise an Event

//direct function can be defined ie callback

eventEmitter.on('myevent',(arg1,arg2)=>{
    console.log("id is "+arg1+" and name is "+arg2)
});
eventEmitter.emit('myevent',1,'Rahul');