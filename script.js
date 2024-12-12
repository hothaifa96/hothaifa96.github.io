document.getElementById("add-row").addEventListener("click", () => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
<td><input type="text" placeholder="מוצר"></td>
<td><input type="number" placeholder="מחיר"></td>
<td><button class="delete-row">מחק</button></td>
`;
  document.getElementById("product-table").appendChild(newRow);
  calculateTotal();
});

document.getElementById("product-table").addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-row")) {
    event.target.parentNode.parentNode.remove();
    calculateTotal();
  }
});

function calculateTotal() {
  const rows = document.querySelectorAll("#product-table tr");
  let total = 0;
  rows.forEach((row) => {
    const priceInput = row.querySelector('input[type="number"]');
    total += parseFloat(priceInput.value) || 0;
  });
  document.getElementById("total-price").textContent = total;
}
document.getElementById("calc").addEventListener("click", (event) => {
  calculateTotal();
});

// Export to PDF (requires server-side scripting)
