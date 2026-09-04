/* ===================================================
   THE ALPHABET GAME — Game Logic (script.js)
   =================================================== */

// ===== AI KNOWLEDGE BASE =====
const AI_DATA = {
  A: { name: "Alice",    thing: "Airplane",   animal: "Antelope",    place: "Amsterdam",  food: "Apple" },
  B: { name: "Benjamin", thing: "Bicycle",    animal: "Bear",        place: "Barcelona",  food: "Banana" },
  C: { name: "Charlotte",thing: "Camera",     animal: "Cheetah",     place: "Cairo",      food: "Cake" },
  D: { name: "Daniel",   thing: "Drum",       animal: "Dolphin",     place: "Dubai",      food: "Dumpling" },
  E: { name: "Eleanor",  thing: "Envelope",   animal: "Elephant",    place: "Edinburgh",  food: "Egg" },
  F: { name: "Felix",    thing: "Flashlight", animal: "Falcon",      place: "Florence",   food: "Falafel" },
  G: { name: "Grace",    thing: "Guitar",     animal: "Giraffe",     place: "Geneva",     food: "Grape" },
  H: { name: "Hannah",   thing: "Hammer",     animal: "Hawk",        place: "Helsinki",   food: "Hummus" },
  I: { name: "Isaac",    thing: "Iron",       animal: "Iguana",      place: "Istanbul",   food: "Ice Cream" },
  J: { name: "Julia",    thing: "Jacket",     animal: "Jaguar",      place: "Jakarta",    food: "Jam" },
  K: { name: "Kevin",    thing: "Kite",       animal: "Koala",       place: "Kyoto",      food: "Kebab" },
  L: { name: "Lily",     thing: "Lantern",    animal: "Leopard",     place: "Lisbon",     food: "Lasagna" },
  M: { name: "Michael",  thing: "Mirror",     animal: "Monkey",      place: "Madrid",     food: "Mango" },
  N: { name: "Natalie",  thing: "Notebook",   animal: "Narwhal",     place: "Nairobi",    food: "Noodle" },
  O: { name: "Oliver",   thing: "Oven",       animal: "Owl",         place: "Oslo",       food: "Omelette" },
  P: { name: "Penelope", thing: "Pencil",     animal: "Panther",     place: "Paris",      food: "Pizza" },
  Q: { name: "Quinn",    thing: "Quilt",      animal: "Quail",       place: "Quebec",     food: "Quiche" },
  R: { name: "Rebecca",  thing: "Radio",      animal: "Rabbit",      place: "Rome",       food: "Rice" },
  S: { name: "Samuel",   thing: "Sword",      animal: "Snake",       place: "Sydney",     food: "Sushi" },
  T: { name: "Tiffany",  thing: "Telescope",  animal: "Tiger",       place: "Tokyo",      food: "Taco" },
  U: { name: "Uma",      thing: "Umbrella",   animal: "Urchin",      place: "Utrecht",    food: "Udon" },
  V: { name: "Victor",   thing: "Violin",     animal: "Vulture",     place: "Venice",     food: "Vanilla" },
  W: { name: "Wendy",    thing: "Whistle",    animal: "Walrus",      place: "Warsaw",     food: "Waffle" },
  X: { name: "Xavier",   thing: "Xylophone",  animal: "X-ray Fish",  place: "Xi'an",      food: "Xiaolongbao" },
  Y: { name: "Yasmine",  thing: "Yarn",       animal: "Yak",         place: "Yokohama",   food: "Yogurt" },
  Z: { name: "Zachary",  thing: "Zipper",     animal: "Zebra",       place: "Zurich",     food: "Zucchini" }
};

