import { api } from "../api.js";

export async function renderFees() {
  const students = await api.getStudents();
  const pending = students.filter(s => s.fee_status === "Pending");

  document.getElementById("mainContent").innerHTML = `
    <div class="bg-white p-5 rounded shadow">
      <h2 class="text-xl font-bold">Pending Fees</h2>

      ${pending.map(s => `
        <div class="flex justify-between border-b py-2">
          ${s.name}
          <button onclick="markPaid('${s.id}')"
            class="bg-green-600 text-white px-2 py-1 rounded">
            Mark Paid
          </button>
        </div>
      `).join("")}
    </div>
  `;

  window.markPaid = async (id) => {
    await api.updateFeeStatus(id, "Paid");
    renderFees();
  };
}