$("#rec-btn").click(function(){
    var real = parseFloat($("#rec-real").val());
    var imaginary = parseFloat($("#rec-sign-imaginary").val()+""+$("#rec-imaginary").val());
    $("#graph-title").text(real+" "+$("#rec-sign-imaginary").val()+" j"+$("#rec-imaginary").val());
    drawVector(real,imaginary);
    $("#graph-theta").text("Valor de θ°: "+getTheta(real,imaginary)+"°");
});

$("#pol-btn").click(function(){
    var c = parseFloat($("#pol-c").val());
    var theta = parseFloat($("#pol-theta").val());
    $("#graph-title").text(c+" | "+theta+" °");
    var real = c * (Math.cos(theta * (Math. PI / 180)));
    var imaginary = c * (Math.sin(theta * (Math. PI / 180)));
    drawVector(real,imaginary);
    $("#graph-theta").text("Valor de θ°: "+theta+"°");
});

$("#conv-rec-btn").click(function(){
    var real = parseFloat($("#rec-real").val());
    var imaginary = parseFloat($("#rec-sign-imaginary").val()+""+$("#rec-imaginary").val());
    $("#graph-title").text(getC(real,imaginary).toFixed(3)+" | "+getTheta(real,imaginary).toFixed(3)+" °");
    drawVector(real,imaginary);
    $("#graph-theta").text("Valor de θ°: "+getTheta(real,imaginary).toFixed(3)+"°");
});

$("#conv-pol-btn").click(function(){
    var c = parseFloat($("#pol-c").val());
    var theta = parseFloat($("#pol-theta").val());
    var real = c * (Math.cos(theta * (Math. PI / 180)));
    var imaginary = c * (Math.sin(theta * (Math. PI / 180)));
    $("#graph-title").text(real.toFixed(3) + " " + getImaginarySign(imaginary) + " j" + Math.abs(imaginary).toFixed(3));
    drawVector(real,imaginary);
    $("#graph-theta").text("Valor de θ°: "+theta.toFixed(3)+"°");
});

$("#sum").click(function(){
    var real1 = parseFloat($("#sum-sign1").val()+1)*parseFloat($("#sum-real1").val());
    var imaginary1 = parseFloat($("#sum-sign1").val()+1)*parseFloat($("#sum-jsign1").val()+$("#sum-j1").val());
    var real2 = parseFloat($("#sum-sign2").val()+1)*parseFloat($("#sum-real2").val());
    var imaginary2 = parseFloat($("#sum-sign2").val()+1)*parseFloat($("#sum-jsign2").val()+$("#sum-j2").val());
    var real = real1 + real2;
    var imaginary = imaginary1 + imaginary2;
    $("#graph-title").text("Resultado: "+real.toFixed(3) + " " + getImaginarySign(imaginary) + " j" + Math.abs(imaginary).toFixed(3));
    drawVector(real,imaginary);
    $("#graph-theta").text("Valor de θ°: "+getTheta(real,imaginary).toFixed(3)+"°");
});

$("#mul").click(function(){
    var c1 = parseFloat($("#mul-c1").val());
    var theta1 = parseFloat($("#mul-theta1").val());
    var c2 = parseFloat($("#mul-c2").val());
    var theta2 = parseFloat($("#mul-theta2").val());
    var c = c1 * c2;
    var theta = theta1 + theta2;
    var real = c * (Math.cos(theta * (Math. PI / 180)));
    var imaginary = c * (Math.sin(theta * (Math. PI / 180)));
    $("#graph-title").text(c+" | "+theta+" °");
    drawVector(real,imaginary);
    $("#graph-theta").text("Valor de θ°: "+theta.toFixed(3)+"°");
});

$("#div").click(function(){
    var c1 = parseFloat($("#div-c1").val());
    var theta1 = parseFloat($("#div-theta1").val());
    var c2 = parseFloat($("#div-c2").val());
    var theta2 = parseFloat($("#div-theta2").val());
    var c = c1 / c2;
    var theta = theta1 - theta2;
    var real = c * (Math.cos(theta * (Math. PI / 180)));
    var imaginary = c * (Math.sin(theta * (Math. PI / 180)));
    $("#graph-title").text(c+" | "+theta+" °");
    drawVector(real,imaginary);
    $("#graph-theta").text("Valor de θ°: "+theta.toFixed(3)+"°");
});

function drawVector(real,imaginary){
    let circle = getImaginarySign(imaginary)+'sqrt('+Math.pow(getC(real, imaginary),2)+' - x * x)';
    functionPlot({
        target: '#root',
        grid: true,
        xAxis: {
            label: 'Reales'
        },
        yAxis: {
            label: 'Imaginarios'
        },
        tip: {
            xLine: true,    // dashed line parallel to y = 0
            yLine: true,    // dashed line parallel to x = 0
            renderer: function (x, y, index) {
              // the returning value will be shown in the tip
            }
        },
        data: [{
            fn: circle
        },{
          vector: [real, imaginary],
          graphType: 'polyline',
          fnType: 'vector'
        }]
    })
}
function getTheta(real, imaginary){
    let theta = Math.atan(imaginary/real)/(Math. PI / 180);
    if (real < 0) {
        if (imaginary < 0) {
            theta = theta - 180;
        } else {
            theta = theta + 180;
        }
    }
    return theta;
}

function getC(real, imaginary) { 
    let C =  Math.sqrt(Math.pow(real,2) + Math.pow(imaginary,2));
    return C;
}

function getImaginarySign(imaginary) {
    if (imaginary < 0) {
        return "-";     
    } else {
        return "+";
    }
}

