//Character Limit is 60 per box, 2 separate description boxes




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

function buildName(attribute1, attribute2, attribute3, 
    attribute4, attribute5, attribute6, attribute7) {
    var fullName = attribute1 +" "+ attribute2 +" "+ attribute3 +" "+ attribute4 +" "+ attribute5 +" "+ attribute6 +" "+ attribute7;
    // if (fullName.length <= 24) {
        return fullName;
    // }
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

