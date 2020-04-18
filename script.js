const generate_id = digit => Math.random().toString(36).slice(-5);
const reload = () => document.getElementById('result').innerHTML = generate_id();
window.onload = reload;
