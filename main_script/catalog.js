const vendorList = new Array;
const scaleList = new Array ;

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
                product += `<div class="col-lg-4 col-md-6 mb-4">
                <div class="card h-100">
                  <a href="#" id="${e.productCode}" onClick="product_click(this.id)"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="#" id="${e.productCode}" onClick="product_click(this.id)">${e.productName}</a>
                    </h4>
                    <h5>$${e.buyPrice}</h5>
                    <p class="card-text">${e.productDescription}</p>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                  </div>
                </div>
              </div>`;
                // console.log(product);
            });
            $('#product').html(product);
            // console.log(data);
        }
    })
}