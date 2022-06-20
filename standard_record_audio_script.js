var username, noteName, textEntered, target;  //declare variables

noteName = document.getElementByld('noteName'); //Element that holds note
 
function writelabel(e)  // Declare function
{
if (!e) {               // if event object not present
e = window .event;      // use  IE5-8 fallback
}

target =event .target || event . srcElement;  //get target of event
textEntered = e.target .value;                //Value of that element
noteName.textContent = textEntered ;          //Update Note text
}

if (document .addEventlistener)
 //If event listener suppo rt ed
document.addEventlistener('click', function(e){ //call For any click document
 //Call r ecorderControl s()
recorderControls(e);
 //Capture during bubbl e phase
}, false) ;

// If input event fi res on username i nput call wr itelabel ()
username .addEventlistener('input', writelabel, false);
else {
 //Otherwise
document .attachEvent('onclick' , function(e){ // IE fall back: any cl ick
 Calls recorderControls(e)
recorderControls(e);
} ) ;

//If keyup event f ires on username input call wr itelabel()
username.attachEvent('onkeyup', writelabel, false);
}


function recorderControls(e){

    if (!e) {
    e = window.event;
    }
    target = event .target || event.srcElement;

    if (event.preventDefault)
     {
    e.preventDefault();
    else {
    
    event.returnValue = false;
    }
    switch(target .getAttribute('data-state')){
    case ' record' :
    record(target);
    break;

    case 'stop':
    stop(target);
    break;
    // More buttons coul d go here ..
    }
    };

    function record(target) {
    target.setAttribute('data-state', 'stop') ;
    target.textContent = 'stop';
    }
    function stop(target) {
    target.setAttribute('data-state ','record');
    target.textContent = 'record';
    }
