import { api } from "../api.js";

export async function renderAttendance() {
  const students = await api.getStudents();

  document.getElementById("mainContent").innerHTML = `
    <div class="bg-white p-5 rounded shadow">
      <h2 class="text-xl font-bold">Attendance</h2>

      ${students.map(s => `
        <div class="flex justify-between py-2">
          ${s.name}
          <input type="checkbox" data-id="${s.id}">
        </div>
      `).join("")}

      <button id="saveAtt" class="bg-blue-600 text-white px-3 py-1 mt-3">
        Save
      </button>
    </div>
  `;

  document.getElementById("saveAtt").onclick = async () => {
    const records = [...document.querySelectorAll("input[type=checkbox]")]
      .map(cb => ({
        student_id: cb.dataset.id,
        date: new Date().toISOString().slice(0,10),
        status: cb.checked ? "present" : "absent"
      }));

    await api.saveAttendance(records);
    alert("Saved");
  };
}