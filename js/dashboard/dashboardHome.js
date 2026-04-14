import { store } from "../store.js";

export function renderDashboard() {
  document.getElementById("mainContent").innerHTML = `
    <div class="bg-white p-6 rounded-xl shadow">
      <h2 class="text-2xl font-bold">Welcome ${store.profile?.full_name}</h2>

      <div class="grid grid-cols-2 gap-4 mt-6">
        <div class="p-4 bg-emerald-50 text-center rounded">
          <h3 class="text-xl">${store.students.length}</h3>
          <p>Students</p>
        </div>

        <div class="p-4 bg-amber-50 text-center rounded">
          <h3 class="text-xl">${store.teachers?.length || 0}</h3>
          <p>Staff</p>
        </div>
      </div>
    </div>
  `;
}