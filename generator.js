function processName(fullName) {
    if (fullName.length <= 24) {
        return {
            fullName,
            attribute1: 'Value1',
            attribute2: 'Value2',
            attribute3: 'Value3',
            attribute4: 'Value4',
            attribute5: 'Value5',
            attribute6: 'Value6',
            attribute7: 'Value7'
        };
    } else {
        const abbreviation = fullName.substring(0, 3); 
        return {
            fullName: abbreviation,
            attribute1: 'Value1',
            attribute2: 'Value2',
            attribute3: 'Value3',
            attribute4: 'Value4',
            attribute5: 'Value5',
            attribute6: 'Value6',
            attribute7: 'Value7'
        };
    }
}

function updateResult() {
    const attribute1 = document.getElementById("attribute_1").value;
    const attribute2 = document.getElementById("attribute_2").value;
    const attribute3 = document.getElementById("attribute_3").value;
    const attribute4 = document.getElementById("attribute_4").value;
    const attribute5 = document.getElementById("attribute_5").value;
    const attribute6 = document.getElementById("attribute_6").value;
    const attribute7 = document.getElementById("attribute_7").value;
    const selectedName = buildName(attribute1, attribute2, attribute3, 
                                    attribute4, attribute5, attribute6, attribute7);
    
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
    var selopt = document.getElementById("opts").value;
    if (selopt == 1) {
        document.getElementById("f1").style.display = "block";
        document.getElementById("f2").style.display = "none";
    }
    if (selopt == 2) {
        document.getElementById("f2").style.display = "block";
        document.getElementById("f1").style.display = "none";
    }
    if (selopt == 0) {
        document.getElementById("f2").style.display = "none";
        document.getElementById("f1").style.display = "none";
    }
}

