

// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

const toggle = document.getElementById('powerSwitch');
const v1 = document.getElementById('input1');
const v2 = document.getElementById('input2');
const ledimg = document.getElementById("ledimg");


toggle.addEventListener('change', function() {
            
    if (toggle.checked) {
    v1.removeAttribute('disabled');
    v2.removeAttribute('disabled');
    
    
    } 
    else {
    v1.setAttribute('disabled',true);
    v2.setAttribute('disabled', true);
    v1.setAttribute("value","0");
    v2.setAttribute("value","0");
    ledimg.src = "images/redled.jpg"
    document.getElementById('ipv1').value= '';
    document.getElementById('ipv2').value = '';
   
   
    }
 })
function show(){
        

            const v1input = document.getElementById('input1');
            const text1Input = document.getElementById('ipv1');
            v1input.addEventListener('input', function(){
                text1Input.value = v1input.value;
                
            })
            
            
            var x= document.getElementById('ipv1').value;
            var y = document.getElementById('ipv2').value;                
            var led = document.getElementById("ledimg");
         
          
            if(x=="0"&&y=="0"){
    
             led.src = "images/redled.jpg"
             }else{
           
             led.src = "images/greenled.jpg"
             }
             }
function show1(){
        const v2Input = document.getElementById('input2');
        const text2Input = document.getElementById('ipv2');
        v2Input.addEventListener('input', function(){
              text2Input.value = v2Input.value;
         })
        var x= document.getElementById('ipv1').value;
        var y = document.getElementById('ipv2').value;
        var led = document.getElementById('ledimg');
    
       
        if(x=="0" && y=="0"){
            led.src = "images/redled.jpg"
        }else{
            led.src = "images/greenled.jpg"
        }
     
        }


        var tableindex = 1;                    
        function add(){
            let table = document.getElementById('tableBody');
            var a = document.getElementById('ipv1').value.trim();
            var b = document.getElementById('ipv2').value.trim();
          if(toggle.disabled == true){
            alert("Make the connections first");;
          }
          else if(toggle.checked == false){
            alert("Switch on the power button first");
          }
          else if(toggle.checked == true && a == "" ){
            alert("Give input voltage 1");
          }
          else if(a!= '' && b== ""){
            alert("Give input voltage v2");
          }
          else if(a!= "" && b!= ""){

          
            let row = document.createElement('tr')
            let c1 = document.createElement('td')
            let c2 = document.createElement('td')
            let c3 = document.createElement('td')
            let c4 = document.createElement('td')
            
            c1.innerText = tableindex;
            tableindex+= 1
            c2.innerText = document.getElementById('ipv1').value;
            c3.innerText = document.getElementById('ipv2').value;
            var x= document.getElementById('ipv1').value;
            var y = document.getElementById('ipv2').value; 
            if(x=="0"&&y=="0"){
                c4.innerText="0";
            }else{
                c4.innerText="5";
            }

           
        row.appendChild(c1);
        row.appendChild(c2);
        row.appendChild(c3);
        row.appendChild(c4);
                                        
        table.appendChild(row)
        }
        }
    
    
            
     

        // var yy=document.getElementById("check")
        // yy.onclick=checkk;
        function checkk()
        {
            if(connections.length==0){
                alert("Please make the connections first");
                return false;
            }
           if(connections.length<3){
            console.log("Wrong Connections: Less than 4 connections");
            alert("The connections are wrong.\nPlease go through the instructions once")
           return false}
          
            if (connections.length > 0) {
                var listDiv = []
                 for (var j = 0; j < connections.length; j++) {
                    listDiv.push(connections[j].sourceId)
                    listDiv.push(connections[j].targetId)       
                }
                var f=0
                var num=[]
                for(i=0;i<6;i++){
                 num[i]=parseInt(listDiv[i].substring(14));
                    //alert(num[i]);
                }
              
             for(var i=0;i<6;i+=2)
             {
                 if((num[i]+1==num[i+1])||(num[i]-1==num[i+1])) continue
                 else {f=1;break;}
             }
             
             if(f!=0) {
             alert("Wrong Connections\nPlease go through the instructions once");
             return false;
             }
            }
            if (f==0) {
                alert("The connections are right.\nSwitch on the power button to start the experiment.");
                // document.getElementById("check").remove();
                document.getElementById("powerSwitch").style.cursor='pointer';
                document.getElementById("powerSwitch").disabled=false;
                // document.getElementById("check").setAttribute('background-color')
                yy.style.backgroundColor = 'gray';
                yy.style.color = 'white';
            
             
                // document.getElementById("start").style.backgroundColor='green';
                // document.getElementById("start").style.color='white';
               
                return true;
             }
            
        }
      
            showConnectionInfo = function (listDiv) {
               
                     console.log(listDiv)
            },
            hideConnectionInfo = function () {
                listDiv.style.display = "none";
            },
            connections = [],
            
            updateConnections = function (conn, remove) {
                if (!remove) connections.push(conn);
                else {
                    var idx = -1;
                    for (var i = 0; i < connections.length; i++) {
                        if (connections[i] == conn) {
                            idx = i;
                            break;
                        }
                    }
                    if (idx != -1) connections.splice(idx, 1);
                }
                if (connections.length > 0) {
                    var listDiv = []
                     for (var j = 0; j < connections.length; j++) {
                        listDiv.push(connections[j].sourceId)
                        listDiv.push(connections[j].targetId)
    
                            
                    }
                    showConnectionInfo(listDiv);
                } else
                    hideConnectionInfo();
            };
  
        
      jsPlumb.ready(function () {

        var instance = jsPlumb.getInstance();
       

    
        // suspend drawing and initialise.
        instance.batch(function () {
    
            // bind to connection/connectionDetached events, and update the list of connections on screen.
            instance.bind("connection", function (info, originalEvent) {
                updateConnections(info.connection);
            });
            instance.bind("connectionDetached", function (info, originalEvent) {
                updateConnections(info.connection, true);
            });
    
            instance.bind("connectionMoved", function (info, originalEvent) {
                //  only remove here, because a 'connection' event is also fired.
                // in a future release of jsplumb this extra connection event will not
                // be fired.
                updateConnections(info.connection, true);
            });
    
            
            // configure some drop options for use by all endpoints.
            var exampleDropOptions = {
                tolerance: "touch",
                hoverClass: "dropHover",
                activeClass: "dragActive"
            };
    
            var exampleEndpoint2 = {
                endpoint: ["Dot", { radius: 4 }],
                paintStyle: { fill: "black" },
                isSource: true,
                scope: "green",
                connectorStyle: { stroke: "black", strokeWidth: 5 },
                connector: ["Bezier", { curviness: 10 }],
                maxConnections:1 ,
                isTarget: true,
                dropOptions: exampleDropOptions,
                detachable: false
            };
            var exampleEndpoint3 = {
                endpoint: ["Dot", { radius: 4 }],
                paintStyle: { fill: "black" },
                isSource: true,
                scope: "green",
                connectorStyle: { stroke: "black", strokeWidth: 5 },
                connector: ["Bezier", { curviness: -40 } ],
                maxConnections:1 ,
                isTarget: true,
                dropOptions: exampleDropOptions,
                detachable: false
            };
            var exampleEndpoint4 = {
                endpoint: ["Dot", { radius: 4 }],
                paintStyle: { fill: "red" },
                isSource: true,
                scope: "green",
                connectorStyle: { stroke: "red", strokeWidth: 5 },
                connector: ["Bezier", { curviness: -20 }],
                maxConnections:1 ,
                isTarget: true,
                dropOptions: exampleDropOptions,
                detachable: false
            };
            var exampleEndpoint5 = {
                endpoint: ["Dot", { radius: 4 }],
                paintStyle: { fill: "red" },
                isSource: true,
                scope: "green",
                connectorStyle: { stroke: "red", strokeWidth: 5 },
                connector: ["Bezier", { curviness: -20 } ],
                maxConnections:1 ,
                isTarget: true,
                dropOptions: exampleDropOptions,
                detachable: false
            };
            instance.addEndpoint("dragDropWindow1",{ anchor: [0.75, 0, 0, -1] }, exampleEndpoint4);
            instance.addEndpoint("dragDropWindow2", { anchor: [0.75, 0, 0, -1] }, exampleEndpoint5);
            
            instance.addEndpoint("dragDropWindow5", { anchor: [0.75, 0, 0, -1] }, exampleEndpoint3);
           
            instance.addEndpoint("dragDropWindow6", { anchor: [0.75, 0, 0, -1] }, exampleEndpoint2);
            
            instance.addEndpoint("dragDropWindow3", { anchor: [0.75, 0, 0, -1] }, exampleEndpoint5);
            instance.addEndpoint("dragDropWindow4", { anchor: [0.75, 0, 0, -1] }, exampleEndpoint4);
            
            instance.draggable(jsPlumb.getSelector(".drag-drop-demo .window"));
          
         
           
               
           
            window.addEventListener('resize', function(){
                instance.repaintEverything();
            })
            var hideLinks = jsPlumb.getSelector(".drag-drop-demo .hide");
            instance.on(hideLinks, "click", function (e) {
                instance.toggleVisible(this.getAttribute("rel"));
                jsPlumbUtil.consume(e);
            });
    
            var dragLinks = jsPlumb.getSelector(".drag-drop-demo .drag");
            instance.on(dragLinks, "click", function (e) {
                var s = instance.toggleDraggable(this.getAttribute("rel"));
                this.innerHTML = (s ? 'disable dragging' : 'enable dragging');
                jsPlumbUtil.consume(e);
            });
    
            var detachLinks = jsPlumb.getSelector(".drag-drop-demo .detach");
            instance.on(detachLinks, "click", function (e) {
                instance.deleteConnectionsForElement(this.getAttribute("rel"));
                jsPlumbUtil.consume(e);
            });

          
    
            instance.on(document.getElementById("clear"), "click", function (e) {
    
                instance.detachEveryConnection();
                showConnectionInfo("");
                jsPlumbUtil.consume(e);
            });
            
            window.addEventListener('afterprint', function () {
                instance.repaintEverything();
            });
         
            
        });
       
        

        jsPlumb.fire("jsPlumbDemoLoaded", instance);
    
    });
    function printTable(){
        var tablerows = document.getElementById('mytable').getElementsByTagName('tbody')[0].getElementsByTagName('tr');
        if (tablerows.length === 0) {
         alert("Conduct the whole experiment first.");
         } else {
         // Print the table
         window.print();
       }
       }
