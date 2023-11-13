let loginForm = document.getElementById("loginForm");

console.log("JS linked");


function myFunction() {
    document.getElementById("button").style.color = "red";
    console.log("Worked");

    var isClinicsChecked = document.querySelector("#clinics").checked;
    var isTherapyChecked = document.querySelector("#therapy").checked;
    var isPsychiatryChecked = document.querySelector("#psychiatry").checked;
    var isGenderAffirmingCareChecked = document.querySelector("#gender-affirming-care").checked;

    var isLGBTQIACentersChecked = document.querySelector("#lgbtqia-centers").checked;
    var isLGBTQIAFamilyPlanningChecked = document.querySelector("#lgbtqia-family-planning").checked;
    var isLGBTQIAYouthServicesChecked = document.querySelector("#lgbtqia-youth-services").checked;
    var isMentalHealthSupportGroupsChecked = document.querySelector("#mental-health-support-groups").checked;

    var isLegalAndAdvocacyResourcesChecked = document.querySelector("#legal-and-advocacy-resources").checked;
    var isRecreationalSafeSpacesChecked = document.querySelector("#recreational-safe-spaces").checked;
    var isHomeHealthServicesChecked = document.querySelector("#home-health-services").checked;

    var isSingleOccupantBathroomsChecked = document.querySelector("#single-occupant-bathrooms").checked;
    var isWheelchairAccessibilityChecked = document.querySelector("#wheelchair-accessibility").checked;
    var isFamilyBathroomsChecked = document.querySelector("#family-bathrooms").checked;
    
    var isSignLanguageInterpretersChecked = document.querySelector("#sign-language-interpreters").checked;
    var isBrailleAndLargePrintChecked = document.querySelector("#braille-and-large-print").checked;
    var isCommunicationAssistanceChecked = document.querySelector("#communication-assistance").checked;
    var answer = -1; 

    

    var user = [isSingleOccupantBathroomsChecked, isFamilyBathroomsChecked, isWheelchairAccessibilityChecked, isSignLanguageInterpretersChecked, isBrailleAndLargePrintChecked, isCommunicationAssistanceChecked];
    // You can now use these variables as needed
    // For example, to check the status of a checkbox:
    var clinics = [[0, 1, 1, 1, 1, 1], [0, 1, 1, 1, 0, 0]]; //1
    var therapy = [[0,0,1,1,1, 0],[0,0,0,0,1, 1],[1,1,1,0,1, 1]]; //3
    var psychiatry = [[0,1,0,0,1, 1], [1, 0, 1, 1, 0, 0]]; //6
    var gender = [[1,1,0,0,1, 1], [0,0,0,1,0, 0], [0,1,0,1,1, 0]]; //8

    var center = [[1, 1, 0, 0, 1, 0], [0, 1, 1, 1, 0, 1], [1, 0, 0, 1, 0, 1]]; //11
    var famPlanning = [[1, 0, 1, 0, 1, 0], [0, 1, 0, 1, 1, 1]]; //14
    var youth = [[0, 1, 0, 1, 1, 1], [1, 1, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1]]; //16
    var mental = [[1, 1, 0, 1, 0, 1], [1, 0, 1, 0, 1, 0]]; //19

    var legal = [[1, 0, 1, 1, 0, 1],[0, 0, 1, 0, 1, 0]]; //21
    var recreational = [[1, 0, 1, 0, 1, 1], [1, 1, 1, 0, 0, 1], [1, 0, 1, 1, 0, 0]]; //23
    var home = [[0, 1, 0, 1, 1, 0], [1, 0, 1, 1, 0, 0], [1, 0, 0, 0, 1, 0]]; //26

    var compArray; 

    var answer; 
    
    if (isClinicsChecked){
        compArray = clinics;   
        console.log("Clinics");
        answer = 1;
    } else if (isTherapyChecked) {
        compArray = therapy;
        answer = 3;
        console.log("Therapy");
    } else if (isPsychiatryChecked) {
        compArray = psychiatry;
        console.log("Psychiatry");
        answer = 6;
    } else if (isGenderAffirmingCareChecked) {
        compArray = gender;
        console.log("Gender");
        answer = 8; 
    } else if (isLGBTQIACentersChecked) {
        compArray = center;
        console.log("Center");
        answer = 11;
    } else if (isLGBTQIAFamilyPlanningChecked) {
        compArray = famPlanning;
        console.log("Family");
        answer = 14; 
    } else if (isLGBTQIAYouthServicesChecked) {
        compArray = youth;
        console.log("Youth");
        answer = 16;
    } else if (isMentalHealthSupportGroupsChecked) {
        compArray = mental;
        console.log("Mental");
        answer = 19;
    } else if (isLegalAndAdvocacyResourcesChecked) {
        compArray = legal;
        console.log("Legal");
        answer = 21;
    } else if (isRecreationalSafeSpacesChecked) {
        compArray = recreational;
        console.log("Rec");
        answer = 23; 
    } else {
        compArray = home;
        console.log("Home");
        answer = 26; 
    }

    var num = -1;
    var max = -1; 
        
        
    for (var i = 0; i < compArray.length; i++){
        var similar = 0
        for (var j = 0; j < user.length; j++) {
            if (user[j] == compArray[i][j]) {
                similar++; 
                console.log(i + ", " + j);
            }
        }
        if (similar > max) {
            max = similar;
            num = i; 
        }
            

        }
        answer += num; 
        console.log(answer);

        document.getElementById("form").style.display = "none";

        switch(answer){
            case 1:
                document.getElementById("1").style.display = "inline-block";
                document.getElementById("1-title").style.display = "inline-block";
                break; 
            case 2:
                document.getElementById("2").style.display = "inline-block";
                document.getElementById("2-title").style.display = "inline-block";
                break; 
            case 3:
                document.getElementById("3").style.display = "inline-block";
                document.getElementById("3-title").style.display = "inline-block";
                break; 
            case 4:
                document.getElementById("4").style.display = "inline-block";
                document.getElementById("4-title").style.display = "inline-block";
                break; 
            case 5:
                document.getElementById("5").style.display = "inline-block";
                document.getElementById("5-title").style.display = "inline-block";
                break; 
            case 6:
                document.getElementById("6").style.display = "inline-block";
                document.getElementById("6-title").style.display = "inline-block";
                break; 
            case 7:
                document.getElementById("7").style.display = "inline-block";
                document.getElementById("7-title").style.display = "inline-block";
                break; 
            case 8:
                document.getElementById("8").style.display = "inline-block";
                document.getElementById("8-title").style.display = "inline-block";
                break; 
            case 9:
                document.getElementById("9").style.display = "inline-block";
                document.getElementById("9-title").style.display = "inline-block";
                break; 
            case 10:
                document.getElementById("10").style.display = "inline-block";
                document.getElementById("10-title").style.display = "inline-block";
                break; 
            case 11:
                document.getElementById("11").style.display = "inline-block";
                document.getElementById("11-title").style.display = "inline-block";
                break; 
            case 12:
                document.getElementById("12").style.display = "inline-block";
                document.getElementById("12-title").style.display = "inline-block";
                break; 
            case 13:
                document.getElementById("13").style.display = "inline-block";
                document.getElementById("13-title").style.display = "inline-block";
                break; 
            case 14:
                document.getElementById("14").style.display = "inline-block";
                document.getElementById("14-title").style.display = "inline-block";
                break; 
            case 15:
                document.getElementById("15").style.display = "inline-block";
                document.getElementById("15-title").style.display = "inline-block";
                break; 
            case 16:
                document.getElementById("16").style.display = "inline-block";
                document.getElementById("16-title").style.display = "inline-block";
                break; 
            case 17:
                document.getElementById("17").style.display = "inline-block";
                document.getElementById("17-title").style.display = "inline-block";
                break; 
            case 18:
                document.getElementById("18").style.display = "inline-block";
                document.getElementById("18-title").style.display = "inline-block";
                break; 
            case 19:
                document.getElementById("19").style.display = "inline-block";
                document.getElementById("19-title").style.display = "inline-block";
                break; 
            case 20:
                document.getElementById("20").style.display = "inline-block";
                document.getElementById("20-title").style.display = "inline-block";
                break; 
            case 21:
                document.getElementById("21").style.display = "inline-block";
                document.getElementById("21-title").style.display = "inline-block";
                break; 
            case 22:
                document.getElementById("22").style.display = "inline-block";
                document.getElementById("22-title").style.display = "inline-block";
                break; 
            case 23:
                document.getElementById("23").style.display = "inline-block";
                document.getElementById("21-title").style.display = "inline-block";
                break; 
            case 24:
                document.getElementById("24").style.display = "inline-block";
                document.getElementById("24-title").style.display = "inline-block";
                break; 
            case 25:
                document.getElementById("25").style.display = "inline-block";
                document.getElementById("25-title").style.display = "inline-block";
                break; 
            case 26:
                document.getElementById("26").style.display = "inline-block";
                document.getElementById("25-title").style.display = "inline-block";
                break; 
            case 27:
                document.getElementById("27").style.display = "inline-block";
                document.getElementById("27-title").style.display = "inline-block";
                break; 
            case 28:
                document.getElementById("28").style.display = "inline-block";
                document.getElementById("28-title").style.display = "inline-block";
                break; 
        }
                
  }
