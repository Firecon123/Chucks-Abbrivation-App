//Character Limit is 60 per box, 2 separate description boxes
//Product master
let adjectives = new Map([
    ["NONE", ""],
    ["4.4OZ", "4.4OZ"],
    ["4OZ", "4OZ"],
    ["5OZ", "5OZ"],
    ["5.3OZ", "5.3OZ"],
    ["6OZ", "6OZ"],
    ["8OZ", "8OZ"],
    ["12OZ", "12OZ"],
    ["16OZ", "16OZ"],
    ["21.2OZ", "21.2OZ"],
    ["24OZ", "24OZ"],
    ["32OZ", "32OZ"],
    ["40OZ", "40OZ"],
    ["48OZ", "48OZ"],
    ["62.6OZ", "63.6OZ"],
    ["64OZ", "64OZ"],
    ["72OZ", "72OZ"],
    ["5LB", "5LB"],
    ["32LB", "32LB"],
    ["BLNDZ", "BLNDZ"],
    ["BOWL_AND_BASKET", "B&B"],
    ["BISON", "BISON"],
    ["DRIFTWOOD", "DRIFT"],
    ["EXTRA_CREAMY", "EXCRMY"],
    ["FIT_N_FREE", "FNF"],
    ["FRIENDLY_FARMS", "FRFM"],
    ["GIVAT", "GIV"],
    ["GOOD_&_GATHER", "G&G"],
    ["GREAT_VALUE", "GV"],
    ["HEB", "HEB"],
    ["J&J", "J&J"],
    ["KRIMI", "KRIMI"],
    ["KRISPY", "KRSP"],
    ["MEHADRIN", "MEHD"],
    ["MEHADRIN_LEBEN", "MEHDLB"],
    ["MEMBER'S_MARK", "MM"],
    ["NATURE'S_PROMISE", "NP"],
    ["OPEN_NATURE", "ON"],
    ["PANERA", "PNRA"],
    ["SIMPLY_NATURE", "SP"],
    ["SMOOTHIE_KING", "SK"],
    ["TOPS", "TOPS"],
    ["TRADITIONAL_SKYR", "SKYR"],
    ["TRUE_GOODNESS", "TG"],
    ["UPSTATE_FARMS", "UPFARMS"],
    ["WEGMANS", "WEG"],
    ["BLENDED", "BLND"],
    ["CUPSET", "CPS"],
    ["CUPSET_FOB", "CPSFOB"],
    ["GREEK", "GRK"],
    ["GREEK_BLENDED", "GRKBLND"],
    ["GREEK_FOB", "GRKFOB"],
    ["GREEK_LESS SUGAR", "GRKLS"],
    ["ORGANIC", "ORG"],
    ["ORGANIC_CUPSET", "ORGCPS"],
    ["ORGANIC_GREEK", "ORGGRK"],
    ["TRADITIONAL", "TRAD"],
    ["NON-FAT", "NF"],
    ["LOW-FAT", "LF"],
    ["SMALL_CURD", "SMLCRD"],
    ["LARGE_CURD", "LRGCRD"],
    ["WITH_MILK", "WM"],
    ["1%", "1%"],
    ["2%", "2%"],
    ["4%", "4%"],
    ["BANANA_VANILLA", "BANVAN"],
    ["BERRY_MEDLEY", "BERMED"],
    ["BERRY_POMEGRANATE", "BERPOM"],
    ["BLACK_CHERRY", "BLKCRY"],
    ["BLACK_BERRY", "BLKBER"],
    ["BLACK_BOYSENBERRY", "BLKBYSBER"],
    ["BLUE / BILBERRY", "BLU/BILBER"],
    ["BLUEBERRY", "BLUBER"],
    ["BUTTER_BERRY", "BUTBER"],
    ["CAPPUCCINO", "CAP"],
    ["CHERRY_BLACK_CURRANT", "CRYBLKCUR"],
    ["CHERRY_VANILLA", "CRYVAN"],
    ["CHOCOLATE", "CHOC"],
    ["COCONUT", "COCO"],
    ["COFFEE", "COF"],
    ["COOKIE", "CKIE"],
    ["FIELD_BERRY", "FLDBER"],
    ["HONEY", "HNY"],
    ["HONEY_&_APRICOT", "HNY&APR"],
    ["HONEY_VANILLA", "HNYVAN"],
    ["KEY_LIME", "KEYLIM"],
    ["LEMON", "LEM"],
    ["LIME", "LIM"],
    ["MIXED_BERRY", "MIXBER"],
    ["MOCHACCINO", "MOCH"],
    ["ORANGE_CREAM", "ORNGCRM"],
    ["ONION", "ONION"],
    ["PASSIONFRUIT_MANGO", "PASFRUMGO"],
    ["PEACH", "PCH"],
    ["PEACH_CLOUDBERRY", "PCHCLDBER"],
    ["PINACOLADA", "PINCLDA"],
    ["PINEAPPLE", "PNAPLE"],
    ["PLAIN", "PLN"],
    ["POMEGRANATE", "PMG"],
    ["PUMPKIN", "PMKN"],
    ["RASPBERRY", "RSPBER"],
    ["STRAWBERRY", "STRBER"],
    ["STRAWBERRY_BANANA", "STRBERBAN"],
    ["STRAWBERRY_LINGONBERRY", "STRLNGBER"],
    ["TRIPLE_BERRY", "TRIBER"],
    ["VANILLA_HAZELNUT", "VANHAZ"],
    ["VANILLA_OATS", "VANOAT"],
    ["VANILLA_RAINBOW", "VANRNB"],
    ["VANILLA", "VAN"],
    ["VANILLA_MAPLE", "VANMAP"],
    ["VARIETY", "VAR"],
    ["VIENNESE", "VSE"]
]);


