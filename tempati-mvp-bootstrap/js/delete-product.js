var delete_product = () => {
  Swal.fire({
    // title: 'Are you sure?',
    // text: "Item will not recovery after delete",
    // icon: 'warning',
    html:
      '<img src="../img/icon-trash.svg" alt="deleted">' +
      '<div class="title-1">Are Your Sure ?</div>' +
      '<div class="label-r">Item will not recovery after delete</div>',
    showCancelButton: true,
    confirmButtonColor: '#0F87FF',
    cancelButtonColor: '#EF233C',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        confirmButtonColor: '#0F87FF',
        icon: 'success',
        title: 'Deleted!',
        text: "Your product has been deleted.",
      }).then(
        () => { location.href ='home.html'; }
      );
    }
  })

}