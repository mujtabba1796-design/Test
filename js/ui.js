export function showToast(msg) {
  const d = document.createElement("div");
  d.className = "toast-msg bg-emerald-700";
  d.innerText = msg;
  document.body.appendChild(d);
  setTimeout(() => d.remove(), 3000);
}