var amigoModule = amigoModule || {};

amigoModule.setUpSharepoints = function(Amigo) {

//====== add listener to sharepoint area
    addEventListener = function() {
        if (document.getElementById("jg_sharepoint").addEventListener) {
            (document.getElementById("jg_sharepoint")).addEventListener('click', triggerShare, false);
        } else if (document.getElementById("jg_sharepoint").attachEvent) {
            (document.getElementById("jg_sharepoint")).attachEvent('onclick', triggerShare);
        };
    };

    var shareChannelName = "";

    //====== filter listener to individual sharepoints
    function triggerShare(e,shareChannelName) {
        if (e.target == document.getElementById('shareChannel1')) {
            shareChannelName = "shareChannel1";
        } else if (e.target == document.getElementById('shareChannel2')) {
            shareChannelName = "shareChannel2";
        };
    };

    addEventListener();


    //====== creating a shareToken for the first channel (Facebook)
    Amigo.createToken('shareChannel1', {
        userId: '1234',
        email: 'john@hotmail.com',
        metadata: {
            sharepointName: 'jg_sharepoint',
            token: Amigo.shareToken,
            alias: '',
            queryParamName: 'ast',
            abs: true
        }
    });

    Amigo.createToken();

};

touchpointInfo = function(Amigo,shareChannelName) {

//====== adding data to the Touchpoint page DOM

    var shareTokenSpan;
    var sharepointNameSpan;
    var advocateIdSpan;
    var shareChannelSpan;

    shareTokenSpan = document.getElementById("shareToken");
    sharepointNameSpan = document.getElementById("sharepointName");
    advocateIdSpan = document.getElementById("advocateId");
    shareChannelSpan = document.getElementById("shareChannel");
    shareTokenSpan.innerHTML = Amigo.shareToken;
    sharepointNameSpan.innerHTML = amigoData.sharepointName;
    advocateIdSpan.innerHTML = amigoData.userId;
    shareChannelSpan.innerHTML = shareChannelName;
};