// Variables for toggling condition details
var selectedclicked = false;
var themesclicked = false;
var instrumentsclicked = false;
var standardclicked = false;
var companiesclicked = false;
var statusclicked = false;

// Get the input field for search
var input = document.getElementById("search-bar");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Cancel the default action, if needed
  event.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    if(($("#search-bar").val()).toLowerCase() == 'trees'){
        $("#selected").css("visibility", "visible");
        input.value = "";
    }
    else{
        // When selecting a condition, the details appear
        $("#selected").css("visibility", "hidden");
        selectedclicked = false;
        input.value = "";
        $("#conditions_details").css("visibility", "hidden");
        $("#conditions_details").css("height", "0px");
    }
  }
});


// Select by hitting enter, or clicking the search icon
$("#enter").click(function(){
    if((($("#search-bar").val()).toLowerCase() == 'trees')&&(selectedclicked == false)){
        $("#selected").css("visibility", "visible");
        selectedclicked = true;
        input.value = "";
    }
    else{
        $("#selected").css("visibility", "hidden");
        selectedclicked = false;
        input.value = "";
        $("#conditions_details").css("visibility", "hidden");
        $("#conditions_details").css("height", "0px");
    }
});

// Have condition detail appears
$("#selected").click(function(){
    $("#conditions_details").css("visibility", "visible");
    $("#conditions_details").css("height", "400px");
});

// Open themes and collapse all other tabs
$("#themes").click(function(){
    if(themesclicked == false){
        $("#themes").css("height", "500px");
        $("#themes").css("background-color", "#f8f5ef");
        $("#themetext").css("visibility", "visible");
        $("#theme-graph").css("visibility", "visible");
        $("#graph-title").css("visibility", "visible");
        $("#conditions_details").css("height", "900px");
        themesclicked = true;
        $("#instruments").css("height", "30px");
        $("#instruments").css("background-color", "white");
        $("#instrumenttext").css("visibility", "hidden");
        $("#instruments-graph").css("visibility", "hidden");
        $("#instruments-title").css("visibility", "hidden");
        instrumentsclicked = false;   
        $("#standard").css("height", "30px");
        $("#standard").css("background-color", "white");
        $("#standardtext").css("visibility", "hidden");
        $("#standard-graph").css("visibility", "hidden");
        $("#standard-title").css("visibility", "hidden");
        standardclicked = false;      
        $("#companies").css("height", "30px");
        $("#companies").css("background-color", "white");
        $("#companiestext").css("visibility", "hidden");
        $("#companies-graph").css("visibility", "hidden");
        $("#companies-title").css("visibility", "hidden");
        companiesclicked = false;  
        $("#status").css("height", "30px");
        $("#status").css("background-color", "white");
        $("#statustext").css("visibility", "hidden");
        $("#status-graph").css("visibility", "hidden");
        $("#statuslegend").css("visibility", "hidden");
        $("#status-title").css("visibility", "hidden");
        statusclicked = false;   
    }
    else if(themesclicked == true){
        $("#themes").css("height", "30px");
        $("#themes").css("background-color", "white");
        $("#themetext").css("visibility", "hidden");
        $("#theme-graph").css("visibility", "hidden");
        $("#graph-title").css("visibility", "hidden");
        $("#conditions_details").css("height", "400px");
        themesclicked = false;        
    }
});

// Open instruments and collapse all other tabs
$("#instruments").click(function(){
    if(instrumentsclicked == false){
        $("#instruments").css("height", "500px");
        $("#instruments").css("background-color", "#f8f5ef");
        $("#instrumenttext").css("visibility", "visible");
        $("#instruments-graph").css("visibility", "visible");
        $("#instruments-title").css("visibility", "visible");
        $("#conditions_details").css("height", "900px");
        instrumentsclicked = true;
        $("#themes").css("height", "30px");
        $("#themes").css("background-color", "white");
        $("#themetext").css("visibility", "hidden");
        $("#theme-graph").css("visibility", "hidden");
        $("#graph-title").css("visibility", "hidden");
        themesclicked = false;    
        $("#standard").css("height", "30px");
        $("#standard").css("background-color", "white");
        $("#standardtext").css("visibility", "hidden");
        $("#standard-graph").css("visibility", "hidden");
        $("#standard-title").css("visibility", "hidden");
        standardclicked = false;      
        $("#companies").css("height", "30px");
        $("#companies").css("background-color", "white");
        $("#companiestext").css("visibility", "hidden");
        $("#companies-graph").css("visibility", "hidden");
        $("#companies-title").css("visibility", "hidden");
        companiesclicked = false;  
        $("#status").css("height", "30px");
        $("#status").css("background-color", "white");
        $("#statustext").css("visibility", "hidden");
        $("#status-graph").css("visibility", "hidden");
        $("#statuslegend").css("visibility", "hidden");
        $("#status-title").css("visibility", "hidden");
        statusclicked = false;   
    }
    else if(instrumentsclicked == true){
        $("#instruments").css("height", "30px");
        $("#instruments").css("background-color", "white");
        $("#instrumenttext").css("visibility", "hidden");
        $("#instruments-graph").css("visibility", "hidden");
        $("#instruments-title").css("visibility", "hidden");
        $("#conditions_details").css("height", "400px");
        instrumentsclicked = false;        
    }
});

