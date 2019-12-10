document.getElementById("add_click").addEventListener('click', add_click)

function add_click(){
    const target = {
        newCode: document.getElementById("pcode").value.toString(),
        newName: document.getElementById("pname").value.toString(),
        newLine: document.getElementById("pline").value.toString(),
        newScale: document.getElementById("pscale").value.toString(),
        newVendor: document.getElementById("pvendor").value.toString(),
        newDesc: document.getElementById("pdes").value.toString(),
        newQuantity: document.getElementById("pquan").value.toString(),
        newPrice: document.getElementById("pprice").value.toString(),
        newMSRP: document.getElementById("msrp").value.toString()
    }
    console.log(target.newName);
    $.post('products/create',/*{Name:target.newName}*/{Code: target.newCode, Name: target.newName, Line: target.newLine, Vendor: target.newVendor, newScale: target.newScale,
        Desc: target.newDesc, Quantity: target.newQuantity, Price: target.newPrice, MSRP: target.newMSRP},
        d => {if(d==='done'){console.log('created')} })
}