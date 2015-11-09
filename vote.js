var picTwo = document.getElementById("picTwo");

function Photo(name, location, info) {
  this.name = name;
  this.location = location;
  this.info = info;
  numVotes = 0;
}

var photoCollection = [
  new Photo("Angler Fish", "img/angler-fish.jpg", "https://en.wikipedia.org/wiki/Anglerfish"),
  new Photo("Arctic Hydromedusa", "img/arctic-hydromedusa.jpg", "https://en.wikipedia.org/wiki/Crossota_millsae"),
  new Photo("Bioluminescent Octopus", "img/bioluminescent-octopus.jpg", "https://en.wikipedia.org/wiki/Stauroteuthis_syrtensis"),
  new Photo("Dumbo Octopus", "img/dumbo-octopus.jpg", "https://en.wikipedia.org/wiki/Grimpoteuthis"),
  new Photo("Fathead", "img/fathead.jpg", "https://en.wikipedia.org/wiki/Psychrolutes_microporos"),
  new Photo("Flamingo Tongue Snail", "img/flamingo-tongue-snail.jpg", "https://en.wikipedia.org/wiki/Flamingo_tongue_snail"),
  new Photo("Golden Lace Nudibranch", "img/golden-lace-nudibranch.jpg", "https://en.wikipedia.org/wiki/Halgerda_terramtuentis"),
  new Photo("Leafy Seadragon", "img/leafy-seadragon.jpg", "https://en.wikipedia.org/wiki/Leafy_seadragon"),
  new Photo("Lizard Island Octopus", "img/lizard-island-octopus.jpg", "https://en.wikipedia.org/wiki/Mimic_octopus"),
  new Photo("Loggerhead Sea Turtle", "img/loggerhead-sea-turtle.jpg", "https://en.wikipedia.org/wiki/Loggerhead_sea_turtle"),
  new Photo("Marrus Orthocanna", "img/marrus-orthocanna.jpg", "https://en.wikipedia.org/wiki/Marrus_orthocanna"),
  new Photo("Mexican Walking Fish", "img/mexican-walking-fish.jpg", "https://en.wikipedia.org/wiki/Axolotl"),
  new Photo("Norvegica Jellyfish", "img/norvegica-jellyfish.jpg", "http://ocean.si.edu/ocean-photos/deep-red-jellyfish"),
  new Photo("Pink See-through Fantasia", "img/pink-see-through-fantasia.jpg", "http://www.ourbreathingplanet.com/pink-sea-through-fantasia/"),
  new Photo("Sea Angel", "img/sea-angel.jpg", "https://en.wikipedia.org/wiki/Sea_angel"),
  new Photo("Sea Nettles", "img/sea-nettles.jpg", "https://en.wikipedia.org/wiki/Chrysaora_fuscescens"),
  new Photo("Terrible Claw Lobster", "img/terrible-claw-lobster.jpg", "https://en.wikipedia.org/wiki/Dinochelus"),
  new Photo("Vampire Squid", "img/vampire-squid.jpg", "https://en.wikipedia.org/wiki/Vampire_squid"),
  new Photo("Venus Flytrap Anemone", "img/venus-flytrap-anemone.jpg", "https://en.wikipedia.org/wiki/Venus_flytrap_sea_anemone")
];

function chooseRandom(){
  return Math.floor(Math.random() * (photoCollection.length));
}

function displayRandom(){
  var picOne = document.getElementById("picOne");
  var picTwo = document.getElementById("picTwo");

  var i = chooseRandom();
  var j = chooseRandom();
  picOne.src = photoCollection[i].location;

  while (i === j) {
    j = chooseRandom();
  }
  picTwo.src = photoCollection[j].location;

}

displayRandom();
