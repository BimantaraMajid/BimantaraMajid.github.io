const params = new URLSearchParams(window.location.search);
const product_id = params.get("product_id");
let currency = Intl.NumberFormat("id-ID");

var product_detail = JSON.parse(sessionStorage.getItem("product"));
product_detail = product_detail.filter((item) => item.product_id == product_id);
product_detail = product_detail[0];
var cart = undefined;
var check_cart = undefined;
if (sessionStorage.getItem("cart")) {
    cart = JSON.parse(sessionStorage.getItem("cart"));
    check_cart = Object.values(cart);
    check_cart = check_cart.filter((cart) => cart.product_id == product_detail?.product_id);
    check_cart = check_cart[0];
    // console.log(check_cart);
}

const ready_function = () => {
    get_detail(params);
    if (params.get("add") || check_cart ) add_food();
    document.getElementById("note").value = check_cart?.note ?? "";
};
window.addEventListener('load', ready_function, false);


const add_food = () => {
    var element_action = document.getElementById('action-add');
    var element_add_to_cart = document.getElementById('btn-add-to-cart');
    element_add_to_cart.removeAttribute("disabled");
    // if (!element_action.length) return;


    const new_element = `
        <div div div class="rounded-pill border p-1 px-2 label-b" style = "width: 105px;" >
            <div class="d-flex justify-content-between">
                <div onclick="increase();">
                    <img src="../img/plus-circle-fill-orange.svg">
                </div>
                <div class="text-orange-1" id="total-food">${check_cart?.total_food ?? 1}</div>
                <div onclick="decrease();">
                    <img src="../img/min-circle-fill-orange.svg">
                </div>
            </div>
        </div > `;

    element_action.innerHTML = new_element;

};

const deleted_food = () => {
    var element_action = document.getElementById('action-add');
    var element_add_to_cart = document.getElementById('btn-add-to-cart');
    element_add_to_cart.setAttribute("disabled", true);

    const new_element = `
        <div class="btn rounded-pill border px-4 text-orange-1 label-b"
        onclick="add_food()">
            Add
        </div> `;

    element_action.innerHTML = new_element;

};

const increase = () => {
    var el_total_food = document.getElementById("total-food");
    if (!el_total_food?.innerHTML) return;

    var total_food = parseInt(el_total_food.innerHTML) + 1;
    el_total_food.innerHTML = total_food;
};

const decrease = () => {
    var el_total_food = document.getElementById("total-food");
    if (!el_total_food?.innerHTML) return;

    var total_food = parseInt(el_total_food.innerHTML) - 1;
    if (total_food < 1) {
        deleted_food();
        if (!sessionStorage.getItem('cart')) return;
        delete cart[product_id];
        sessionStorage.setItem('cart', JSON.stringify(cart));
        if (!Object.keys(cart).length) sessionStorage.removeItem("cart");
        return;
    };
    el_total_food.innerHTML = total_food;
};

const get_detail = () => {

    if (!product_id) return;


    if (!product_detail) return;

    const element_image = `
        <img src="${product_detail.image}" alt="food" class="img-fit radius-12 animated-background" style="height: 248px; width: 100%;">
    `;
    let div_image = document.getElementById("product-image");
    let div_name = document.getElementById("product-name");
    let div_description = document.getElementById("product-description");
    let div_price = document.getElementById("product-price");

    div_image.innerHTML = element_image;
    div_name.innerHTML = product_detail.product_name;
    div_description.innerHTML = product_detail.description;
    div_price.innerHTML = `Rp ${currency.format(product_detail.price)}`;
};

const add_to_cart = () => {
    var el_total_food = document.getElementById("total-food");
    var total_food = parseInt(el_total_food.innerHTML);

    if (!el_total_food?.innerHTML) return;
    if (!product_detail) return;

    const add_cart = {
        product_id: product_id,
        total_food: total_food,
        note: document.getElementById("note")?.value,
        total_price: total_food * product_detail.price
    };

    if (!cart) {
        cart = {};
    }
    cart[product_id] = add_cart;
    sessionStorage.setItem("cart", JSON.stringify(cart));

    location.href = "../v-customer";
};