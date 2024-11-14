const toggle = document.getElementById('powerSwitch');
  const vin = document.getElementById('Ipv');
  // const freq = document.getElementById('slider2');
  const vb = document.getElementById('bias');
  const signal = document.getElementById('signal');
  
  toggle.addEventListener('change', function(){
    if (toggle.checked) {
      vin.removeAttribute('disabled');
      // freq.removeAttribute('disabled');
      vb.removeAttribute('disabled');
      signal.removeAttribute('disabled');
    }
    else{
      vin.setAttribute('disabled',true);
      // freq.setAttribute('disabled', true);
      vb.setAttribute('disabled',true);
      signal.setAttribute('disabled',true);
    }
  })
  function show(){
    const vinInput = document.getElementById('Ipv');
    const text1Input = document.getElementById('ipv');
    vinInput.addEventListener('input', function(){
        text1Input.value = vinInput.value;
        
    })
}

function show1(){
    const vbInput = document.getElementById('bias');
    const text2Input = document.getElementById('biasvoltage');
    vbInput.addEventListener('change', function(){
        text2Input.value = vbInput.value;
        
    })
}
  function updateValue1(val) {

    document.getElementById('ipv').value = val;
    // Get the value from the range slider1
    // const voltagevalue = document.getElementById("slider1");
    // var voltagevaluealueDisplay = document.getElementById("ipv");
    // voltagevalue.addEventListener('input', function(){
    //   voltagevaluealueDisplay.value = voltagevalue.value ;
    // })
    // Display the current value
  }
  // function updateValue2() {
  //   // Get the value from the range slider2
  //   const frequencyvalue = document.getElementById("slider2");
  //   var frequencyvalueDisplay = document.getElementById("freq");
  //   frequencyvalue.addEventListener('input', function(){
  //     frequencyvalueDisplay.value = frequencyvalue.value;
  //   })
  //   // Display the current value
  // }
  
  function updateValue3(val) {

    document.getElementById('bias').value = val;
    // Get the value from the range slider2
    const biasvoltagevalue = document.getElementById("slider3");
    var biasvoltagevalueDisplay = document.getElementById("bias");
    biasvoltagevalue.addEventListener('input', function(){
      biasvoltagevalueDisplay.value = biasvoltagevalue.value;
  
    // Display the current value
    })
  }


function checkk()
{
  if(connections.length==0){
    alert("Please make the connections first");
    return false;
}
   if(connections.length<2){
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
        for(i=0;i<4;i++){
         num[i]=parseInt(listDiv[i].substring(14));
            //alert(num[i]);
        }
     for(var i=0;i<4;i+=2)
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
        document.getElementById("powerSwitch").disabled=false;
        document.getElementById("powerSwitch").style.cursor='pointer';
        yy.style.backgroundColor = "gray";
        yy.style.color ="white";
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
          connector: ["Bezier", { curviness: -20 }],
          maxConnections:1 ,
          isTarget: true,
          dropOptions: exampleDropOptions,
          cssClass: "custom-endpoint",
          detachable: false
      };
      var exampleEndpoint3 = {
          endpoint: ["Dot", { radius: 4 }],
          paintStyle: { fill: "black" },
          isSource: true,
          scope: "green",
          connectorStyle: { stroke: "black", strokeWidth: 5 },
          connector: ["Bezier", { curviness: -20 } ],
          maxConnections:1 ,
          isTarget: true,
          dropOptions: exampleDropOptions,
          cssClass: "custom-endpoint",
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
          cssClass: "custom-endpoint",
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
          cssClass: "custom-endpoint",
          detachable: false
      };
      instance.addEndpoint("dragDropWindow1",{ anchor: [0.75, 0, 0, -1] }, exampleEndpoint4);
      instance.addEndpoint("dragDropWindow2", { anchor: [0.75, 0, 0, -1] }, exampleEndpoint5);
      
      // instance.addEndpoint("dragDropWindow5", { anchor: [0.75, 0, 0, -1] }, exampleEndpoint3);
     
      // instance.addEndpoint("dragDropWindow6", { anchor: [0.75, 0, 0, -1] }, exampleEndpoint2);
      
      instance.addEndpoint("dragDropWindow3", { anchor: [0.75, 0, 0, -1] }, exampleEndpoint2);
      instance.addEndpoint("dragDropWindow4", { anchor: [0.75, 0, 0, -1] }, exampleEndpoint3);
      
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
      
  });


  jsPlumb.fire("jsPlumbDemoLoaded", instance);

});

let graph = document.getElementById("graph")

graph.addEventListener('click', function(){
    var a = document.getElementById("ipv").value.trim();
    // var b = document.getElementById("freq").value.trim();
    var b = document.getElementById("biasvoltage").value.trim();

    var c = -parseFloat(document.getElementById("ipv").value)-parseFloat(document.getElementById("biasvoltage").value);
    var d = document.getElementById("signal").value.trim();
  
    let exp1;
    let exp2;
  
    if(a!=="" && b!==""){

  switch(d){
    case "1":
        exp1= "a*(Math.sin(x))";
        exp2="a*(Math.sin(x))+c";
        break;
    case "2":
        exp1= "a*(Math.sign(Math.sin(x)))";
        exp2= "a*(Math.sign(Math.sin(x)))+c";
        break;
    case "3":
        exp1="a*(2/Math.PI)*(Math.asin(Math.sin(x)))";
        exp2="a*(2/Math.PI)*(Math.asin(Math.sin(x)))+c";
        break;
        default:
            exp1="0";
            exp2="0";
   }
  const xValues = [];
  const yValues = [];
  const yValues1 = [];
  for(let x=0;x<=10; x+=0.1){
    xValues.push(x);
    yValues.push(eval(exp1));
    yValues1.push(eval(exp2));
  }
  
  const inputTrace = {x: xValues, y: yValues, mode: "lines", name: "Input"};
  const outputTrace = {x: xValues, y: yValues1, mode: "lines", name: "Output"};

  const data = [inputTrace, outputTrace];
  const layout = {
    title: "Input and Output Waveforms",
    xaxis: {
      title: "Time(s)"
    },
    yaxis: {
      title: "Voltage(V)"
    }
  };
  Plotly.newPlot("myPlot",data,layout);
}
else{
  alert("conduct the whole experiment first")
}
});

function printTable(){
 
  // Print the table
window.print();
}