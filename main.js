const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
insertY = ["the soup kitchen", "Disneyland", "the White House"];
insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener("click", result);

function result() {
    newStory = storyText;

    xItem = randomValueFromArray(insertX);
    yItem = randomValueFromArray(insertY);
    zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);

    if (customName.value != "") {
        let name = customName.value;
        newStory = newStory.replace("Bob", name);
    }

    if (document.getElementById("uk").checked) {
        newStory = newStory.replace("300 pounds", "4200 stone");
        newStory = newStory.replace("94 fahrenheit", "62 C");
    }
    else {
        newStory = newStory.replace("4200 stone", "300 pounds");
        newStory = newStory.replace("62 C", "94 fahrenheit");
    }

    story.textContent = newStory;
    story.style.visibility = "visible";
}

result();