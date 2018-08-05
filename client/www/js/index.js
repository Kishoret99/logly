var callLog = [];
function add(data) {
    var length = data.length;
    for(var i = 0; i < length; i++) {
        var newDiv = new ListItem(data.pop()).newDiv;
        var list = document.getElementsByClassName('list')[0]
        list.insertBefore(newDiv, list.firstChild)
    }
}

var callType = new Map();
callType.set(1, 'Incoming');
callType.set(2, 'Outgoing')
callType.set(3, 'Missed')

function ListItem(contact) {
    this.newDiv = document.createElement("div", {});
    var newH2 = document.createElement("h2");
    var newP = document.createElement("p");

    newH2.innerHTML = contact.number;
    newP.innerHTML = callType.get(contact.type);

    this.newDiv.classList.add('item');
    newP.classList.add('text-grey-500');

    this.newDiv.appendChild(newH2);
    this.newDiv.appendChild(newP);
}

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.addEventListener('resume', this.onDeviceReady.bind(this), false);  
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        // this.receivedEvent('deviceready');
        if(!callLog || !Array.isArray(callLog) || callLog.length < 1) {
            requestLog(callFilter(0));
        } else {
            requestLog(callFilter(callLog[0].date)) 
        }
    }

    // Update DOM on a Received Event
};

app.initialize();
function callFilter(date) {
    return [{
        "name": "date", 
        "value": date, 
        "operator": ">"
    }]
}

function requestLog(date) {
    window.plugins.callLog.hasReadPermission(onISuccess, onError);
    function onISuccess(response) {
        onSuccess(response, date)
    }
}

function onSuccess(response, date) {
    if(response) {
        window.plugins.callLog.getCallLog(date, function(data) {
            console.log(data);
            callLog = callLog.concat(data);
            add(data);
        }, function(err) {
            console.log('error while getting call log', err);
        })
    } else {
        window.plugins.callLog.requestReadPermission(requestLog, (err) => console.log('error while requesting the permission', err))
    }
}

function onError(err) {
    console.log('error while checking the permission', err)
}

var a = [
    {
        cachedNumberLabel: 0,
        cachedNumberType: 0,
        contact: 1,
        date: 1533404602426,
        duration: 37,
        name: "Sai Akhil",
        new: 1,
        number: "9967819918",
        phoneAccountId: "89014103211118510720",
        type: 2,
        viaNumber: ""
    },
    {
        cachedName: "Vivek Vardhan",
        cachedNumberLabel: 0,
        cachedNumberType: 2,
        contact: 259,
        date: 1533410893339,
        duration: 8,
        name: "Vivek Vardhan",
        new: 1,
        number: "+918332870828",
        phoneAccountId: "89014103211118510720",
        photo: "content://com.android.contacts/contacts/259/photo",
        thumbPhoto: "content://com.android.contacts/contacts/259/photo",
        type: 2,
        viaNumber: ""
    },
    {
        cachedNumberLabel: 0,
        cachedNumberType: 0,
        contact: 1,
        date: 1533410829248,
        duration: 6,
        name: "Sai Akhil",
        new: 1,
        number: "22222333",
        phoneAccountId: "89014103211118510720",
        type: 2,
        viaNumber: ""
    }
]