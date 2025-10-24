(() => {
  const refs = {
    openModalBtn: document.querySelector("[modal-open]"),
    closeModalBtn: document.querySelector("[modal-close]"),
    modal: document.querySelector("[modal-data]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("hidden");
    document.body.classList.toggle("no-scroll");
  }
})();