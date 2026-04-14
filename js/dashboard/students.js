import { api } from "../api.js";
import { setStore, store } from "../store.js";

export async function renderStudents() {
  const data = await api.getStudents();
  setStore("students", data);

  document.getElementById("mainContent").innerHTML = `
    <div class="bg-white p-5 rounded shadow">
      <h2 class="text-xl font-bold mb-3">Students</h2>

      <table class="w-full text-sm">
        <thead>
          <tr><th>Reg</th><th>Name</th><th>Level</th><th>Status</th></tr>
        </thead>
        <tbody>
          ${data.map(s => `
            <tr>
              <td>${s.student_reg_no}</td>
              <td>${s.name}</td>
              <td>${s.level}</td>
              <td>${s.fee_status}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}