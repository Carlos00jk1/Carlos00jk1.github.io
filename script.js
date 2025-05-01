// Agrega esto en tu HTML
<div id="countdown"></div>

<script>
    const nextDate = new Date("2025-06-01"); // Cambia por su fecha de encuentro
    function updateCountdown() {
        const now = new Date();
        const diff = nextDate - now;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        document.getElementById('countdown').innerHTML = `
            Faltan: ${days} días y ${hours} horas para verte ❤️
        `;
    }
    setInterval(updateCountdown, 1000);
    updateCountdown();
</script>