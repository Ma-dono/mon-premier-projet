function recalcultotal(){
    var  input = this.parentNode.querySelector('input[type=number]');
}

function btnadd(){
    var  input =  this.parentNode.querySelector('input[type=number]');
    input.stepUp();
}
function btnminus(){
    var  input =  this.parentNode.querySelector('input[type=number]');
    input.stepDown();
}