const change_number = (number) => {
    var get_element = document.getElementsByClassName("edit-number");
    number = number.replace("+62", "0");
    const input_number =
        `<div class="row">
            <div class="col-9">
                <div class="input-group">
                    <label for="number-merchant" class="input-group-text radius-12 border border-light bg-grey-4 text-black-50">
                        <img src="../img/icon-phone-grey.svg">
                    </label>
                    <input type="number" class="form-control" id="number-merchant" value='${number}'>
                </div>
            </div>
            <div class="col my-auto">
                <span onclick="save_number(${number})" class="text-brand-color bg-grey-4 border boder-white rounded-pill px-3 py-1 label-r">save</span>
            </div>
        </div>`
    get_element[0].innerHTML = input_number
}

const save_number = () => {
    var get_element = document.getElementsByClassName("edit-number");
    const input_number =
        `<div class="d-flex bd-highlight">
            <div class="p-2 bd-highlight">
                <img src="../img/icon-phone.svg " alt="">
                    <span class="title-3 align-middle">+62 81032384848</span>
            </div>
            <div class="ms-auto p-2 bd-highlight">
                <span onclick="change_number('081032384848')"
                    class="align-middle border boder-white rounded-pill px-3 py-1 label-r">Edit</span>
            </div>
        </div>`;
    get_element[0].innerHTML = input_number
}