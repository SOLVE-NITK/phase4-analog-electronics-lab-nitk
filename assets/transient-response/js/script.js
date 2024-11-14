document.getElementById('b1').addEventListener('click', function(){
  var image1 = document.getElementById("rccircuit");
  image1.src = "images/rccircuit2.jpg";
  const a1 = document.getElementById("powerSwitch");
  a1.removeAttribute('disabled');
})

document.getElementById('b2').addEventListener('click', function(){
  var image2 = document.getElementById("rccircuit");
  image2.src = "images/rccircuit3.jpg";
  const a1 = document.getElementById("powerSwitch");
  a1.setAttribute('disabled',true);
  const inputvoltage = document.getElementById("Ipv");
const res = document.getElementById("Res");
const cap = document.getElementById("Cap");
inputvoltage.setAttribute('disabled',true);
res.setAttribute('disabled', true);
cap.setAttribute('disabled',true);

let graph1= document.getElementById('graph1')
graph1.addEventListener('click',function(){
  var a = document.getElementById('ipv').value.trim();  
  var b = document.getElementById('Res').value.trim();
  var c = document.getElementById('Cap').value.trim();
  
  
  if(a!=="" && b!=="" && c!==""){
    let  d= (a/b).toFixed(6)*1e6;
    let e = (b*c).toFixed(6);
    let exp = "d*(Math.exp(-x/e))"
    let exp1 = "-d*(Math.exp(-x/e))";
  const xValues1 = [];
  const yValues1 = [];
  const yValues12 = [];
  for(let x=0;x<=10; x+=0.1){
    xValues1.push(x);
    yValues1.push(eval(exp));
    yValues12.push(eval(exp1));
    
  }
  const inputTrace = {x: xValues1, y: yValues1, mode: "lines", name: "point1"};
  const outputTrace = {x: xValues1, y: yValues12, mode: "lines", name: "point2"};
  
  const data1 = [inputTrace,outputTrace];
  const layout1 = {
    title: "Current in RC discharging Circuit",
  xaxis: {
    title: "Time(s)",
    range: [0,3]
  },
  yaxis: {
    title: "Current(μA)"
  }
  };
  Plotly.newPlot("myPlot1",data1,layout1);
}
else{
  alert("Conduct the whole experiment first")
}
})
let graph2 = document.getElementById("graph2")

graph2.addEventListener('click', function(){


  var a = document.getElementById('ipv').value.trim();  
  var b = document.getElementById('Res').value.trim();
  var c = document.getElementById('Cap').value.trim();
  let f = (b*c).toFixed(6);
  
  if(a!=="" && b!=="" && c!==""){
  let exp1 = "a*(1-Math.exp(-x/f))";
  let exp2 = "a*(Math.exp(-x/f))";
  
  
  const xValues2 = [];
  const yValues2 = [];
  const yValues21 = [];
  for(let x=0;x<=10; x+=0.1){
    xValues2.push(x);
    yValues2.push(eval(exp1));
    yValues21.push(eval(exp2));
  }
  const inputTrace1 = {x: xValues2, y: yValues2, mode: "lines", name: "point1"};
  const outputTrace1 = {x: xValues2, y: yValues21, mode: "lines", name: "point2"};
  
  const data2 = [inputTrace1,outputTrace1];
  const layout2 = {
    title: "Voltage vs Time<br>across Capacitor",
  xaxis: {
    title: "Time(s)",
    range: [0,3]
  },
  yaxis: {
    title: "Voltage(V)"
  }
  };
  Plotly.newPlot("myPlot1",data2,layout2);
}
else{
  alert("Conduct the whole experiment first")
}
});
});



const toggle = document.getElementById("powerSwitch");

const inputvoltage = document.getElementById("Ipv");
const res = document.getElementById("Res");
const cap = document.getElementById("Cap");
toggle.addEventListener('change', function(){
  if(toggle.checked){
     inputvoltage.removeAttribute('disabled');
     res.removeAttribute('disabled');
     cap.removeAttribute('disabled');
  }
  else{
    inputvoltage.setAttribute('disabled', true);
    res.setAttribute('disabled', true);
    cap.setAttribute('disabled', true);
  }
})
 
function show() {

 
 
  const voltagevalue = document.getElementById("Ipv");
  var voltagevaluealueDisplay = document.getElementById("ipv");
  voltagevalue.addEventListener('input', function(){
    voltagevaluealueDisplay.value = voltagevalue.value ;
  })
  // Display the current value
  // document.getElementById('ipv').value = val;
}



function show1() {

 
 
  const resistancevalue = document.getElementById("Res");
  var resistancevaluealueDisplay = document.getElementById("rtext");
  resistancevalue.addEventListener('input', function(){
    resistancevaluealueDisplay.value = resistancevalue.value +"Ω";
  })

}

