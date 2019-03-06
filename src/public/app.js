$(function () {

    $('#getProducts').on('click', function() {
        $.ajax({
            url: '/products',
            success: function(products) {
                // console.log(products);
                let tbody = $('tbody');

                tbody.html('');
                products.forEach(product => {
                    tbody.append(`
                        <tr>
                            <td class="id">${product.id}</td>
                            <td>
                                <input type="text" class = "name" value="${product.name}" />
                            </td>
                            <td>
                                <button class="update-button">Update</button>
                                <button class="delete-button">Delete</button>
                            </td>
                        </tr>
                    `)
                });
            }
        })
    })

    $('#productForm').on('submit', function(e) {
        e.preventDefault();
        let newProduct = $('#newProduct');

        $.ajax({
            url: '/products',
            method: 'POST',
            data: {
                name: newProduct.val()
            },
            success: function(response) {
                console.log(response);
            }
        })
    })

    $('table').on('click', '.update-button', function() {
        let row = ${this}.closest('tr');
    })
})

