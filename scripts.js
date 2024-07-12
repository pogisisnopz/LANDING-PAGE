document.addEventListener('DOMContentLoaded', () => {
    const characterIcons = document.querySelectorAll('.character-icon');
    const mainCharacterImage = document.getElementById('main-character-image');
    const characterName = document.getElementById('character-name');
    const characterDescription = document.getElementById('character-description');

    characterIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const name = icon.getAttribute('data-name');
            const description = icon.getAttribute('data-description');
            const image = icon.getAttribute('data-image');

            mainCharacterImage.src = image;
            characterName.textContent = name;
            characterDescription.textContent = description;

            // Optionally, add an active class to highlight the selected character
            characterIcons.forEach(icon => icon.classList.remove('active'));
            icon.classList.add('active');
        });
    });
});