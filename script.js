document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema de reloj iniciado...");

    function updateClock() {
        const now = new Date();
        
        // Extraer tiempo real
        const h = String(now.getHours()).padStart(2, '0');
        const m = String(now.getMinutes()).padStart(2, '0');
        const s = String(now.getSeconds()).padStart(2, '0');
        
        // Extraer fecha real
        const d = String(now.getDate()).padStart(2, '0');
        const mon = String(now.getMonth() + 1).padStart(2, '0');
        const y = now.getFullYear();

        // Buscar el elemento en el menú
        const clockElement = document.getElementById('real-time-clock');
        
        if (clockElement) {
            clockElement.textContent = `${h}:${m}:${s} | ${d}/${mon}/${y}`;
        }
    }

    // Actualizar cada 1000 milisegundos (1 segundo)
    setInterval(updateClock, 1000);
    
    // Ejecutar inmediatamente al cargar
    updateClock();
});