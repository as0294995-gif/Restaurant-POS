document.addEventListener("DOMContentLoaded", function () {

    const products = document.querySelectorAll(".product");
    const invoiceBody = document.getElementById("invoiceBody");
    const totalPrice = document.getElementById("totalPrice");

    let total = 0;

    products.forEach(function (product) {

        product.addEventListener("click", function () {

            const name = this.textContent;
            const price = 10;

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${name}</td>
                <td>1</td>
                <td>${price}</td>
                <td>${price}</td>
            `;

            invoiceBody.appendChild(row);

            total += price;
            totalPrice.textContent = total.toFixed(2);

        });

    });

});
