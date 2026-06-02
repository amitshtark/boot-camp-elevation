const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"', "?", "!", ";"]
const wordCounts = {}

let cleanStory = story.toLowerCase();

for (let char of specialChars)
{
  cleanStory = cleanStory.split(char).join("");
}

const words = cleanStory.split(" ");

for (let word of words) {
  if (wordCounts[word]) {
    wordCounts[word]++;
  } else {
    wordCounts[word] = 1;
  }
}

console.log(wordCounts);