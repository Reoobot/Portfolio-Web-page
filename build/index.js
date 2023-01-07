"use strict";
const toggle = document.getElementById('_toggle');
const items = document.getElementById('_items');
toggle.onclick = () => {
    items.classList.toggle('open');
    items.classList.toggle('close');
};
