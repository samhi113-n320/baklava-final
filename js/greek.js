document.addEventListener("DOMContentLoaded", () => {
    // Data for characters
    const characterDetails = {
        zeus: "Zeus is the king of the gods in Greek mythology. He rules Mount Olympus and is associated with thunder, lightning, and the sky.",
        hera: "Hera is the queen of the gods and the goddess of marriage and family. She is known for her jealousy and her role as Zeus's wife.",
        athena: "Athena is the goddess of wisdom, courage, and warfare. She is often depicted with an owl and a shield.",
        poseidon: "Poseidon is the god of the sea, earthquakes, and horses. He is known for his trident and his temper."
    };

    // Data for myths
    const mythDetails = {
        heracles: "The Twelve Labors of Heracles are a series of tasks performed by Heracles as penance for killing his family.",
        odyssey: "The Odyssey is an epic poem by Homer that tells the story of Odysseus's journey home after the Trojan War.",
        iliad: "The Iliad is another epic poem by Homer that focuses on the events of the Trojan War.",
        persephone: "The Myth of Persephone explains the changing seasons. Persephone is taken to the underworld by Hades, causing her mother Demeter to grieve."
    };

    // Add event listeners for characters
    const characterList = document.querySelector("#greekCharacters ul");
    const characterInfo = document.getElementById("character-info");

    characterList.addEventListener("click", (event) => {
        const id = event.target.closest("li")?.dataset.id;
        if (id && characterDetails[id]) {
            characterInfo.innerHTML = `<p>${characterDetails[id]}</p>`;
        }
    });

    // Add event listeners for myths
    const mythList = document.querySelector("#greekMyths ol");
    const mythInfo = document.getElementById("myth-info");

    mythList.addEventListener("click", (event) => {
        const id = event.target.closest("li")?.dataset.id;
        if (id && mythDetails[id]) {
            mythInfo.innerHTML = `<p>${mythDetails[id]}</p>`;
        }
    });
});