function show2() {

 
 
  const capacitancevalue = document.getElementById("Cap");
  var capacitancevaluealueDisplay = document.getElementById("ctext");
  capacitancevalue.addEventListener('input', function(){
    capacitancevaluealueDisplay.value = capacitancevalue.value + "F";
  })

}

function updateValue2(val) {
  // Get the value from the range slider2
  // const resistancevalue = document.getElementById("slider2");
  // var resistancevalueDisplay = document.getElementById("Res");
  // resistancevalue.addEventListener('input', function(){
  //   resistancevalueDisplay.value = resistancevalue.value;
  // })
  // Display the current value
  document.getElementById('Res').value = val;
}

function updateValue3(val) {
  // Get the value from the range slider2
  // const inductancevalue = document.getElementById("slider3");
  // var inductancevalueDisplay = document.getElementById("Ind");
  // inductancevalue.addEventListener('input', function(){
  //   inductancevalueDisplay.value = inductancevalue.value;

  // Display the current value
  // })
  document.getElementById('Ind').value = val;
}

var tableindex = 1;                    
        function add(){
            let table = document.getElementById('tableBody');
            var a = document.getElementById('ipv').value.trim();
            var b = document.getElementById('Res').value.trim();
            var c = document.getElementById('Ind').value.trim();
            let  d= (a/b).toFixed(2);
            let e = (c/b).toFixed(2);
          if(toggle.disabled == true){
            alert("Move the switch to the point 1");;
          }
          else if(toggle.checked == false){
            alert("Switch on the power button first");
          }
          else if(toggle.checked == true && a == "" ){
            alert("Give input voltage");
          }
          else if(a!==""   && b== ""){
            alert("Give resistance value");
          }
          else if(b!==""   && c== ""){
            alert("Give inductance value");
          }
          else if(a!=="" && b!=="" && c!==""){

          
            let row = document.createElement('tr')
            let c1 = document.createElement('td')
            let c2 = document.createElement('td')
            let c3 = document.createElement('td')
            let c4 = document.createElement('td')
            let c5 = document.createElement('td')
            let c6 = document.createElement('td')
            let c7 = document.createElement('td')
            let c8 = document.createElement('td')
            
            c1.innerText = tableindex;
            tableindex+= 1
            c2.innerText = document.getElementById('ipv').value;
            c3.innerText = document.getElementById('Res').value;
            c4.innerText = document.getElementById('Ind').value;
            c5.innerText= d;
            c6.innerText= e;

            
           
        row.appendChild(c1);
        row.appendChild(c2);
        row.appendChild(c3);
        row.appendChild(c4);
        row.appendChild(c5);
        row.appendChild(c6);
                                        
        table.appendChild(row)
        }
        }
    




let graph1 = document.getElementById("graph1")

graph1.addEventListener('click', function(){
  var a = document.getElementById('ipv').value.trim();  
  var b = document.getElementById('Res').value.trim();
  var c = document.getElementById('Cap').value.trim();
  
  
  if(a!=="" && b!=="" && c!==""){
    let  d= (a/b).toFixed(6)*1e6;
    let e = (b*c).toFixed(6);
  let exp1 = "d*(Math.exp(-x/e))";
  
  const xValues1 = [];
  const yValues1 = [];
  for(let x=0;x<=10; x+=0.1){
    xValues1.push(x);
    yValues1.push(eval(exp1));
  }
  const data1 = [{x:xValues1, y:yValues1, mode:"lines"}];
  
  const layout1 = {
    title: "Current in RC Charging Circuit",
    xaxis: {
      title: "Time(s)",
      range: [0,3]
    },
    yaxis: {
      title: "Current(μA)"
    }
  };
  Plotly.newPlot("myPlot1",data1,layout1);

 }
else{
  alert("Conduct the whole experiment first")
}
});
let graph2 = document.getElementById('graph2');
graph2.addEventListener('click',function(){
  var a = document.getElementById('ipv').value.trim();  
  var b = document.getElementById('Res').value.trim();
  var c = document.getElementById('Cap').value.trim();

  if(a!=="" && b!=="" && c!==""){
  let f = (b*c).toFixed(6);

  let exp2 = "a*(1-Math.exp(-x/f))";
  
  const xValues2 = [];
  const yValues2 = [];
  for(let x=0;x<=10; x+=0.1){
    xValues2.push(x);
    yValues2.push(eval(exp2));
  }
  
  const data2 = [{x:xValues2, y:yValues2, mode:"lines"}];
  const layout2 = {
    title: "Voltage vs Time<br>across Capacitor",
    xaxis: {
      title: "Time(s)",
      range: [0,3]
    },
    yaxis: {
      title: "Voltage(V)"
    }
  };
  Plotly.newPlot("myPlot1",data2,layout2);
}
else{
  alert("Conduct the whole experiment first.")
}
})
function printTable(){
 
   // Print the table
 window.print();
 }
 



