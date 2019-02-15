var lol = "";
var words = new Array(11);

words[0] = ["S", 1, 0, 0, 0, 0, 0, 0, 0, 0];
words[1] = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0];
words[2] = [0, 1, 1, 0, 0, 0, 1, 1, 1, 0];
words[3] = [0, 0, 1, 1, 0, 0, 1, 0, 1, 0];
words[4] = [0, 0, 0, 1, 1, 1, 1, 0, 1, 0];
words[5] = [0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
words[6] = [0, 0, 1, 1, 1, 1, 0, 0, 1, 1];
words[7] = [1, 1, 1, 0, 0, 1, 0, 0, 0, 1];
words[8] = [1, 0, 0, 0, 0, 1, 1, 1, 1, 1];
words[9] = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
words[10] = [0, 0, 0, 0, 1, 1, 1, 1, 1, "E"];


var currentRow = 0;
var currentCol = 0;
// array
var coors = new Array();
var newElem = document.createElement("div");

function initGrid() {
    var grid = "";
    grid += "<table border='0'>"

    for (var i = 0; i < 11; i++) {
        grid += "<tr>";
        for (var j = 0; j < 10; j++) {
            grid += "<td class='gridder'";

            // grid += ">" + words[i][j] + "</td>";


            grid += ">" + "<img src='https://i.pinimg.com/originals/2c/c1/3e/2cc13e6422218aa521474b36346b85f9.jpg' id='wall' width='50'>" + "</td>";
        }
            grid += "</tr>";
        }
        grid += ' <button type="button" onclick="reset()" class="btn2">Show Path!</button><br/>'
        grid += '</table>';

    return grid;
}

    function buildGrid() {
        var grid = "";
        grid += "<table border='0'>"

        for (var i = 0; i < 11; i++) {
            grid += "<tr>";
            for (var j = 0; j < 10; j++) {
                grid += "<td class='gridder'";

                // grid += ">" + words[i][j] + "</td>";

                if (words[i][j] === 0) {
                    grid += ">" + "<img src='https://i.pinimg.com/originals/2c/c1/3e/2cc13e6422218aa521474b36346b85f9.jpg' id='wall'>" + "</td>";
                }

                else {
                    grid += ">" + "<img src='http://texturelib.com/Textures/road/bare%20asphalt/road_bare_asphalt_0033_01_preview.jpg' id='path'>" + "</td>";
                    // push 
                    coors.push("[" + i + ","+ j + "]");

                }
            };
            grid += "</tr>";
        }

        grid += '</table>';
        // grid += '<input type="number" name="row" label="row" value="row" id="row" size=5>&nbsp;';
        // grid += '<input type="number" name="column" label="column" value="column" id="column" size=5>&nbsp;';
        // grid += '<input type="number" name="newWord" label="new Word" value="new word" id="word" size=5>&nbsp;';
        // grid += '<button type="button" onclick="changeWord()">Change</button><br/>';
        grid += coors;
        // DISPLAY
        newElem.innerHTML = coors;

        return grid;
    }

    document.write(initGrid())

    function changeWord() {
        var row = document.getElementById("row").value;
        var column = document.getElementById("column").value;
        var word = document.getElementById("word").value;
        words[row][column] = word;
        lol = word;

        document.write("you are now in coordinates: " + row + ", " + column + "!")


        document.body.innerHTML = buildGrid()
    }

     function reset(){
            document.body.innerHTML = initGrid();
            document.body.innerHTML = buildGrid();
            newElem.innerHTML = coors;
        }
    