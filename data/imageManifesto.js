// Tiers of Gacha Pulls
// Everything uploaded online so this makes it easier
const S = ["Kerdus", "Nipnuk", "Skreerike", "theNiptheNuk" ];

const A = ["Coznix", "Gibpik", "Jaktik", "Sargorg","Zhaagrom", "Pizyap"];

const B = ["Fiznuk", "JubJub", "Mindbender", "Syneth", "Vollop", "Zilikshokin", "'Bone R. Mage'", "Helmon"];

const C = ["Coznix (hunter)", "Gibpik (hunter)", "Skreerike (hunter)", "Istapik (hunter)","Czaajhom", "Druslia", "Greedhun", "Zanggron", "Glynanda", "Hathvhug", "Thoothun"];

const Cursed = ["Tevonsfurry", "Tukhala", "Twisted"];

const Unobtainable = ["Kroke"];

// Map of Tiers
const Tiers = new Map([
  ["S Tier", S],
  ["A Tier", A],
  ["B Tier", B],
  ["C Tier", C],
  ["Cursed Tier", Cursed],
  ["Unobtainable Tier", Unobtainable],
]);

// online image links https://imgur.com/a/85crM86
// https://imgur.com/a/nbe1nTe
const images = new Map([
  // S Tier
  ["Kerdus", "https://i.imgur.com/xTClCp2.png"],
  ["Nipnuk", "https://i.imgur.com/73HUbec.png"], 
  ["Skreerike", "https://i.imgur.com/McHmUdv.png"],
  ["theNiptheNuk", "https://i.imgur.com/sBa1pG5.png"],
  // A Tier
  ["Coznix", "https://i.imgur.com/gUl3uqR.png"],
  ["Gibpik",  "https://i.imgur.com/Dv938kT.png"],
  ["Jaktik",  "https://i.imgur.com/PsTVgEn.png"],
  ["Sargorg", "https://i.imgur.com/Ne7y3BJ.png"],
  ["Zhaagrom", "https://i.imgur.com/qT6fEpb.png"],
  ["Pizyap" , "https://i.imgur.com/PMPQXwJ.jpg"],
  // B Tier
  ["Fiznuk", "https://i.imgur.com/G0E2LbR.png"], 
  ["JubJub", "https://i.imgur.com/GzD53cu.png"],
  ["Mindbender", "https://i.imgur.com/vXg7cyw.png"],
  ["Syneth", "https://i.imgur.com/b1ujzMu.png"],
  ["Vollop", "https://i.imgur.com/mKT6sbU.png"],
  ["Zilikshokin", "https://i.imgur.com/u5ZV46o.png"],
  ["'Bone R. Mage'", "https://i.imgur.com/hsG47sF.jpg"],
  ["Helmon", "https://i.imgur.com/YEIqJ2R.png"],
  // C Tier
  ["Coznix (hunter)", "https://i.imgur.com/DPEV78T.png"],
  ["Gibpik (hunter)", "https://i.imgur.com/5cm5DdI.png"],
  ["Istapik (hunter)" , "https://i.imgur.com/cveYNg0.png"],
  ["Skreerike (hunter)", "https://i.imgur.com/7fNa474.png"],
  ["Czaajhom", "https://i.imgur.com/pa51OaQ.png"],
  ["Druslia",  "https://i.imgur.com/9RNOt5f.png"],
  ["Greedhun", "https://i.imgur.com/XYtDTpW.png"],
  ["Zanggron", "https://i.imgur.com/bhIt2yL.png"],
  ["Glynanda", "https://i.imgur.com/N1pwLaT.jpg"],
  ["Hathvhug", "https://i.imgur.com/9OtyDkU.jpg"],
  ["Thoothun","https://i.imgur.com/9ehWWkF.jpg"],
  // Cursed
  ["Tevonsfurry", "https://i.imgur.com/Dk0h9Mp.png"],
  ["Tukhala", "https://i.imgur.com/oiTExFv.png"],
  ["Twisted", "https://i.imgur.com/l34CcwG.png"],
  // Unobtainable
  ["Kroke", "https://i.imgur.com/8y0Bcxm.jpg"],
]);

module.exports.tiers = Tiers;
module.exports.hunter= images;
module.exports.list  = images.keys();