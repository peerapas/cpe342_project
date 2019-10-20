// $(document).ready(() => {
// categorized by vendor
$.ajax({
    url: 'database/vendor',
    type: 'GET',
    dataType: 'json',
    success: (data) => {
        // console.log(data);
        let vendor = "";
        let number = 0;
        data.forEach(name => {
            // console.log(name);
            // vendor+=`<a href="#" class="list-group-item" id="vendor ${name}">${name}</a>`;
            vendor += `<li><a href='#' class="cat" id="vendor${number}">${name}</a></li>`;
            number++;
        });
        // console.log(vendor);
        $('#vendorList').html(vendor);
    }
});


// categorized by scale
$.ajax({
    url: 'database/scale',
    type: 'GET',
    dataType: 'json',
    success: (data) => {
        // console.log(data);
        let scale = "";
        let number = 0;
        data.forEach(name => {
            // console.log(name);
            // vendor+=`<a href="#" class="list-group-item" id="vendor ${name}">${name}</a>`;
            scale += `<li><a href='#' class="cat" id="scale${number}">${name}</a></li>`;
            number++;
        });
        // console.log(vendor);
        $('#scaleList').html(scale);
    }
});

var sTimeOut = setTimeout(function () {
    $.ajax({
        url: 'database/vendor/vendor 0',
        type: 'GET',
        dataType: 'json',
        success: data => {
            // console.log(data);
            let product = "";
            data.forEach(e => {
                product += `<div class="col-lg-4 col-md-6 mb-4">
              <div class="card h-100">
                <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
                <div class="card-body">
                  <h4 class="card-title">
                    <a href="#">${e.productName}</a>
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
        },
        complete: function () {
            clearTimeout(sTimeOut);
        }
    });
}, 250);

function toAjax(id,cat){
    $.ajax({
        url: 'database/' + cat + ' ' + id,
        type: 'GET',
        dataType: 'json',
        succes: (data) => {
            let product = "";
            data.forEach(e => {
                product += `<div class="col-lg-4 col-md-6 mb-4">
              <div class="card h-100">
                <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
                <div class="card-body">
                  <h4 class="card-title">
                    <a href="#">${e.productName}</a>
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
        }
    })
}

setTimeout(() => {
    $('#vender0').click(() => {
        console.log('00000');
        toAjax('0','vender');
    });
}, 1000);

    // });