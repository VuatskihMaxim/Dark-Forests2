const btnCopy = document.getElementById("copyBtn")
const elCopy = document.getElementById("copyElement")
const toastLiveExample = document.getElementById('liveToast')
btnCopy.onclick = function() {
  navigator.clipboard.writeText(elCopy.textContent)
}
if (btnCopy) {
  btnCopy.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

