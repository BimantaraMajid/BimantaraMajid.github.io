let currency = Intl.NumberFormat("id-ID");
var cart = JSON.parse(sessionStorage.getItem("cart"));
var product = JSON.parse(sessionStorage.getItem("product"));
console.log(cart);
console.log(product);

const ready_function = () => {
    set_order_list();
};
window.addEventListener('load', ready_function, false);

const template_order_item = (kwarg = {}) => `
    <li class="list-group-item">
        <div class="row text-black-2">
            <div class="col-3 p-0">
                <img src="${kwarg.image}" class="img-fit radius-12" style="width: 70px; height: 70px;">
            </div>
            <div class="col-9 p-0">
                <div class="label-m">${kwarg.product_name}</div>
                <div class="label-r">Note: ${kwarg.note}</div>
                <div class="label-m">Rp ${currency.format(kwarg.price)} x ${kwarg.total_food}</div>
            </div>
        </div>
    </li>`;

const hr = `<hr class="p-0 m-0">`;

const set_order_list = () => {
    cart = Object.values(cart)
    var el_order_list = document.getElementById("order-list");
    var total_price = cart?.map((item) => item.total_price);
    total_price = total_price.reduce(function (x, y) {
        return x + y;
    }, 0);
    var ppn_11 = 11/100*total_price;
    var order_fee = 1000;

    document.getElementById("sub-total").innerHTML = currency.format(total_price);
    document.getElementById("ppn-11").innerHTML = currency.format(ppn_11);
    document.getElementById("order-fee").innerHTML = currency.format(order_fee);
    document.getElementById("total-amount").innerHTML = currency.format(total_price + ppn_11 + order_fee);
    
    el_order_list.innerHTML = '';
    cart.forEach((item, idx) => {
        const product_detail = product.filter((p) => p.product_id == item.product_id)[0];
        var kwarg = {
            total_food: item.total_food,
            note: item.note,
            product_name: product_detail.product_name,
            image: product_detail.image,
            price: product_detail.price
        };
        console.log(item);
        console.log(idx);
        el_order_list.insertAdjacentHTML("afterend", template_order_item(kwarg));
        if (idx < cart.length -1){
            el_order_list.insertAdjacentHTML("afterend", hr);

        }
    });
};