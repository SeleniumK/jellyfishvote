var picOne = document.getElementById("picOne");
var picTwo = document.getElementById("picTwo");
var choices = document.getElementById("choices");
var sectionOne = document.getElementById("sectionOne");
var sectionTwo = document.getElementById("sectionTwo");
var tryAgain = document.getElementById("tryAgain");

var ctx = document.getElementById("voteChart").getContext("2d");


var data = {
  labels: [],
  datasets: [
    {
      label: "Critters",
      fillColor: "rgba(67, 17, 85, .5)",
      strokeColor: "rgba(67, 17, 85, .5)",
      highlightFill: "rgba(123, 73, 141, .5)",
      highlightStroke: "rgba(123, 73, 141, .5)",
      data: []
    }
  ]
};


function Photo(name, location, info) {
  this.name = name;
  this.location = location;
  this.info = info;
  this.numVotes = 0;

  data.labels.push(this.name);
  data.datasets[0].data.push(0);
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

var tracker = {
  chooseRandom: function(){
    return Math.floor(Math.random() * (photoCollection.length));
  },

  i: null,
  j: null,

  displayRandomPic: function(){
    i = this.chooseRandom();
    j = this.chooseRandom();

    picOne.src = photoCollection[i].location;

    while (i === j) {
      j = this.chooseRandom();
    }
    picTwo.src = photoCollection[j].location
    return i, j;
  },

  displayName: function(){
    var nameOne = document.getElementById("nameOne");
    var nameTwo = document.getElementById("nameTwo");

    nameOne.textContent = photoCollection[i].name;
    nameTwo.textContent = photoCollection[j].name;
  },

  displayLink: function(){
    var linkOne = document.getElementById("infoOne");
    var linkTwo = document.getElementById("infoTwo");

    linkOne.href = photoCollection[i].info;
    linkTwo.href = photoCollection[j].info;
  },

  userVote: function(event){
    var votesOne = document.getElementById("votesOne");
    var votesTwo = document.getElementById("votesTwo");

    if(event.target.id == "picOne"){
      photoCollection[i].numVotes += 1;

      data.datasets[0].data[i] = photoCollection[i].numVotes;
      myBarChart.datasets[0].bars[i].value = photoCollection[i].numVotes;

      sectionOne.setAttribute("class", "winnerOne");
      votesOne.textContent = "Votes: " + photoCollection[i].numVotes;

    }else if(event.target.id == "picTwo"){
      photoCollection[j].numVotes += 1;
      sectionTwo.setAttribute("class", "winnerTwo");
      votesTwo.textContent = "Votes: " + photoCollection[j].numVotes;

      data.datasets[0].data[j] = photoCollection[j].numVotes;
      myBarChart.datasets[0].bars[j].value = photoCollection[j].numVotes;
    }else {
      return;
    }

    myBarChart.update();

    tryAgain.removeAttribute("class", "hidden");
    tryAgain.addEventListener("click", function(){
      sectionOne.removeAttribute("class", "winnerOne");
      sectionTwo.removeAttribute("class", "winnerTwo");
      votesOne.textContent = "";
      votesTwo.textContent = "";
      tryAgain.setAttribute("class", "hidden");

      display();
    });
  }
};




function display(){
  tracker.displayRandomPic();
  tracker.displayName();
  tracker.displayLink();
}

display();
choices.addEventListener("click", tracker.userVote);


var myBarChart = new Chart(ctx).Bar(data, {
  scaleShowGridLines: false,
  scaleShowHorizontalLines: false,
  scaleShowVerticalLines: false,
  scaleShowLabels: false
});

