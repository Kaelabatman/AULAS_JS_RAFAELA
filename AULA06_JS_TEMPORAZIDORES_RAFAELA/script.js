function acao (){
    document.write("executando ....<br/>");
}
//temporizador
//setInterval(acao,2000);

//setInterval(()=>{document.write("executando através de arrow function ...<br/>")},1000);

//clearInterval(timer);

//var timer = setInterval(()=>{
//document.write("executando através de arrow function ...<br/>")
//},1000);

//outro temporizador
function acao2(){
    document.write("executando com o setTimeout!");
}
 
setTimeout(acao2,3000);
