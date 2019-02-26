'use strict';

var TestRun = require('../../TestRun');
const assert = require('assert');
var cybersourceRestApi = require('cybersource-rest-client');
var path = require('path');
var filePath = path.resolve(path.join('Data','Configuration.js'));
var configuration = require(filePath);
//var createInstrumentIdentifier = require('./CreateInstrumentIdentifierTest');
var constUtility = require(path.resolve((path.join('Utility', 'ConstantUtility.js'))));

var api = null;

var obj = new loadFileData();

function loadFileData() {
    var count = 0;
    var resArr = [];
    var inputData = [];
    var sync = false;
    var assertMessage = [];

    var configObject = new configuration();
    api = new cybersourceRestApi.PaymentInstrumentsApi(configObject);

    // Call Back Function 
    var callback = function (error, data, response) {
        
        
        if (error) {
            resArr[count] = 'Fail:' + response.status;
            assertMessage[count] = response.body.errors[0].message;
            count++;
        } else {
            try {
                if (data._embedded.paymentInstruments[0]._embedded.instrumentIdentifier.id == null)
                {
                    resArr[count] = 'Assertion Failed:' + response.status;
                    assertMessage[count]=constUtility.messageNullTokenId;
                }
                else{
                 var allowedResponsecodes = ["200", "201"];
                 var tobeAssertValue = allowedResponsecodes.includes(JSON.stringify(response.status));
                 assert.equal(true, tobeAssertValue);
                 resArr[count] = 'Pass:' + response.status;
                 assertMessage[count] = inputData['message'];
                }  
                count++;
            } catch (ex) {
                if((ex.name).indexOf("AssertionError") > -1)
                 {
                 resArr[count] = 'Assertion Failed-' + response.status;
                 assertMessage[count] = inputData['message'];
                 }
                 else
                 {
                resArr[count] = 'Assertion Failed:' + response.status;
                assertMessage[count]=ex.message;
                }
                count++;
            }

        }
        
        sync = false;
    };


    // File Reading 
    var csv = require("fast-csv");
    var i = 0;
    var index = 0;
    var testId = [];
    var requestData = [];
    // Testing- Change File heasers and File name

    var csvStream = csv.fromPath(path.join('QaScripts','CSV_Files','TMS','CoreServices','RetrieveAllPaymentIdentifierForGivenInstrumentIdentifier.csv'),
        { headers: true });
      
    // Fetch Data From Input File 
    csvStream.on("data", function (data) {

        inputData = data;
        sync = true;
        testId[index] = data['testCaseId'];
        index++;

        var profileId = data['profileId'];
        var tokenId = data['tokenId'];
        var options = null;
        
        api.tmsV1InstrumentidentifiersTokenIdPaymentinstrumentsGet(profileId, tokenId, options,callback);
        while (sync) {
            require('deasync').sleep(100);
        }

    });
    // Load Data to OutPut File
    csvStream.on("end", function () {
        
        TestRun.WriteOutData(resArr, testId, 'RetrieveAllPaymentInstrumentsTest',assertMessage);
    });

}