const toggle = (document.getElementById('_toggle') as HTMLButtonElement)
const items = (document.getElementById('_items') as HTMLElement)

toggle.onclick = (): void => {
    items.classList.toggle('open')
    items.classList.toggle('close')
}
