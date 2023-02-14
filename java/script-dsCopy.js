const btnCopyDS = document.getElementById("copyBtnDS")
const elCopyDS = document.getElementById("copyElementDS")
const toastDSExample = document.getElementById('DSToast')
btnCopy.onclick = function() {
  navigator.clipboard.writeText(elCopy.textContent)
}
if (btnCopyDS) {
  btnCopyDS.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastDSExample)

    toast.show()
  })
}