// Alternate AI answers (used when AI picks a letter, so it has "pre-thought" answers)
const AI_ALT_DATA = {
  A: { name: "Amanda",   thing: "Anchor",     animal: "Alligator",   place: "Athens",       food: "Avocado" },
  B: { name: "Brian",    thing: "Blanket",    animal: "Buffalo",     place: "Berlin",       food: "Brownie" },
  C: { name: "Chloe",    thing: "Candle",     animal: "Cobra",       place: "Chicago",      food: "Chocolate" },
  D: { name: "Diana",    thing: "Diamond",    animal: "Deer",        place: "Dublin",       food: "Donut" },
  E: { name: "Ethan",    thing: "Eraser",     animal: "Eagle",       place: "Edmonton",     food: "Eclair" },
  F: { name: "Fiona",    thing: "Fan",        animal: "Flamingo",    place: "Frankfurt",    food: "Fudge" },
  G: { name: "George",   thing: "Globe",      animal: "Gorilla",     place: "Glasgow",      food: "Guacamole" },
  H: { name: "Henry",    thing: "Helmet",     animal: "Hippo",       place: "Havana",       food: "Hamburger" },
  I: { name: "Iris",     thing: "Ink",        animal: "Impala",      place: "Islamabad",    food: "Icing" },
  J: { name: "James",    thing: "Jar",        animal: "Jellyfish",   place: "Johannesburg", food: "Jelly" },
  K: { name: "Karen",    thing: "Kettle",     animal: "Kangaroo",    place: "Kathmandu",    food: "Kiwi" },
  L: { name: "Lucas",    thing: "Lamp",       animal: "Lion",        place: "London",       food: "Lemon" },
  M: { name: "Maria",    thing: "Magnet",     animal: "Moose",       place: "Melbourne",    food: "Muffin" },
  N: { name: "Noah",     thing: "Needle",     animal: "Newt",        place: "Naples",       food: "Nachos" },
  O: { name: "Olivia",   thing: "Ornament",   animal: "Octopus",     place: "Ottawa",       food: "Orange" },
  P: { name: "Patrick",  thing: "Pillow",     animal: "Penguin",     place: "Prague",       food: "Pancake" },
  Q: { name: "Queenie",  thing: "Quarter",    animal: "Quokka",      place: "Quito",        food: "Quinoa" },
  R: { name: "Rachel",   thing: "Rope",       animal: "Rhino",       place: "Reykjavik",    food: "Ravioli" },
  S: { name: "Sophia",   thing: "Scissors",   animal: "Shark",       place: "Stockholm",    food: "Salad" },
  T: { name: "Thomas",   thing: "Towel",      animal: "Toucan",      place: "Toronto",      food: "Toast" },
  U: { name: "Ulysses",  thing: "Unicycle",   animal: "Urial",       place: "Ulaanbaatar",  food: "Upside-down cake" },
  V: { name: "Violet",   thing: "Vase",       animal: "Viper",       place: "Vienna",       food: "Vinegar" },
  W: { name: "William",  thing: "Wallet",     animal: "Wolf",        place: "Wellington",   food: "Watermelon" },
  X: { name: "Xena",     thing: "Xbox",       animal: "Xerus",       place: "Xiamen",       food: "Xacuti" },
  Y: { name: "Yusuf",    thing: "Yogurt",     animal: "Yellowjacket",place: "Yerevan",      food: "Yam" },
  Z: { name: "Zara",     thing: "Zeppelin",   animal: "Zebu",        place: "Zagreb",       food: "Ziti" }
};
// ===== GOOGLE & WEB SEARCH VALIDATION =====
// Categories checked against Google Search Engine & Web Index
const SEARCH_VALIDATED_CATEGORIES = ['thing', 'animal', 'place', 'food'];
const DICT_VALIDATED_CATEGORIES = SEARCH_VALIDATED_CATEGORIES; // Backward compatibility alias
const DICT_EXEMPT_CATEGORIES = ['name'];

