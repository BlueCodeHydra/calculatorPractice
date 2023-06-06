//Global variables
var prevCalc = 0;
var calc = "";


//The following function displays a number in the textfield when a number is clicked.
//Note that it keeps concatenating numbers which are clicked. 
function showNum(value) {
    document.frmCalc.txtNumber.value += value;

}

//========================================================================================//
// Decrement and Increment Functions
//========================================================================================//

/**
 * Decrement by 1
 */
function decrement() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num--;
            document.frmCalc.txtNumber.value = num;
            calc = "Decrement";
        }
}
/**
 * Increment by 1
 */
function increment() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num++;
            document.frmCalc.txtNumber.value = num;
            calc = "Increment";
        }
}

//========================================================================================//
// Basic Functions
//========================================================================================//

/**
 * Addtion
 */
function add() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Add";
        }
}
/**
 * Subtraction
 */
function subtract() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Subtract";
        }
}
/**
 * Multiplication
 */
function multiply() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Multiplication";
        }
}
/**
 * Division
 */
function divide() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Division";
        }
}

//========================================================================================//
// Power and Sqrt Functions
//========================================================================================//

/**
 * Power of second input number
 */
function power() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Power";
        }
}
/**
 * Power^2
 */
function power2() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num = num**2;
            document.frmCalc.txtNumber.value = num; 
            calc = "Power2";
        }
}
/**
 * Sqrt
 */
function sqrt() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num = Math.sqrt(num);
            document.frmCalc.txtNumber.value = num; 
            calc = "Power2";
        }
}

//========================================================================================//
// Floor and Round Functions
//========================================================================================//
/**
 * Power of second input number
 */
function floor() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num = Math.floor(num);
            document.frmCalc.txtNumber.value = num; 
            calc = "Floor";
        }
}
function round() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num = Math.round(num);
            document.frmCalc.txtNumber.value = num; 
            calc = "Round";
        }
}

//The following function is called when "Calculate" button is clicked.
//Note that this function is dependent on the value of global variable.        
function calculate() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            // Addition
            if (calc == "Add"){
                var total = prevCalc + num;
                document.frmCalc.txtNumber.value = total;
            }
            //Subtraction
            else if (calc == "Subtract"){
                var total = prevCalc-num;
                document.frmCalc.txtNumber.value = total;
            }
            // Multipication
            else if (calc == "Multiplication"){
                var total = prevCalc * num;
                document.frmCalc.txtNumber.value = total;               
            }
            // Division
            else if (calc == "Division"){
                var total = prevCalc / num;
                document.frmCalc.txtNumber.value = total;               
            }
            // Power 
            else if (calc == "Power"){
                var total = prevCalc ** num;
                document.frmCalc.txtNumber.value = total;               
            }
            // Power2
            else if (calc == "Power2"){
                var total = prevCalc ** 2;
                document.frmCalc.txtNumber.value = total;               
            }      
    }
}

function clear() {
	document.frmCalc.txtNumber.value = "";
	prevCalc = 0;
	calc = "";
}