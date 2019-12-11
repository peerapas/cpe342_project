document.getElementById("add_click").addEventListener('click', add_click)

function add_click(){
    const target = {
        newCode: document.getElementById("code").value.toString(),
        newAmount: document.getElementById("amnt").value.toString(),
        newNum: document.getElementById("num").value.toString(),
        newMin: document.getElementById("min").value.toString(),
        newExp: document.getElementById("exp").value.toString()
    }
    console.log(target.newCode);
    $.post('discount/create',{Code: target.newCode, Amount: target.newAmount, Num: target.newNum, Min: target.newMin, Exp: target.newExp},
        d => {if(d==='done'){console.log('created')} })
}