// Large offline word set as immediate fallback and quick-lookup index
const OFFLINE_WORD_SET = new Set([
  // ===== THINGS =====
  "airplane","anchor","anvil","arrow","axe","backpack","badge","bag","ball","balloon",
  "banana","band","bandage","banner","barrel","basket","bat","battery","beacon","bead",
  "beam","bed","bell","belt","bench","bicycle","binoculars","blade","blanket","blender",
  "block","board","boat","bolt","bomb","bone","book","bookmark","boot","bottle",
  "boulder","bow","bowl","box","bracelet","brake","branch","brick","bridge","briefcase",
  "broom","brush","bubble","bucket","buckle","bulb","bullet","bunny","buoy","bus",
  "button","cab","cabin","cable","cage","calculator","calendar","camera","camp","can",
  "candle","cannon","canoe","cap","cape","car","card","carpet","carriage","cart",
  "case","cash","castle","catalog","chain","chair","chalk","chamber","charm","chart",
  "chest","chimney","chip","chisel","church","cigar","circle","clamp","clasp","claw",
  "clay","clip","cloak","clock","cloth","cloud","club","coach","coal","coat",
  "coil","coin","collar","comb","compass","computer","cone","container","cookie","cord",
  "cork","couch","counter","crate","crayon","crown","crystal","cube","cup","curtain",
  "cushion","dagger","dart","deck","desk","device","dial","diamond","dice","dish",
  "disk","doll","dome","door","drain","drawer","dress","drill","drone","drop",
  "drum","dumbbell","dust","dynamite","ear","earring","easel","edge","egg","elastic",
  "emblem","emerald","engine","envelope","eraser","fan","faucet","feather","fence","file",
  "film","filter","fin","finger","fire","flag","flame","flare","flask","flashlight",
  "flint","floor","flower","flute","foam","folder","fork","fossil","fountain","frame",
  "fridge","fruit","funnel","furnace","furniture","fuse","gadget","garage","garden","garment",
  "gas","gate","gauge","gear","gem","generator","gift","glass","globe","glove",
  "glue","goal","goggles","gold","gong","gown","grain","grapple","gravel","grill",
  "grip","groove","guard","guitar","gun","gutter","halo","hammer","hammock","handle",
  "hanger","harp","harness","harpoon","hat","hatchet","headband","headlight","helmet","herb",
  "hinge","hoe","hole","hood","hook","hoop","horn","hose","house","hub",
  "hull","ice","incense","ink","instrument","iron","ivory","jacket","jar","javelin",
  "jaw","jet","jewel","jigsaw","journal","jug","juice","key","keychain","keyboard",
  "kettle","kite","knapsack","knee","knife","knob","knot","label","lace","ladder",
  "lamp","lance","lantern","laptop","lasso","latch","lathe","leaf","leather","ledge",
  "lens","letter","lever","lid","light","lighter","line","link","lock","log",
  "loom","loop","luggage","lumber","machine","magazine","magnet","mail","mallet","map",
  "marble","mask","mat","match","mattress","medal","mesh","metal","meter","microphone",
  "microscope","mirror","missile","mitten","mold","monitor","monument","mop","mortar","motor",
  "mount","mug","muscle","nail","napkin","necklace","needle","nest","net","notebook",
  "nozzle","nut","oar","oil","ornament","oven","pack","package","pad","paddle",
  "padlock","pail","paint","palette","pan","panel","paper","parachute","parasol","parchment",
  "patch","path","patio","pearl","pebble","pedal","peg","pen","pencil","pendant",
  "periscope","phone","photo","piano","pick","picture","pie","piece","pier","pillar",
  "pillow","pin","pipe","pistol","pitcher","plank","plant","plaster","plate","platform",
  "pliers","plow","plug","plumb","pocket","pod","pole","polish","pool","post",
  "pot","potion","pouch","powder","press","prism","probe","projector","propeller","prong",
  "prop","protractor","puck","pulley","pump","puppet","purse","puzzle","pyramid","quill",
  "quilt","quarter","radar","radio","raft","railing","rake","ramp","range","receiver",
  "record","reel","remote","ribbon","rig","rim","ring","rivet","road","robe",
  "rock","rocket","rod","roll","roller","roof","room","rope","rotor","rubber",
  "ruby","rug","ruler","sack","saddle","sail","salt","sand","sandal","sash",
  "satellite","saw","scale","scanner","scarf","scissors","scope","screen","screw","scroll",
  "seal","seat","shackle","shade","shaft","shaker","sheath","shed","sheet","shelf",
  "shell","shelter","shield","ship","shirt","shoe","shovel","shroud","shutter","shuttle",
  "sieve","sign","silk","silver","sink","siren","skeleton","ski","slab","sled",
  "sleeve","slide","sling","slipper","slot","smoke","snap","snare","socket","sofa",
  "sole","spade","spark","speaker","spear","sphere","spike","spool","spoon","spotlight",
  "spring","spur","square","staff","stage","stair","stake","stamp","stand","staple",
  "star","steel","stencil","step","stick","sticker","stilt","stitch","stone","stool",
  "strap","straw","string","stripe","stroller","structure","stud","stylus","suit","sundial",
  "surface","sword","syringe","table","tablet","tack","tag","tank","tape","target",
  "tarp","telescope","temple","tent","terminal","thimble","thread","tile","timber","tin",
  "tire","tissue","token","tong","tool","torch","towel","tower","toy","track",
  "trailer","train","tray","treasure","tree","triangle","trigger","trim","trinket","tripod",
  "trophy","trough","truck","trumpet","trunk","tube","tumbler","tunnel","turret","tusk",
  "tweezers","twig","umbrella","unicycle","uniform","valve","van","vane","vase","vault",
  "vehicle","velvet","vent","vessel","vest","vine","violin","visor","wagon","wall",
  "wallet","wand","wardrobe","watch","weapon","wheel","whip","whistle","wick","widget",
  "wig","winch","windmill","window","wing","wire","wood","wool","wreath","wrench",
  "wrist","xylophone","yarn","yoke","zipper","zone",

  // ===== ANIMALS =====
  "aardvark","albatross","alligator","alpaca","amoeba","anchovy","angelfish","ant","anteater",
  "antelope","ape","armadillo","asp","baboon","badger","barracuda","bat","bear","beaver",
  "beetle","bird","bison","boa","boar","bobcat","buffalo","bug","bull","bunny",
  "butterfly","buzzard","camel","canary","capybara","caribou","carp","cat","caterpillar",
  "catfish","chameleon","cheetah","chicken","chimpanzee","chinchilla","chipmunk","cicada","clam",
  "cobra","cockatoo","cod","condor","coral","corgi","cormorant","cougar","cow","coyote",
  "crab","crane","crawfish","crayfish","cricket","crocodile","crow","cuckoo","cuttlefish",
  "deer","dingo","dog","dolphin","donkey","dove","dragonfly","duck","dugong","eagle",
  "earthworm","eel","egret","elephant","elk","emu","ermine","falcon","ferret","finch",
  "firefly","fish","flamingo","flea","fly","fox","frog","gator","gazelle","gecko",
  "gerbil","giraffe","goat","goldfish","goose","gopher","gorilla","grasshopper","grizzly",
  "grouper","grouse","gull","hamster","hare","harrier","hawk","hedgehog","heron","herring",
  "hippo","hippopotamus","hornet","horse","hound","hummingbird","hyena","ibex","ibis",
  "iguana","impala","insect","jackal","jackrabbit","jaguar","jay","jellyfish","kangaroo",
  "kingfisher","kite","kiwi","koala","koi","komodo","krill","ladybug","lamb","lark",
  "lemming","lemur","leopard","limpet","lion","lizard","llama","lobster","locust","loon",
  "louse","lynx","macaw","mackerel","magpie","mallard","manatee","mandrill","manta","mantis",
  "marlin","marmot","marten","mastiff","meadowlark","meerkat","mink","minnow","mite","mockingbird",
  "mole","mongoose","monkey","moose","mosquito","moth","mouse","mule","muskox","muskrat",
  "mussel","mustang","narwhal","newt","nighthawk","nightingale","ocelot","octopus","opossum",
  "orangutan","orca","oriole","osprey","ostrich","otter","owl","ox","oyster","panda",
  "panther","parrot","partridge","peacock","pelican","penguin","perch","pheasant","pig","pigeon",
  "pike","piranha","platypus","plover","pony","poodle","porcupine","porpoise","possum",
  "prawn","puffin","pug","puma","python","quail","quokka","rabbit","raccoon","ram",
  "rat","rattlesnake","raven","ray","reindeer","reptile","rhino","rhinoceros","roadrunner",
  "robin","rooster","sailfish","salamander","salmon","sardine","sawfish","scorpion","seahorse",
  "seal","shark","sheep","shrew","shrimp","silkworm","skink","skunk","sloth","slug",
  "snail","snake","snapper","snipe","sole","sparrow","spider","sponge","squid","squirrel",
  "stallion","starfish","starling","stingray","stork","sturgeon","swallow","swan","swordfish",
  "tamarin","tapir","tarantula","teal","termite","tern","terrier","thrush","tick","tiger",
  "toad","tortoise","toucan","trout","tuna","turkey","turtle","urchin","urial","viper",
  "vole","vulture","wallaby","walrus","warthog","wasp","weasel","whale","whippet","wildcat",
  "wolf","wolverine","wombat","woodpecker","worm","wren","xerus","yak","yellowjacket",
  "zebra","zebu","axolotl",

  // ===== FOODS =====
  "apple","avocado","banana","brownie","bread","bacon","bagel","biscuit","burger","butter",
  "cake","candy","cheese","chocolate","cookie","cupcake","cereal","carrot","cherry","chicken",
  "donut","dumpling","doughnut","dates","dosa","egg","eclair","eggplant","empanada",
  "falafel","fudge","fish","fries","fig","guacamole","grape","garlic","ginger",
  "hamburger","hummus","honey","hotdog","ham","ice cream","icing","jam","jelly","juice",
  "kebab","kiwi","kale","lasagna","lemon","lime","lobster","lychee","mango","muffin",
  "marshmallow","meatball","milk","mustard","nachos","noodle","nut","nutella","oatmeal",
  "omelette","onion","orange","pancake","pizza","pasta","pie","popcorn","potato","pretzel",
  "quiche","quinoa","rice","ravioli","ramen","salad","sushi","steak","soup","sandwich",
  "sausage","strawberry","taco","toast","tomato","tofu","turkey","udon","vanilla",
  "waffle","watermelon","walnut","yam","yogurt","zucchini","ziti","arepa","acai","apple pie",

  // ===== PLACES =====
  "africa","america","amsterdam","argentina","asia","athens","australia","austria",
  "barcelona","beijing","berlin","brazil","cairo","canada","chicago","china","colombia",
  "denmark","dubai","dublin","edinburgh","egypt","england","europe","finland","florence",
  "france","geneva","germany","greece","havana","helsinki","india","indonesia","ireland",
  "israel","istanbul","italy","jakarta","japan","kenya","kyoto","lisbon","london",
  "madrid","mexico","miami","milan","morocco","munich","nairobi","netherlands","nigeria",
  "norway","oslo","paris","peru","poland","portugal","prague","quebec","rome","russia",
  "scotland","seoul","singapore","spain","stockholm","sweden","switzerland","sydney",
  "thailand","tokyo","toronto","turkey","ukraine","united kingdom","united states","venice",
  "vienna","warsaw","washington","zurich","beach","cave","city","coast","continent",
  "country","desert","forest","harbor","island","jungle","lake","mountain","ocean",
  "atlanta","alaska","alabama","angola","amazon","alps","antarctica",
]);

