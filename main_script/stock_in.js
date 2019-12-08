
const vendorList = new Array;
const scaleList = new Array ;
var ProductName  = ""
var ProductPrice = ""
var Description = ""
var Line = ""
var vendor = ""
var Quantity = ""
var MSRP = ""
var Scale = ""
var ProductCode = ""
var imported = document.createElement('script');
imported.src = '/edit-form.js'


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

// console.log(vendorList);
// console.log(scaleList);

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
                        <input type="text" class="form-control" id="pname" value="${e.productName}">
                      </div>
                      <div class="form-group">
                          <label for="productLine">Product Line:</label>
                          <input type="text" class="form-control" id="pline" value="${e.productLine}">
                      </div>
                      <div class="form-group">
                        <label for="productScale">Product Scale:</label>
                        <input type="text" class="form-control" id="pscale" value="${e.productScale}">
                      </div>
                      <div class="form-group">
                        <label for="productVendor">Product Vendor:</label>
                        <input type="text" class="form-control" id="pvendor" value="${e.productVendor}">
                      </div>
                      <div class="form-group">
                        <label for="productDescription">Product Description:</label>
                        <input type="text" class="form-control" id="pdes" value="${e.productDescription}">
                      </div>
                      <div class="form-group row">
                        <div class="col-5">
                          <label for="quantity">Quantity in Stock:</label>
                          <input type="text" class="form-control" id="pquan" value="${e.quantityInStock}">
                        </div>
                        <div class="col-5">
                          <label for="price">Price:</label>
                          <input type="text" class="form-control" id="pprice" value="${e.buyPrice}">
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="msrp">MSRP:</label>
                        <input type="text" class="form-control" id="msrp" value="${e.MSRP}">
                      </div>
                
                      <div class="form-group row">
                        <div class="col-5">
                            <button type="submit" class="btn btn-default" style="background-color:gray;color:white">Save</button>
                        </div>
                        <div class="col-5">
                            <button type="submit" class="btn btn-default" style="background-color:gray;color:white">Cancel</button>
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



function editProduct_click(id, e){
  e.preventDefault();
  // var modal = document.getElementById('myModal')
  console.log(id)
  $.ajax({
    url: 'products/edit/' + id,
    type: 'GET',
    dataType: 'json',
    success: (data) => {
      data.forEach(e => {
        ProductCode = id
        ProductName = e.productName
        ProductPrice = e.buyPrice
        Description = e.productDescription
        Line = e.productLine
        vendor = e.productVendor
        Quantity = e.quantityInStock
        MSRP = e.MSRP
        Scale = e.productScale

        modal.style.display = "block";
    });
    }

  })
  
}


// document.getElementById("edit_click").addEventListener('click', (e) => e.preventDefault)

// $("#edit-form").html(`<div class="container">

// <div style="margin-top: 10px;" class="row">

//   <h1 class="my-4">Edit Product</h1>


//   <div class="col-lg-9">

//     <form action="#">
//       <div class="form-group">
//         <label for="productName">Product Name:</label>
//         <input type="text" class="form-control" id="pname" >
//       </div>
//       <br />

//       <div class="form-group">
//           <label for="productLine">Product Line:</label>
//           <input type="text" class="form-control" id="pline">
//       </div>
//       <div class="form-group">
//         <label for="productScale">Product Scale:</label>
//         <input type="text" class="form-control" id="pscale">
//       </div>
//       <div class="form-group">
//         <label for="productVendor">Product Vendor:</label>
//         <input type="text" class="form-control" id="pvendor">
//       </div>
//       <div class="form-group">
//         <label for="productDescription">Product Description:</label>
//         <input type="text" class="form-control" id="pdes">
//       </div>
//       <div class="form-group row">
//         <div class="col-5">
//           <label for="quantity">Quantity in Stock:</label>
//           <input type="text" class="form-control" id="pquan">
//         </div>
//         <div class="col-5">
//           <label for="price">Price:</label>
//           <input type="text" class="form-control" id="pprice">
//         </div>
//       </div>

//       <div class="form-group">
//         <label for="msrp">MSRP:</label>
//         <input type="text" class="form-control" id="msrp">
//       </div>

      

//       <div class="form-group row">
//         <div class="col-5">
//             <button type="submit" class="btn btn-default">Save</button>
//         </div>
//         <div class="col-5">
//             <button type="submit" class="btn btn-default">Cancel</button>
//         </div>
//       </div>

//     </form>
//     </br>
//     </br>
//     </br>
//     </br>


//   </div>
//   <!-- /.col-lg-9 -->

// </div>
// <!-- /.row -->

// </div>`)

// var modal = document.getElementById("edit-form");

// window.onclick = (e) => {
//     if (e.target == modal) modal.style.display = 'none';
// }

// // function delete_product(){

// // }


// // function edit_product(){
  
// //   var x = document.getElementsByClassName("edit_product")[0].id
// //   console.log(x)
// // }