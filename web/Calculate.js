var xmlHttp = createXmlHttpRequestObject();
function createXmlHttpRequestObject() {
    var xmlHttp;

    if(window.ActiveXObject){
        try{
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }catch (e){
            xmlHttp = false;
        }
    }else{
        try{
            xmlHttp = new XMLHttpRequest();
        }catch (e){
            xmlHttp = false;
        }
    }

    if(!xmlHttp){
        alert("can't create object")
    }else
        return xmlHttp;
}
function calc() {
    if(xmlHttp.readyState==0 || xmlHttp.readyState==4){
        var a = encodeURIComponent(document.getElementById("a").value);
        var b = encodeURIComponent(document.getElementById("b").value);
        var c = encodeURIComponent(document.getElementById("c").value);
        xmlHttp.open("GET", "http://localhost:8080/CalcServlet?a="+a+"&b="+b+"&c="+c, true);
        xmlHttp.onreadystatechange  = handleServerResponse;
        xmlHttp.send(null);
    }else {
        setTimeout('calc()',1000);
    }
}
var index = 0;
function handleServerResponse() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {


            //var resp = JSON.parse(xmlHttp.responseText);
            var x1,x2,d,message;
            var event = JSON.parse(xmlHttp.responseText, function(key, value) {
                if (key == 'discriminant') d = value;
                if (key == 'x1') x1 = value;
                if (key == 'x2') x2 = value;
                if (key == 'message') message = value;

            });

            index++;
            var table = document.getElementById("resultTable");
            var trelem = document.createElement('tr');
            var tdelem1 = document.createElement('td');
            var tdelem2 = document.createElement('td');
            var tdelem3 = document.createElement('td');
            var tdelem4 = document.createElement('td');
            tdelem1.innerHTML = d;
            tdelem2.innerHTML = x1;
            tdelem3.innerHTML = x2;
            tdelem4.innerHTML = message;
            trelem.appendChild(tdelem1);
            trelem.appendChild(tdelem2);
            trelem.appendChild(tdelem3);
            trelem.appendChild(tdelem4);
            trelem.onclick = function(event) {
                trelem.parentNode.removeChild(trelem);
            }
            table.appendChild(trelem);

        }

    }
}
function initTable() {
    var table = document.getElementById("resultTable");
    var trelem = document.createElement('tr');
    var tdelem1 = document.createElement('th');
    var tdelem2 = document.createElement('th');
    var tdelem3 = document.createElement('th');
    var tdelem4 = document.createElement('th');
    tdelem1.innerHTML = 'discriminant';
    tdelem2.innerHTML = 'x1';
    tdelem3.innerHTML = 'x2';
    tdelem4.innerHTML = 'message';
    trelem.appendChild(tdelem1);
    trelem.appendChild(tdelem2);
    trelem.appendChild(tdelem3);
    trelem.appendChild(tdelem4);
    table.appendChild(trelem);

}





