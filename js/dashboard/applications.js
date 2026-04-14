import { api } from "../api.js";

export async function renderApplications() {
  const apps = await api.getApplications();

  document.getElementById("mainContent").innerHTML = `
    <div class="bg-white p-5 rounded shadow">
      <h2 class="text-xl font-bold">Applications</h2>

      ${apps.map(a => `
        <div class="border-b py-2">
          ${a.student_name} - ${a.status}
        </div>
      `).join("")}
    </div>
  `;
}