// Search cache to avoid unnecessary network calls
const searchCache = {};
const dictCache = searchCache; // Alias for backward compatibility

/**
 * Validates a word/entity using Google Search Suggest & Web Search Index APIs
 * (Google Suggest, Wikipedia Search Engine API, Datamuse Web Index, Dictionary API).
 * Returns a Promise<boolean>.
 */
async function isValidGoogleSearchWord(word) {
  if (!word || word.trim().length === 0) return false;

  const cleanWord = word.toLowerCase().trim();

  // 1. Check local search cache first
  if (searchCache[cleanWord] !== undefined) {
    return searchCache[cleanWord];
  }

  // 2. Check offline set
  if (OFFLINE_WORD_SET.has(cleanWord)) {
    searchCache[cleanWord] = true;
    return true;
  }

  // 3. Try Google Search Engine Autocomplete / Suggest API
  try {
    const googleRes = await fetch(`https://suggestqueries.google.com/complete/search?client=firefox&q=${encodeURIComponent(cleanWord)}`);
    if (googleRes.ok) {
      const data = await googleRes.json();
      if (Array.isArray(data) && data[1] && data[1].length > 0) {
        const matches = data[1].some(suggestion => suggestion.toLowerCase().includes(cleanWord));
        if (matches) {
          searchCache[cleanWord] = true;
          return true;
        }
      }
    }
  } catch (e) {
    // Google suggest CORS/network fallback
  }

  // 4. Try Wikipedia Search Engine API (Google indexes all Wikipedia entries)
  try {
    const wikiUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(cleanWord)}&format=json&origin=*`;
    const wikiRes = await fetch(wikiUrl);
    if (wikiRes.ok) {
      const data = await wikiRes.json();
      if (data.query && data.query.search && data.query.search.length > 0) {
        const hits = data.query.search;
        const exactOrClose = hits.some(hit => {
          const title = hit.title.toLowerCase();
          const snippet = hit.snippet ? hit.snippet.toLowerCase() : '';
          return title.includes(cleanWord) || cleanWord.includes(title) || snippet.includes(cleanWord);
        });
        if (exactOrClose || data.query.searchtotalhits > 0) {
          searchCache[cleanWord] = true;
          return true;
        }
      }
    }
  } catch (e) {
    // Wikipedia API fallback
  }

  // 5. Try Datamuse Web Noun & Term Index
  try {
    const dmRes = await fetch(`https://api.datamuse.com/words?sp=${encodeURIComponent(cleanWord)}&max=3`);
    if (dmRes.ok) {
      const data = await dmRes.json();
      if (Array.isArray(data) && data.length > 0) {
        const match = data.some(item => item.word.toLowerCase() === cleanWord);
        if (match) {
          searchCache[cleanWord] = true;
          return true;
        }
      }
    }
  } catch (e) {
    // Datamuse API fallback
  }

  // 6. Fallback to free Dictionary API
  try {
    const dictRes = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(cleanWord)}`);
    if (dictRes.ok) {
      const data = await dictRes.json();
      if (Array.isArray(data) && data.length > 0 && data[0].word) {
        searchCache[cleanWord] = true;
        return true;
      }
    }
  } catch (e) {
    // Dictionary API fallback
  }

  // Default fallback to offline set check
  const isOfflineValid = OFFLINE_WORD_SET.has(cleanWord);
  searchCache[cleanWord] = isOfflineValid;
  return isOfflineValid;
}

// Alias for backward compatibility
const isValidDictionaryWord = isValidGoogleSearchWord;


// ===== GAME STATE =====
let gameState = {
  playerName: "",
  playerScore: 0,
  aiScore: 0,
  round: 1,
  usedLetters: [],
  currentLetter: "",
  currentTurn: "player", // "player" or "ai"
  isPlayerPickPhase: true, // true = player picks letter, false = AI picks
  timerInterval: null,
  timeLeft: 30,
  playerAnswers: { name: "", thing: "", animal: "", place: "", food: "" },
  aiAnswers: { name: "", thing: "", animal: "", place: "", food: "" },
  roundHistory: []
};

const POINTS_TO_WIN = 100;
const TIMER_DURATION = 30;
const TIMER_CIRCUMFERENCE = 2 * Math.PI * 35; // ~220

// ===== PAGE NAVIGATION =====
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById(pageId);
  if (page) {
    page.classList.add('active');
    page.style.display = 'block';
  }
  // Hide other pages
  document.querySelectorAll('.page:not(.active)').forEach(p => {
    p.style.display = 'none';
  });
}

function scrollToReviews() {
  document.getElementById('reviews-section').scrollIntoView({ behavior: 'smooth' });
}

// ===== AUTH =====
function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (username.length < 2) {
    shakeElement(document.getElementById('username'));
    return;
  }
  if (password.length < 4) {
    shakeElement(document.getElementById('password'));
    return;
  }

  gameState.playerName = username;
  document.getElementById('player-name-display').textContent = username;
  document.getElementById('results-player-name').textContent = username;
  document.getElementById('final-player-name').textContent = username;

  resetGame();
  showPage('game-page');
  startGame();
}

function shakeElement(el) {
  el.style.animation = 'none';
  el.offsetHeight; // trigger reflow
  el.style.animation = 'shake 0.4s ease';
  setTimeout(() => el.style.animation = '', 400);
}

// ===== GAME INITIALIZATION =====
function resetGame() {
  gameState.playerScore = 0;
  gameState.aiScore = 0;
  gameState.round = 1;
  gameState.usedLetters = [];
  gameState.currentLetter = "";
  gameState.isPlayerPickPhase = true;
  gameState.roundHistory = [];
  clearTimer();
  updateScoreDisplay();
}

function startGame() {
  buildAlphabetGrid();
  updateRoundDisplay();
  startPlayerPickPhase();
}

function buildAlphabetGrid() {
  const grid = document.getElementById('alphabet-grid');
  grid.innerHTML = '';
  for (let i = 65; i <= 90; i++) {
    const letter = String.fromCharCode(i);
    const btn = document.createElement('button');
    btn.className = 'letter-btn';
    btn.textContent = letter;
    btn.id = `letter-${letter}`;
    btn.onclick = () => selectLetter(letter);
    if (gameState.usedLetters.includes(letter)) {
      btn.classList.add('used');
      btn.disabled = true;
    }
    grid.appendChild(btn);
  }
}

function updateScoreDisplay() {
  document.getElementById('player-score').textContent = gameState.playerScore;
  document.getElementById('ai-score').textContent = gameState.aiScore;
}

function updateRoundDisplay() {
  document.getElementById('round-number').textContent = gameState.round;
}

// ===== TURN PHASES =====

function startPlayerPickPhase() {
  gameState.isPlayerPickPhase = true;
  showGameSection('letter-selection');
  setTurnText("Your Turn — Pick a Letter!");
  buildAlphabetGrid();
}

function startAIPickPhase() {
  gameState.isPlayerPickPhase = false;
  showGameSection('letter-selection');
  setTurnText("AI's Turn — AI is picking a letter...");

  // Disable all letter buttons while AI is "thinking"
  document.querySelectorAll('.letter-btn').forEach(btn => btn.disabled = true);

  // AI picks a random unused letter after a delay
  setTimeout(() => {
    const available = [];
    for (let i = 65; i <= 90; i++) {
      const letter = String.fromCharCode(i);
      if (!gameState.usedLetters.includes(letter)) {
        available.push(letter);
      }
    }

    if (available.length === 0) {
      endGame();
      return;
    }

    const chosen = available[Math.floor(Math.random() * available.length)];
    gameState.currentLetter = chosen;
    gameState.usedLetters.push(chosen);

    // Visual selection
    const btn = document.getElementById(`letter-${chosen}`);
    if (btn) {
      btn.classList.add('selected');
    }

    setTurnText(`AI picked the letter "${chosen}"! Your turn to answer in 30 seconds!`);

    // AI "pre-thinks" its answers
    gameState.aiAnswers = { ...AI_ALT_DATA[chosen] };

    // After a moment, show the input phase with timer for the player
    setTimeout(() => {
      showPlayerInputPhase(chosen, true);
    }, 1500);
  }, 2000);
}

function selectLetter(letter) {
  if (gameState.usedLetters.includes(letter)) return;
  if (!gameState.isPlayerPickPhase) return;

  gameState.currentLetter = letter;
  gameState.usedLetters.push(letter);

  // Visual feedback
  const btn = document.getElementById(`letter-${letter}`);
  if (btn) btn.classList.add('selected');

  setTurnText(`You picked "${letter}"! Fill in your answers.`);

  // AI prepares its answers for this letter
  gameState.aiAnswers = { ...AI_DATA[letter] };

  // Show input phase (no timer when player picks)
  setTimeout(() => {
    showPlayerInputPhase(letter, false);
  }, 800);
}

function showPlayerInputPhase(letter, withTimer) {
  showGameSection('player-input-phase');
  document.getElementById('current-letter-display').textContent = letter;

  // Clear inputs
  ['input-name', 'input-thing', 'input-animal', 'input-place', 'input-food'].forEach(id => {
    const el = document.getElementById(id);
    el.value = '';
    el.disabled = false;
    el.placeholder = `Starts with "${letter}"...`;
    // Clear any previous validation styling
    el.classList.remove('invalid-word', 'valid-word');
  });

  document.getElementById('btn-submit-answers').style.display = 'block';
  document.getElementById('btn-submit-answers').disabled = false;

  // Hide validation message
  const validationMsg = document.getElementById('validation-message');
  if (validationMsg) {
    validationMsg.style.display = 'none';
    validationMsg.textContent = '';
  }

  if (withTimer) {
    // Show and start timer (AI picked the letter)
    document.getElementById('timer-container').style.display = 'block';
    startTimer();
    setTurnText(`⏱️ 30 seconds! Answer for letter "${letter}"!`);
  } else {
    // No timer (player picked the letter)
    document.getElementById('timer-container').style.display = 'none';
    setTurnText(`Fill in your answers for letter "${letter}"`);
  }
}

// ===== TIMER =====
function startTimer() {
  gameState.timeLeft = TIMER_DURATION;
  updateTimerDisplay();

  const timerCircle = document.getElementById('timer-circle');
  timerCircle.style.strokeDasharray = TIMER_CIRCUMFERENCE;
  timerCircle.style.strokeDashoffset = 0;
  timerCircle.classList.remove('warning');
  document.getElementById('timer-text').classList.remove('warning');
  document.getElementById('timer-container').classList.remove('urgent');

  gameState.timerInterval = setInterval(() => {
    gameState.timeLeft--;
    updateTimerDisplay();

    // Update circle
    const progress = (1 - gameState.timeLeft / TIMER_DURATION) * TIMER_CIRCUMFERENCE;
    timerCircle.style.strokeDashoffset = progress;

    // Warning state
    if (gameState.timeLeft <= 10) {
      timerCircle.classList.add('warning');
      document.getElementById('timer-text').classList.add('warning');
    }
    if (gameState.timeLeft <= 5) {
      document.getElementById('timer-container').classList.add('urgent');
    }

    if (gameState.timeLeft <= 0) {
      clearTimer();
      timeUp();
    }
  }, 1000);
}

function clearTimer() {
  if (gameState.timerInterval) {
    clearInterval(gameState.timerInterval);
    gameState.timerInterval = null;
  }
}

function updateTimerDisplay() {
  document.getElementById('timer-text').textContent = gameState.timeLeft;
}

function timeUp() {
  // Disable inputs
  ['input-name', 'input-thing', 'input-animal', 'input-place', 'input-food'].forEach(id => {
    document.getElementById(id).disabled = true;
  });
  document.getElementById('btn-submit-answers').disabled = true;

  setTurnText("⏰ Time's up! No points for you this round.");

  // Player gets 0 — submit empty answers
  gameState.playerAnswers = { name: "", thing: "", animal: "", place: "", food: "" };

  setTimeout(() => {
    processRoundResults();
  }, 1500);
}

// ===== ANSWER SUBMISSION =====
async function submitPlayerAnswers() {
  clearTimer();

  const rawAnswers = {
    name:   document.getElementById('input-name').value.trim(),
    thing:  document.getElementById('input-thing').value.trim(),
    animal: document.getElementById('input-animal').value.trim(),
    place:  document.getElementById('input-place').value.trim(),
    food:   document.getElementById('input-food').value.trim()
  };

  // Show a validating state
  const submitBtn = document.getElementById('btn-submit-answers');
  submitBtn.disabled = true;
  submitBtn.textContent = '🔍 Checking Google Search...';

  // Disable inputs while validating
  ['input-name', 'input-thing', 'input-animal', 'input-place', 'input-food'].forEach(id => {
    document.getElementById(id).disabled = true;
  });

  // Validate Google Search-checked categories
  const letter = gameState.currentLetter;
  const invalidWords = [];

  for (const cat of SEARCH_VALIDATED_CATEGORIES) {
    const ans = rawAnswers[cat];
    if (!ans || ans.length === 0) continue; // empty answers handled by scoring

    const cleanAns = ans.toLowerCase().trim();
    // First check if it starts with the right letter
    if (!cleanAns.startsWith(letter.toLowerCase())) continue; // scoring will handle this

    // Check if it's a valid Google Search / web term
    const isValid = await isValidGoogleSearchWord(cleanAns);
    if (!isValid) {
      invalidWords.push({ category: cat, word: ans });
      // Mark the answer as invalid (0 points) by clearing it
      rawAnswers[cat] = ''; // Will be scored as empty
      // Highlight the input
      const inputEl = document.getElementById(`input-${cat}`);
      inputEl.classList.add('invalid-word');
      inputEl.disabled = false;
      inputEl.value = `❌ "${ans}" — not found on Google!`;
      inputEl.disabled = true;
    } else {
      const inputEl = document.getElementById(`input-${cat}`);
      inputEl.classList.add('valid-word');
    }
  }

  // Show validation message if words were invalid
  const validationMsg = document.getElementById('validation-message');
  if (invalidWords.length > 0) {
    const wordList = invalidWords.map(w => `"${w.word}" (${w.category})`).join(', ');
    validationMsg.textContent = `⚠️ Not found on Google Search: ${wordList} — 0 points for those!`;
    validationMsg.style.display = 'block';
  } else if (validationMsg) {
    validationMsg.style.display = 'none';
  }

  gameState.playerAnswers = rawAnswers;

  submitBtn.textContent = 'Comparing answers...';
  setTurnText("Comparing answers...");

  setTimeout(() => {
    processRoundResults();
  }, invalidWords.length > 0 ? 2000 : 1000);
}

// ===== SCORING =====
function compareAnswer(playerAns, aiAns, letter) {
  // Empty or doesn't start with the letter
  if (!playerAns || playerAns.length === 0) return { points: 0, status: "empty" };

  const pClean = playerAns.toLowerCase().trim();
  const aClean = aiAns.toLowerCase().trim();
  const letterLower = letter.toLowerCase();

  // Check if it starts with the correct letter
  if (!pClean.startsWith(letterLower)) return { points: 0, status: "wrong" };

  // Exact same answer
  if (pClean === aClean) return { points: 5, status: "similar" };

  // Check similarity (simple substring check or close match)
  if (isSimilar(pClean, aClean)) return { points: 5, status: "similar" };

  // Completely different valid answer
  return { points: 10, status: "correct" };
}

function isSimilar(a, b) {
  // Check if one contains the other, or they share a significant common root
  if (a.includes(b) || b.includes(a)) return true;

  // Simple Levenshtein-like check: if strings are very close
  if (a.length > 3 && b.length > 3) {
    const shorter = a.length < b.length ? a : b;
    const longer = a.length >= b.length ? a : b;
    let matches = 0;
    for (let i = 0; i < shorter.length; i++) {
      if (shorter[i] === longer[i]) matches++;
    }
    if (matches / longer.length > 0.75) return true;
  }

  return false;
}

function compareAIAnswer(aiAns, playerAns, letter) {
  // AI always gives valid answers that start with the letter
  const pClean = playerAns ? playerAns.toLowerCase().trim() : '';
  const aClean = aiAns.toLowerCase().trim();

  // Exact same answer or similar
  if (pClean === aClean) return { points: 5, status: "similar" };
  if (pClean && isSimilar(pClean, aClean)) return { points: 5, status: "similar" };

  // Different valid answer
  return { points: 10, status: "correct" };
}

function processRoundResults() {
  const letter = gameState.currentLetter;
  const categories = ['name', 'thing', 'animal', 'place', 'food'];
  let playerRoundPts = 0;
  let aiRoundPts = 0;

  const results = {};

  categories.forEach(cat => {
    const playerAns = gameState.playerAnswers[cat];
    const aiAns = gameState.aiAnswers[cat];

    // Score player
    const playerResult = compareAnswer(playerAns, aiAns, letter);
    playerRoundPts += playerResult.points;

    // Score AI
    const aiResult = compareAIAnswer(aiAns, playerAns, letter);
    aiRoundPts += aiResult.points;

    results[cat] = {
      playerAnswer: playerAns || "(no answer)",
      aiAnswer: aiAns,
      playerStatus: playerResult.status,
      aiStatus: aiResult.status,
      playerPts: playerResult.points,
      aiPts: aiResult.points
    };
  });

  gameState.playerScore += playerRoundPts;
  gameState.aiScore += aiRoundPts;
  updateScoreDisplay();

  // Display results
  displayRoundResults(results, playerRoundPts, aiRoundPts);

  // Save round history
  gameState.roundHistory.push({
    round: gameState.round,
    letter: letter,
    picker: gameState.isPlayerPickPhase ? "player" : "ai",
    results,
    playerPts: playerRoundPts,
    aiPts: aiRoundPts
  });
}

function displayRoundResults(results, playerPts, aiPts) {
  showGameSection('round-results');

  const categories = ['name', 'thing', 'animal', 'place', 'food'];
  const catIcons = { name: '👤', thing: '📦', animal: '🐾', place: '📍', food: '🍕' };
  const catLabels = { name: 'Name', thing: 'Thing', animal: 'Animal', place: 'Place', food: 'Food' };

  categories.forEach(cat => {
    const r = results[cat];

    const playerEl = document.getElementById(`result-player-${cat}-val`);
    const aiEl = document.getElementById(`result-ai-${cat}-val`);

    playerEl.textContent = `${catIcons[cat]} ${catLabels[cat]}: ${r.playerAnswer}`;
    playerEl.className = `result-item ${r.playerStatus}`;

    aiEl.textContent = `${catIcons[cat]} ${catLabels[cat]}: ${r.aiAnswer}`;
    aiEl.className = `result-item ${r.aiStatus}`;
  });

  document.getElementById('player-round-points').textContent = playerPts;
  document.getElementById('ai-round-points').textContent = aiPts;

  // Summary
  const summary = document.getElementById('results-summary');
  if (playerPts > aiPts) {
    summary.innerHTML = `🎉 <strong>You won this round!</strong> Great job with letter "${gameState.currentLetter}"!`;
  } else if (aiPts > playerPts) {
    summary.innerHTML = `🤖 <strong>AI wins this round!</strong> Better luck next time!`;
  } else {
    summary.innerHTML = `🤝 <strong>It's a tie!</strong> Both scored ${playerPts} points.`;
  }

  setTurnText(`Round ${gameState.round} Complete — Letter "${gameState.currentLetter}"`);

  // Check if game is over
  if (gameState.playerScore >= POINTS_TO_WIN || gameState.aiScore >= POINTS_TO_WIN) {
    document.getElementById('btn-next-round').textContent = "See Final Results 🏆";
    document.getElementById('btn-next-round').onclick = () => endGame();
  } else {
    document.getElementById('btn-next-round').textContent = "Next Round ➡️";
    document.getElementById('btn-next-round').onclick = () => nextRound();
  }
}

