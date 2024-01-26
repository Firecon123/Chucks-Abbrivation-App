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
    ["BOWL AND BASKET", "B&B"],
    ["BISON", "BISON"],
    ["DRIFTWOOD", "DRIFT"],
    ["EXTRA CREAMY", "EXCRMY"],
    ["FIT N FREE", "FNF"],
    ["FRIENDLY FARMS", "FRFM"],
    ["GIVAT", "GIV"],
    ["GOOD & GATHER", "G&G"],
    ["GREAT VALUE", "GV"],
    ["HEB", "HEB"],
    ["J&J", "J&J"],
    ["KRIMI", "KRIMI"],
    ["KRISPY", "KRSP"],
    ["MEHADRIN", "MEHD"],
    ["MEHADRIN LEBEN", "MEHDLB"],
    ["MEMBER'S MARK", "MM"],
    ["NATURE'S PROMISE", "NP"],
    ["OPEN NATURE", "ON"],
    ["PANERA", "PNRA"],
    ["SIMPLY NATURE", "SP"],
    ["SMOOTHIE KING", "SK"],
    ["TOPS", "TOPS"],
    ["TRADITIONAL SKYR", "SKYR"],
    ["TRUE GOODNESS", "TG"],
    ["UPSTATE FARMS", "UPFARMS"],
    ["WEGMANS", "WEG"],
    ["BLENDED", "BLND"],
    ["CUPSET", "CPS"],
    ["CUPSET FOB", "CPSFOB"],
    ["GREEK", "GRK"],
    ["GREEK BLENDED", "GRKBLND"],
    ["GREEK FOB", "GRKFOB"],
    ["GREEK LESS SUGAR", "GRKLS"],
    ["ORGANIC", "ORG"],
    ["ORGANIC CUPSET", "ORGCPS"],
    ["ORGANIC GREEK", "ORGGRK"],
    ["TRADITIONAL", "TRAD"],
    ["NON-FAT", "NF"],
    ["LOW-FAT", "LF"],
    ["SMALL CURD", "SMLCRD"],
    ["LARGE CURD", "LRGCRD"],
    ["WITH MILK", "WM"],
    ["1%", "1%"],
    ["2%", "2%"],
    ["4%", "4%"],
    ["BANANA VANILLA", "BANVAN"],
    ["BERRY MEDLEY", "BERMED"],
    ["BERRY POMEGRANATE", "BERPOM"],
    ["BLACK CHERRY", "BLKCRY"],
    ["BLACK BERRY", "BLKBER"],
    ["BLACK BOYSENBERRY", "BLKBYSBER"],
    ["BLUE / BILBERRY", "BLU/BILBER"],
    ["BLUEBERRY", "BLUBER"],
    ["BUTTER BERRY", "BUTBER"],
    ["CAPPUCCINO", "CAP"],
    ["CHERRY BLACK CURRANT", "CRYBLKCUR"],
    ["CHERRY VANILLA", "CRYVAN"],
    ["CHOCOLATE", "CHOC"],
    ["COCONUT", "COCO"],
    ["COFFEE", "COF"],
    ["COOKIE", "CKIE"],
    ["FIELD BERRY", "FLDBER"],
    ["HONEY", "HNY"],
    ["HONEY & APRICOT", "HNY&APR"],
    ["HONEY VANILLA", "HNYVAN"],
    ["KEY LIME", "KEYLIM"],
    ["LEMON", "LEM"],
    ["LIME", "LIM"],
    ["MIXED BERRY", "MIXBER"],
    ["MOCHACCINO", "MOCH"],
    ["ORANGE CREAM", "ORNGCRM"],
    ["ONION", "ONION"],
    ["PASSIONFRUIT MANGO", "PASFRUMGO"],
    ["PEACH", "PCH"],
    ["PEACH CLOUDBERRY", "PCHCLDBER"],
    ["PINACOLADA", "PINCLDA"],
    ["PINEAPPLE", "PNAPLE"],
    ["PLAIN", "PLN"],
    ["POMEGRANATE", "PMG"],
    ["PUMPKIN", "PMKN"],
    ["RASPBERRY", "RSPBER"],
    ["STRAWBERRY", "STRBER"],
    ["STRAWBERRY BANANA", "STRBERBAN"],
    ["STRAWBERRY LINGONBERRY", "STRLNGBER"],
    ["TRIPLE BERRY", "TRIBER"],
    ["VANILLA HAZELNUT", "VANHAZ"],
    ["VANILLA OATS", "VANOAT"],
    ["VANILLA RAINBOW", "VANRNB"],
    ["VANILLA", "VAN"],
    ["VANILLA MAPLE", "VANMAP"],
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

function buildName(attribute1, attribute2, attribute3, attribute4, attribute5, attribute6, attribute7) {
    var fullName = attribute1 + " " + attribute2 + " " + attribute3 + " " + attribute4 + " " + attribute5 + " " + attribute6 + " " + attribute7;
    if (fullName.length <= 60) {
        return fullName;
    } else {
        let maxWord = findLongestWord(fullName);
        let replacementWord;
        if (attribute1.localeCompare(maxWord) == 0) {
            return buildName(adjectives.get(attribute1), attribute2, attribute3, attribute4, attribute5, attribute6, attribute7);
        } else if (attribute2.localeCompare(maxWord) == 0) {
            return buildName(attribute1, adjectives.get(attribute2), attribute3, attribute4, attribute5, attribute6, attribute7);
        } else if (attribute3.localeCompare(maxWord) == 0) {
            return buildName(attribute1, attribute2, adjectives.get(attribute3), attribute4, attribute5, attribute6, attribute7);
        } else if (attribute4.localeCompare(maxWord) == 0) {
            return buildName(attribute1, attribute2, attribute3, adjectives.get(attribute4), attribute5, attribute6, attribute7);
        } else if (attribute5.localeCompare(maxWord) == 0) {
            return buildName(attribute1, attribute2, attribute3, attribute4, adjectives.get(attribute5), attribute6, attribute7);
        } else if (attribute6.localeCompare(maxWord) == 0) {
            return buildName(attribute1, attribute2, attribute3, attribute4, attribute5, adjectives.get(attribute6), attribute7);
        } else if (attribute7.localeCompare(maxWord) == 0) {
            return buildName(attribute1, attribute2, attribute3, attribute4, attribute5, attribute6, adjectives.get(attribute7));
        }
    }
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



