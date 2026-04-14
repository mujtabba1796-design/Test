export function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

export function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

export function initModals() {
  document.getElementById("staffLoginBtn")?.addEventListener("click", () =>
    openModal("staffLoginModal")
  );

  document.getElementById("parentLoginBtn")?.addEventListener("click", () =>
    openModal("parentLoginModal")
  );

  document.getElementById("applyNowBtn")?.addEventListener("click", () =>
    openModal("applicationModal")
  );

  document
    .getElementById("closeStaffLoginBtn")
    ?.addEventListener("click", () => closeModal("staffLoginModal"));

  document
    .getElementById("closeParentLoginBtn")
    ?.addEventListener("click", () => closeModal("parentLoginModal"));

  document
    .getElementById("closeApplyModal")
    ?.addEventListener("click", () => closeModal("applicationModal"));
}