// ===== ROUND MANAGEMENT =====
function nextRound() {
  gameState.round++;
  updateRoundDisplay();

  // Check if enough letters remain
  if (gameState.usedLetters.length >= 26) {
    endGame();
    return;
  }

  // Alternate: odd rounds = player picks, even rounds = AI picks
  if (gameState.round % 2 === 1) {
    startPlayerPickPhase();
  } else {
    startAIPickPhase();
  }
}

// ===== GAME END =====
function endGame() {
  clearTimer();
  showPage('winner-page');

  const playerWon = gameState.playerScore >= gameState.aiScore;

  document.getElementById('winner-trophy').textContent = playerWon ? '🏆' : '🤖';
  document.getElementById('winner-title').textContent = playerWon
    ? `${gameState.playerName} Wins!`
    : 'AI Wins!';
  document.getElementById('winner-subtitle').textContent = playerWon
    ? 'Congratulations, word master! You outsmarted the AI!'
    : 'The AI was too clever this time. Try again!';

  document.getElementById('final-player-name').textContent = gameState.playerName;
  document.getElementById('final-player-score').textContent = gameState.playerScore;
  document.getElementById('final-ai-score').textContent = gameState.aiScore;

  // Confetti!
  if (playerWon) {
    createConfetti();
  }
}

