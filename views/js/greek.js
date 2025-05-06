// Test to see if greek.js is loaded
console.log("Greek.js loaded successfully");

// Data for characters
const characterDetails = {
    zeus: {
        info: "Zeus is the king of the gods in Greek mythology. He rules Mount Olympus and is associated with thunder, lightning, and the sky.",
        link: "https://en.wikipedia.org/wiki/Zeus"
    },
    hera: {
        info: "Hera is the queen of the gods and the goddess of marriage and family. She is known for her jealousy and her role as Zeus's wife.",
        link: "https://en.wikipedia.org/wiki/Hera"
    },
    athena: {
        info: "Athena is the goddess of wisdom, courage, and warfare. She is often depicted with an owl and a shield.",
        link: "https://en.wikipedia.org/wiki/Athena"
    },
    poseidon: {
        info: "Poseidon is the god of the sea, earthquakes, and horses. He is known for his trident and his temper.",
        link: "https://en.wikipedia.org/wiki/Poseidon"
    }
};

// Data for myths
const mythDetails = {
    heracles: {
        info: "The Twelve Labors of Heracles are a series of tasks performed by Heracles as penance for killing his family.",
        link: "https://en.wikipedia.org/wiki/Labours_of_Heracles"
    },
    odyssey: {
        info: "The Odyssey is an epic poem by Homer that tells the story of Odysseus's journey home after the Trojan War.",
        link: "https://en.wikipedia.org/wiki/Odyssey"
    },
    iliad: {
        info: "The Iliad is another epic poem by Homer that focuses on the events of the Trojan War.",
        link: "https://en.wikipedia.org/wiki/Iliad"
    },
    persephone: {
        info: "The Myth of Persephone explains the changing seasons. Persephone is taken to the underworld by Hades, causing her mother Demeter to grieve.",
        link: "https://en.wikipedia.org/wiki/Persephone"
    }
};

// Function to show character info
window.showCharacterInfo = (id) => {
    const characterInfo = document.getElementById("character-info");
    if (characterDetails[id]) {
        characterInfo.innerHTML = `
            <p>${characterDetails[id].info}</p>
            <p><a href="${characterDetails[id].link}" target="_blank">Would you like to learn more?</a></p>
        `;
    }
};

// Function to show myth info
window.showMythInfo = (id) => {
    const mythInfo = document.getElementById("myth-info");
    if (mythDetails[id]) {
        mythInfo.innerHTML = `
            <p>${mythDetails[id].info}</p>
            <p><a href="${mythDetails[id].link}" target="_blank">Would you like to learn more?</a></p>
        `;
    }
};
