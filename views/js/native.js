import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { doc, addDoc, getDocs, collection, getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyC97sfVBB0UE3LtsDNYYVY8qxMhSwO_vus",
    authDomain: "n320-baklava.firebaseapp.com",
    projectId: "n320-baklava",
    storageBucket: "n320-baklava.firebasestorage.app",
    messagingSenderId: "208778952203",
    appId: "1:208778952203:web:6953ec18e371a85d96510e"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const myDoc = doc(db, "nativeQuiz", "2n7n0kxt3hq4yvc0UK9T");

const storyTitle = document.getElementById("storyTitle");
const storyText = document.getElementById("storyText");

const owlBtn = document.getElementById("owlBtn");
const woodpeckerBtn = document.getElementById("woodpeckerBtn");
const coyoteBtn = document.getElementById("coyoteBtn");
const moleBtn = document.getElementById("moleBtn");

const submitBtn = document.getElementById("submit");

submitBtn.onclick = function(e){
    e.preventDefault();
    quiz();
};

owlBtn.onclick = function(){changeText("OWL DESCRIBES HIMSELF", `"I am called Yî, 'owl'. I carry a basket and frequent the low gaps looking for people. I sing for them but do not think about them." "If you come to see me, you may eat the leg which lies in the basket," he told him. "There is nothing in it," his guest replied. "Yes, there is pemmican in it," he said. "That is my luncheon. When the sun goes down my basket will be full of meat." "Where shall I come to see you?" he asked. "You may come to me where the two cedars stand." He came there at evening and found his friend with a basket full of meat. The pemmican that had been in it was gone. "This is something's meat; take it home to your children." Then he carried it to his children. "I am carrying it home to my children," he said. "There are not many of them, there are only two." "Any way I am pleased, for I was looking for provisions. My children eat nothing but meat. They become large quickly because there are only two of them." "The people fear me because of my eyes. They are afraid also of my yellow horns. This is my nature. I bring you people's meat and I say to him, 'whu o whu!'" Thus he spoke they say.`)};

woodpeckerBtn.onclick = function(){changeText("WOODPECKER DESCRIBES HIMSELF", `They say Woodpecker spoke as follows: "I like to climb trees. I live among them because no one talks to me. I peck holes and eat with my hard bill. I raise my children in the holes I make. That is why I like the trees. I live upon their pitch. Whatever happens I do not complain because I have supernatural power. I like to carry about the rotten pine. I like to pull off its bark. I like the trees because I live upon them. He painted my face red and made my bill with which I carry wood. Although I peck with it all day, my head does not ache. My hand does not get tired because I am used to it. I go among the trees all the time because I like them very much. I eat the pitch and get fat from it. I go among the trees by means of my wings. I like to fly about from the top of one tree to another. That is why I do not complain. Because it is my nature I live among the trees. I sleep well in my house."`)};

coyoteBtn.onclick = function(){changeText("COYOTE SECURES FIRE", `Fireflies had their camp where high rocks stood around it in a circle and there was no trail leading down to it. They were the only people who had fire. They were playing the hoop and pole game with Otters. In vain Coyote walked around the rocks seeking a place to go down. He went where some children were playing beyond a hill and asked them where the trail was that lead down. They would not tell him. Having gathered some red berries and having made two strings of beads from them, he came again to the children. "Now tell me where the trail is," he said as he gave them the beads. "Right by the edge of the rocks stands a cedar tree," they told him, "one takes hold of it and it bends with him to the ground. If one says to it, 'Bend down to me' it will bend down and you may go out with it." Coyote pulled off some cedar bark and made a bundle of it to serve as a torch. He went over where they were playing the hoop and pole game. They were betting their hides and when one was beaten his hide was pulled off and he jumped into the river and came out again dressed as he was before. Coyote wanted to bet his hide. "No," the other players told him, "your skin sticks too tightly to your nose, you might cry badly about it." He played, however, and lost, and when they were stripping off his skin it stuck to his nose and he cried. He jumped into the river but came out as he went in, red and without a skin. Then the others caught him and pushed him into a badger's hole. He came out with a coat of short fur. He wished to bet again but the others would not permit him saying, "You cry so about it that every one is ashamed." When it was nearly night Fireflies built a fire in the center of their camp preparatory to a dance. When the people were all standing about after the dance began, Coyote tied the cedar bark he had prepared to his tail, and dancing about, tried to get his tail in the fire. "Coyote, your tail is on fire," they called to him. "I am working magic with it; it will not burn," he replied. His tail blazed up, and he jumped over the heads of the spectators and ran to the place where the trail led up. Fireflies ran after him. "Come bend down to me," he called to the cedar. When it came down to him he went up, tossing up his tail as he topped the rock. He ran off, throwing his tail from side to side. Those running after him tried to put the fire out. Coyote ran on, whipping the trees with his tail, still pursued, until he came to the border of the sky. When he had run almost entirely around the world with the fire he was tired and crawled into a hole. The whole world was afire and burning. It was burned black everywhere. That is why you can make a fire with a drill from all kinds of trees. Here at the east some trees were left unburned. They are like stone and will not burn if they are put in the fire. Petrified wood was the only thing of all that was on the world that was not burned.`)};

moleBtn.onclick = function(){changeText("HOW MOLE WON THE RACE", `All the men congregated to run a race to the border of the world where a pretty girl was living. The one who would get there first would marry her. They were running, along, Coyote far ahead of all the others. He kept looking back as he ran along. The men were all running one behind the other. Heron started to run long after the others had set out. He ran by all the others as they were going along a slope, and came where Mole was running throwing a lot of dust over himself. "Where are you running?" said Heron to Mole. "We are all running to that girl over there." "Sit on my back," said Heron to Mole. He lay by Heron's tail who ran with him passing everyone else. Finally, he came where Coyote was by himself, far ahead of the others. He turned and looked back. Heron passed by him and coming near the place put Mole down saying to him, "Hurry up now, run." Mole came there. When Coyote and the other men came running along, Heron said to them, "What are you running for? Mole has already married the girl."`)};

function changeText(title, text) {
    storyTitle.innerHTML = (`<h2>${title}</h2>`)
    storyText.innerHTML = (`<p>${text}</p>`)
}

async function quiz() {
    var owlScore = 0;
    var woodpeckerScore = 0;
    var coyoteScore = 0;
    var moleScore = 0;

    if (document.getElementById("answer11").checked) {
        moleScore += 0.75;
        coyoteScore += 1;
        owlScore += 0.25;
    }

    if (document.getElementById("answer12").checked) {
        woodpeckerScore += 1;
    }

    if (document.getElementById("answer13").checked) {
        owlScore += 0.75;
        moleScore + 0.25;
    }

    if (document.getElementById("answer21").checked) {
        woodpeckerScore += 0.75;
        owlScore += 0.5;
    }

    if (document.getElementById("answer22").checked) {
        moleScore += 0.5;
        owlScore += 0.5;
        woodpeckerScore += 0.25;
    }

    if (document.getElementById("answer23").checked) {
        moleScore += 0.5;
        coyoteScore += 1;
    }

    if (document.getElementById("answer31").checked) {
        moleScore += 0.75;
        coyoteScore += 0.75;
    }

    if (document.getElementById("answer32").checked) {
        woodpeckerScore += 0.75;
        moleScore += 0.25;
        owlScore += 0.25;
    }

    if (document.getElementById("answer33").checked) {
        owlScore += 0.75;
        coyoteScore += 0.25;
    }

    if(owlScore > woodpeckerScore && owlScore > coyoteScore && owlScore > moleScore) {
        document.getElementById("result").innerHTML = "<h2>You are most like the Owl!</h2>"
    } else if(woodpeckerScore > owlScore && woodpeckerScore > coyoteScore && woodpeckerScore > moleScore) {
        document.getElementById("result").innerHTML = "<h2>You are most like the Woodpecker!</h2>"
    } else if(coyoteScore > woodpeckerScore && coyoteScore > owlScore && coyoteScore > moleScore) {
        document.getElementById("result").innerHTML = "<h2>You are most like the Coyote!</h2>"
    } else if(moleScore > woodpeckerScore && moleScore > coyoteScore && moleScore > owlScore) {
        document.getElementById("result").innerHTML = "<h2>You are most like the Mole!</h2>"
    } else {
        document.getElementById("result").innerHTML = "<h2>You are a mixed bag! Try changing an answer or two and check again!</h2>"
    }

    owlScore = owlScore * 30;
    woodpeckerScore = woodpeckerScore * 30;
    coyoteScore = coyoteScore * 30;
    moleScore = moleScore * 30;

    document.getElementById("owlResult").innerHTML = ("Owl: " + owlScore + "%");
    document.getElementById("woodpeckerResult").innerHTML = ("Woodpecker: " + woodpeckerScore + "%");
    document.getElementById("coyoteResult").innerHTML = ("Coyote: " + coyoteScore + "%");
    document.getElementById("moleResult").innerHTML = ("Mole: " + moleScore + "%");

    if (confirm("Would you like to save your results?")) {
        var myName = prompt("Please enter your name.")
        try {
            const docRef = await addDoc(collection(db, "nativeQuiz"), {
                name: myName,
                owlScore: owlScore,
                woodpeckerScore: woodpeckerScore,
                coyoteScore: coyoteScore,
                moleScore: moleScore
            });
            console.log("Document written with ID: ", docRef.id);

            const nativeQuizCollection = collection(db, "nativeQuiz"); 

            try {
            const querySnapshot = await getDocs(nativeQuizCollection);
            const quizzes = [];
            querySnapshot.forEach((doc) => {
                var thisJSON = (JSON.stringify(doc.data()));
                var thisElement = (JSON.parse(thisJSON));

                console.log(thisJSON);

                var thisClasses = "jsonResult";

                if (myName === thisElement["name"] && owlScore === thisElement["owlScore"] && woodpeckerScore === thisElement["woodpeckerScore"] && coyoteScore === thisElement["coyoteScore"] && moleScore === thisElement["moleScore"]) {
                    thisClasses += " myResult"
                }

                document.getElementById("results").innerHTML +=`<div class="${thisClasses}"><b>${thisElement["name"]}</b><p>Owl: ${thisElement["owlScore"]}%</p><p>Woodpecker: ${thisElement["woodpeckerScore"]}%</p><p>Coyote: ${thisElement["coyoteScore"]}%</p><p>Mole: ${thisElement["moleScore"]}%</p></div>`;
            });

            } catch (e) {
            console.error("Error getting documents: ", e);
            }
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }
}