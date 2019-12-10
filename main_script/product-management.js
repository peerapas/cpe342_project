const vendorList = new Array;
const scaleList = new Array;
$.ajax({
    url: 'products/vendor',
    type: 'GET',
    dataType: 'json',
    success: (data) => {
        // console.log(data);
        let vendor = "";
        data.forEach(e => {
            // console.log(e.productName);
            vendor += `<li><a href='#' class="cat" id="${e.productVendor}" onClick="getProduct_click(this.id,event)">${e.productVendor}</a></li>`;
            vendorList.push(e.productVendor);
        });
        $('#vendorList').html(vendor);
        getProduct_click(data[0].productVendor, event);
    }
});

$.ajax({
    url: 'products/scale',
    type: 'GET',
    dataType: 'json',
    success: (data) => {
        // console.log(data);
        let scale = "";
        data.forEach(e => {
            // console.log(e.productName);
            scale += `<li><a href='#' class="cat" id="${e.productScale}" onClick="getProduct_click(this.id,event)">${e.productScale}</a></li>`;
            scaleList.push(e.productScale);
        });
        $('#scaleList').html(scale);
    }
});


function getProduct_click(id, e) {
    e.preventDefault();
    // console.log(id);
    const catergorized = vendorList.includes(id) ? 'vendor/' : 'scale/';
    // console.log(catergorized);
    $.ajax({
        url: 'products/' + catergorized + id,
        type: 'GET',
        dataType: 'json',
        success: (data) => {
            let product = "";
            data.forEach(e => {
                product += `<div class="${e.ProductCode}">
                <div class="container">

                <div style="margin-top: 10px;" class="row">
                
                  <h3 class="my-4">Product Code : ${e.productCode}</h3>
                
                
                  <div class="col-lg-9">
                
                    <form action="#">
                      <div class="form-group">
                        <label for="productName">Product Name:</label>
                        <input type="text" class="form-control" id="pname${e.productCode}" value="${e.productName}">
                      </div>
                      <div class="form-group">
                          <label for="productLine">Product Line:</label>
                          <input type="text" class="form-control" id="pline${e.productCode}" value="${e.productLine}">
                      </div>
                      <div class="form-group">
                        <label for="productScale">Product Scale:</label>
                        <input type="text" class="form-control" id="pscale${e.productCode}" value="${e.productScale}">
                      </div>
                      <div class="form-group">
                        <label for="productVendor">Product Vendor:</label>
                        <input type="text" class="form-control" id="pvendor${e.productCode}" value="${e.productVendor}">
                      </div>
                      <div class="form-group">
                        <label for="productDescription">Product Description:</label>
                        <input type="text" class="form-control" id="pdes${e.productCode}" value="${e.productDescription}">
                      </div>
                      <div class="form-group row">
                        <div class="col-5">
                          <label for="quantity">Quantity in Stock:</label>
                          <input disabled type="text" class="form-control" id="pquan${e.productCode}" value="${e.quantityInStock}">
                        </div>
                        <div class="col-5">
                          <label for="price">Price:</label>
                          <input type="text" class="form-control" id="pprice${e.productCode}" value="${e.buyPrice}">
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="msrp">MSRP:</label>
                        <input type="text" class="form-control" id="msrp${e.productCode}" value="${e.MSRP}">
                      </div>
                
                      <div class="form-group row">
                        <div class="col-5">
                            <button type="submit" id="${e.productCode}" onClick="save_click(this.id, event)" class="btn btn-default" style="background-color:gray;color:white">Save</button>
                        </div>
                        <div class="col-5">
                            <button type="submit" class="btn btn-default" style="background-color:gray;color:white">Delete</button>
                        </div>
                      </div>
                
                    </form>
                    </br>
                
                  </div>
                  <!-- /.col-lg-9 -->
                
                </div>
                <!-- /.row -->
                
                </div>
                </div>`;
                // console.log(product);

            });
            $('#product').html(product);
            // console.log(data);
        }
    })
}



function save_click(id, e) {
    e.preventDefault();
    // $.ajax({
    //   url: 'products/edit/' + id,
    //   type: 'GET',
    //   dataType: 'json',
    //   success: (data) => {
    // data.forEach(e => {
    const target = {
        targetCode: id,
        newName: document.getElementById("pname" + id).value.toString(),
        newLine: document.getElementById("pline" + id).value.toString(),
        newScale: document.getElementById("pscale" + id).value.toString(),
        newVendor: document.getElementById("pvendor" + id).value.toString(),
        newDesc: document.getElementById("pdes" + id).value.toString(),
        newQuantity: document.getElementById("pquan" + id).value.toString(),
        newPrice: document.getElementById("pprice" + id).value.toString(),
        newMSRP: document.getElementById("msrp" + id).value.toString()
    }
    console.log(target)
    $.post('products/edit', /*{Name:target.newName}*/ {
                Code: target.targetCode,
                Name: target.newName,
                Line: target.newLine,
                Vendor: target.newVendor,
                newScale: target.newScale,
                Desc: target.newDesc,
                Quantity: target.newQuantity,
                Price: target.newPrice,
                MSRP: target.newMSRP
            },
            d => { if (d === 'done') { console.log('updated' + id) } })
        // });
        //   }

    // })

}