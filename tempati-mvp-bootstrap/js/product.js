let currency = Intl.NumberFormat("id-ID");
const params = new URLSearchParams(window.location.search);

const ready_function = () => {
    set_merchant_name();
    get_from_cloud();
    set_total();
    set_enable_order();
    // if (!sessionStorage.getItem('total_product')) {
    //     get_from_cloud();
    // } else {
    //     const product = JSON.parse(sessionStorage.getItem('product'));
    //     plug_item(product);
    // }
};
window.addEventListener('load', ready_function, false);

const template_product = (product_name, price, img, product_id, total) => {
    return `
        <div class="col-6 p-2">
            <div class="card radius-12" style="width: 100%;">
                <div class="header-img" style="height: 120px;">
                    <img src="${img}" class="card-img-top img-fit animated-background" alt="food"
                    onclick="location.href='menu-detail.html?product_id=${product_id}'">
                </div>
                <div class="card-body">
                    <div class="label-r">${product_name}</div>
                    <div class="title-2">Rp ${price}</div>
                    <div class="text-center pt-2">
                        <a class="btn rounded-pill border px-5 text-orange-1 label-b" href="menu-detail.html?product_id=${product_id}&add=1">${total ?? "Add"}</a>
                    </div>
                </div>
            </div>
        </div>`;
};

const get_from_cloud = () => {
    const ajax = new XMLHttpRequest();
    ajax.open("GET", "../data/product.json");
    ajax.send();
    ajax.addEventListener("load", async () => {
        const product = JSON.parse(ajax.responseText);
        sessionStorage.setItem('total_product', product.length);
        sessionStorage.setItem('product', JSON.stringify(product));

        plug_item(await product);

    });
};

const plug_item = (product) => {
    var element = document.getElementById("list-product");

    // insert list product from API
    element.innerHTML = '';
    product.forEach(item => {
        var cart = {};
        if (sessionStorage.getItem("cart")){
            cart = Object.values(JSON.parse(sessionStorage.getItem("cart")));
            cart = cart.filter((cart) => cart.product_id == item?.product_id);
            cart = cart[0];
        }
        // sessionStorage.setItem(item.product_id, JSON.stringify(item));
        element.innerHTML += template_product(item?.product_name, currency.format(item?.price), item?.image, item?.product_id, cart?.total_food);
    });
};

const set_merchant_name = () => {
    var element = document.getElementById("merchat-name");
    if (params.get("name")) {
        sessionStorage.setItem("merchant", params.get("name"))
    };
    element.innerHTML = sessionStorage.getItem("merchant") ?? "-";
}

const set_total = () => {
    if (!sessionStorage.getItem("cart")) return;
    var cart = Object.values(JSON.parse(sessionStorage.getItem("cart")));

    var total_order = cart?.map((item) => item.total_food);
    var total_price = cart?.map((item) => item.total_price);

    total_order = total_order.reduce(function (x, y) {
        return x + y;
    }, 0);

    total_price = total_price.reduce(function (x, y) {
        return x + y;
    }, 0);

    var element_tot_orders = document.getElementById("total-orders");
    var element_tot_amount = document.getElementById("total-amount");
    element_tot_orders.innerHTML = total_order;
    element_tot_amount.innerHTML = currency.format(total_price);
};

const set_enable_order = () => {
    onclick="location.href='review-order.html'"
    var element_btn_orders = document.getElementById("btn-order");
    if(!sessionStorage.getItem("cart")) return;
    element_btn_orders.addEventListener("click", ()=>location.href='review-order.html');

}