// Open standard/nonstandard and collapse all other tabs
$("#standard").click(function(){
    if(standardclicked == false){
        $("#standard").css("height", "500px");
        $("#standard").css("background-color", "#f8f5ef");
        $("#standardtext").css("visibility", "visible");
        $("#standard-graph").css("visibility", "visible");
        $("#standard-title").css("visibility", "visible");
        $("#conditions_details").css("height", "900px");
        standardclicked = true;
        $("#themes").css("height", "30px");
        $("#themes").css("background-color", "white");
        $("#themetext").css("visibility", "hidden");
        $("#theme-graph").css("visibility", "hidden");
        $("#graph-title").css("visibility", "hidden");
        themesclicked = false;    
        $("#instruments").css("height", "30px");
        $("#instruments").css("background-color", "white");
        $("#instrumenttext").css("visibility", "hidden");
        $("#instruments-graph").css("visibility", "hidden");
        $("#instruments-title").css("visibility", "hidden");
        instrumentsclicked = false;       
        $("#companies").css("height", "30px");
        $("#companies").css("background-color", "white");
        $("#companiestext").css("visibility", "hidden");
        $("#companies-graph").css("visibility", "hidden");
        $("#companies-title").css("visibility", "hidden");
        companiesclicked = false;  
        $("#status").css("height", "30px");
        $("#status").css("background-color", "white");
        $("#statustext").css("visibility", "hidden");
        $("#status-graph").css("visibility", "hidden");
        $("#statuslegend").css("visibility", "hidden");
        $("#status-title").css("visibility", "hidden");
        statusclicked = false;   
    }
    else if(standardclicked == true){
        $("#standard").css("height", "30px");
        $("#standard").css("background-color", "white");
        $("#standardtext").css("visibility", "hidden");
        $("#standard-graph").css("visibility", "hidden");
        $("#standard-title").css("visibility", "hidden");
        $("#conditions_details").css("height", "400px");
        standardclicked = false;        
    }
});

// Open companies and collapse all other tabs
$("#companies").click(function(){
    if(companiesclicked == false){
        $("#companies").css("height", "500px");
        $("#companies").css("background-color", "#f8f5ef");
        $("#companiestext").css("visibility", "visible");
        $("#companies-graph").css("visibility", "visible");
        $("#companies-title").css("visibility", "visible");
        $("#conditions_details").css("height", "900px");
        companiesclicked = true;
        $("#themes").css("height", "30px");
        $("#themes").css("background-color", "white");
        $("#themetext").css("visibility", "hidden");
        $("#theme-graph").css("visibility", "hidden");
        $("#graph-title").css("visibility", "hidden");
        themesclicked = false;    
        $("#instruments").css("height", "30px");
        $("#instruments").css("background-color", "white");
        $("#instrumenttext").css("visibility", "hidden");
        $("#instruments-graph").css("visibility", "hidden");
        $("#instruments-title").css("visibility", "hidden");
        instrumentsclicked = false;   
        $("#standard").css("height", "30px");
        $("#standard").css("background-color", "white");
        $("#standardtext").css("visibility", "hidden");
        $("#standard-graph").css("visibility", "hidden");
        $("#standard-title").css("visibility", "hidden");
        standardclicked = false;   
        $("#status").css("height", "30px");
        $("#status").css("background-color", "white");
        $("#statustext").css("visibility", "hidden");
        $("#status-graph").css("visibility", "hidden");
        $("#statuslegend").css("visibility", "hidden");
        $("#status-title").css("visibility", "hidden");
        statusclicked = false;  
    }
    else if(companiesclicked == true){
        $("#companies").css("height", "30px");
        $("#companies").css("background-color", "white");
        $("#companiestext").css("visibility", "hidden");
        $("#companies-graph").css("visibility", "hidden");
        $("#companies-title").css("visibility", "hidden");
        $("#conditions_details").css("height", "400px");
        companiesclicked = false;        
    }
});

// Open open/inprogress and collapse all other tabs
$("#status").click(function(){
    if(statusclicked == false){
        $("#status").css("height", "500px");
        $("#status").css("background-color", "#f8f5ef");
        $("#statustext").css("visibility", "visible");
        $("#status-graph").css("visibility", "visible");
        $("#statuslegend").css("visibility", "visible");
        $("#status-title").css("visibility", "visible");
        $("#conditions_details").css("height", "900px");
        statusclicked = true;
        $("#themes").css("height", "30px");
        $("#themes").css("background-color", "white");
        $("#themetext").css("visibility", "hidden");
        $("#theme-graph").css("visibility", "hidden");
        $("#graph-title").css("visibility", "hidden");
        themesclicked = false;    
        $("#instruments").css("height", "30px");
        $("#instruments").css("background-color", "white");
        $("#instrumenttext").css("visibility", "hidden");
        $("#instruments-graph").css("visibility", "hidden");
        $("#instruments-title").css("visibility", "hidden");
        instrumentsclicked = false;   
        $("#standard").css("height", "30px");
        $("#standard").css("background-color", "white");
        $("#standardtext").css("visibility", "hidden");
        $("#standard-graph").css("visibility", "hidden");
        $("#standard-title").css("visibility", "hidden");
        standardclicked = false;   
        $("#companies").css("height", "30px");
        $("#companies").css("background-color", "white");
        $("#companiestext").css("visibility", "hidden");
        $("#companies-graph").css("visibility", "hidden");
        $("#companies-title").css("visibility", "hidden");
        companiesclicked = false;  
    }
    else if(statusclicked == true){
        $("#status").css("height", "30px");
        $("#status").css("background-color", "white");
        $("#statustext").css("visibility", "hidden");
        $("#status-graph").css("visibility", "hidden");
        $("#statuslegend").css("visibility", "hidden");
        $("#status-title").css("visibility", "hidden");
        $("#conditions_details").css("height", "400px");
        statusclicked = false;        
    }
});