function updateResultYogurt() {
    const attribute1 = document.getElementById("size_yogurt").value;
    const attribute2 = document.getElementById("name_yogurt").value;
    const attribute3 = document.getElementById("type_yogurt").value;
    const attribute4 = document.getElementById("desc_yogurt").value;
    const attribute5 = document.getElementById("flavor_yogurt").value;
    // const attribute6 = null;
    // const attribute7 = null;
    const selectedName = buildName(attribute1, attribute2, attribute3, 
                                    attribute4, attribute5, "", "");
    
    // Update the result section
    document.getElementById("result").innerText = "Selected Name: " + selectedName;
}
function updateResultCottage() {
    const attribute1 = document.getElementById("size_cottage").value;
    const attribute2 = document.getElementById("name_cottage").value;
    const attribute3 = document.getElementById("type_cottage").value;
    const attribute4 = document.getElementById("percent_cottage").value;
    const attribute5 = document.getElementById("flavor_cottage").value;
    const selectedName = buildName(attribute1, attribute2, attribute3, 
                                    attribute4, attribute5, "", "");
    
    // Update the result section
    document.getElementById("result").innerText = "Selected Name: " + selectedName;
}
function updateResultDip() {
    const attribute1 = document.getElementById("size_dip").value;
    const attribute2 = document.getElementById("name_dip").value;
    const attribute3 = document.getElementById("flavor_dip").value;
    const selectedName = buildName(attribute1, attribute2, attribute3, 
                                    "", "", "", "");
    
    // Update the result section
    document.getElementById("result").innerText = "Selected Name: " + selectedName;
}
function updateResultSour() {
    const attribute1 = document.getElementById("size_sour").value;
    const attribute2 = document.getElementById("name_sour").value;
    const attribute3 = document.getElementById("lite_sour").value;
    const attribute4 = document.getElementById("flavor_sour").value;
    const selectedName = buildName(attribute1, attribute2, attribute3, 
                                    attribute4, "", "", "");
    
    // Update the result section
    document.getElementById("result").innerText = "Selected Name: " + selectedName;
}

function buildName(...attributes) {
    let fullName = attributes.filter(attribute => attribute).join(" ");

    while (fullName.length > 60) {
        const maxWord = findLongestWord(fullName);
        const abbreviation = adjectives.get(maxWord);

        if (abbreviation) {
            fullName = fullName.replace(maxWord, abbreviation);
        }
    }

    return fullName;
}
function findLongestWord(str) {
    const splStrArray = str.split(' ');
  
    let longestWord = "";
    for(let index = 0; index < splStrArray.length; index++){
      if(splStrArray[index].length > longestWord.length){
           longestWord = splStrArray[index];
       }
    }
   return longestWord
  }


function showForm() {
    document.getElementById("result").innerText = "Selected Name: ";
    var selopt = document.getElementById("opts").value;
    if (selopt == 1) {
        document.getElementById("f1").style.display = "block";
        // document.getElementById("f2").style.display = "none";
        document.getElementById("f3").style.display = "none";
        document.getElementById("f4").style.display = "none";
        document.getElementById("f5").style.display = "none";
    }
    // if (selopt == 2) {
    //     document.getElementById("f2").style.display = "block";
    //     document.getElementById("f1").style.display = "none";
    //     document.getElementById("f3").style.display = "none";
    //     document.getElementById("f4").style.display = "none";
    //     document.getElementById("f5").style.display = "none";
    // }
    if (selopt == 3) {
        // document.getElementById("f2").style.display = "block";
        document.getElementById("f1").style.display = "none";
        document.getElementById("f3").style.display = "block";
        document.getElementById("f4").style.display = "none";
        document.getElementById("f5").style.display = "none";
    }
    if (selopt == 4) {
        document.getElementById("f4").style.display = "block";
        document.getElementById("f1").style.display = "none";
        document.getElementById("f3").style.display = "none";
        // document.getElementById("f2").style.display = "none";
        document.getElementById("f5").style.display = "none";
    }
    if (selopt == 5) {
        document.getElementById("f5").style.display = "block";
        document.getElementById("f1").style.display = "none";
        document.getElementById("f3").style.display = "none";
        // document.getElementById("f2").style.display = "none";
        document.getElementById("f4").style.display = "none";
    }
    if (selopt == 0) {
        // document.getElementById("f2").style.display = "none";
        document.getElementById("f1").style.display = "none";
        document.getElementById("f3").style.display = "none";
        document.getElementById("f4").style.display = "none";
        document.getElementById("f5").style.display = "none";
    }
}
const popupButton = document.getElementById('popupButton');
        const popupContainer = document.getElementById('popupContainer');
        const closePopup = document.getElementById('closePopup');
        const overlay = document.getElementById('overlay');

        // Function to show the popup
        function showPopup() {
            popupContainer.style.display = 'flex';
            overlay.style.display = 'flex';
        }

        // Function to hide the popup
        function hidePopup() {
            popupContainer.style.display = 'none';
            overlay.style.display = 'none';
        }

        // Event listener for the popup button
        popupButton.addEventListener('click', showPopup);

        // Event listener for the close button
        closePopup.addEventListener('click', hidePopup);

        // Event listener for the overlay (to close the popup when clicked outside)
        overlay.addEventListener('click', hidePopup);



