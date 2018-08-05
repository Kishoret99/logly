/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        requestLog();
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
var callFilter = [{
    "name": "date", 
    "value": 0, 
    "operator": ">="
}]

function requestLog() {
    window.plugins.callLog.hasReadPermission(onSuccess, onError);
}

function onSuccess(response) {
    if(response) {
        window.plugins.callLog.getCallLog( callFilter, function(data) {
            console.log(data);
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