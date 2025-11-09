// Espera a que todo el contenido de la página se cargue
document.addEventListener("DOMContentLoaded", function() {

    // 1. Seleccionamos los elementos que necesitamos del HTML
    const playButton = document.getElementById("playSoundButton");
    const interactionSound = document.getElementById("interactionSound");

    // 2. Verificamos que los elementos existan
    if (playButton && interactionSound) {
        
        // 3. Añadimos un "detector de clic" al botón
        playButton.addEventListener("click", function() {
            // 4. Cuando se haga clic, reproduce el sonido
            interactionSound.play();
        });
    }

});