function playAgain() {
  // Clear confetti
  document.getElementById('confetti-container').innerHTML = '';
  resetGame();
  showPage('game-page');
  startGame();
}

// ===== UI HELPERS =====
function showGameSection(sectionId) {
  ['letter-selection', 'player-input-phase', 'round-results'].forEach(id => {
    const el = document.getElementById(id);
    if (id === sectionId) {
      el.classList.remove('hidden');
      el.style.display = '';
    } else {
      el.classList.add('hidden');
      el.style.display = 'none';
    }
  });
}

function setTurnText(text) {
  document.getElementById('turn-text').textContent = text;
}

// ===== CONFETTI =====
function createConfetti() {
  const container = document.getElementById('confetti-container');
  container.innerHTML = '';
  const colors = ['#7c5cfc', '#00d4ff', '#ff6eb4', '#43e97b', '#fee140', '#f5576c', '#fa709a', '#4facfe'];

  for (let i = 0; i < 80; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + '%';
    piece.style.top = '-10px';
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.width = (Math.random() * 10 + 6) + 'px';
    piece.style.height = (Math.random() * 10 + 6) + 'px';
    piece.style.animationDuration = (Math.random() * 3 + 2) + 's';
    piece.style.animationDelay = (Math.random() * 2) + 's';
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '3px';
    container.appendChild(piece);
  }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  showPage('landing-page');

  // Inject shake keyframes
  const style = document.createElement('style');
  style.textContent = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20% { transform: translateX(-8px); }
      40% { transform: translateX(8px); }
      60% { transform: translateX(-6px); }
      80% { transform: translateX(6px); }
    }
  `;
  document.head.appendChild(style);
});
