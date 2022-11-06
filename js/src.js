document.getElementById("b").addEventListener("click",()=>{
    document.getElementById("a").value='f=()=>{console.log("'+document.getElementById("t").value.replaceAll("\\","\\\\").replaceAll("\"","\\\"").replaceAll("\n","\\n").replaceAll('[fn]','f="+f+";f();')+'")};f();';
})