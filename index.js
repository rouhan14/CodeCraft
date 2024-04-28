class home {

    static id = "hello";

    constructor() {
        this.element = null;
        this.children = [];
    }

    getElement() {
        const tag = document.createElement("div");
        const text = document.createTextNode("");
        tag.appendChild(text);
        tag.classList.add("home");
        tag.classList.add("childBearingDiv");
        const button = document.createElement("button");
        const buttonText = document.createTextNode("Generate Code");
        button.appendChild(buttonText);
        button.classList.add("generateCode");
        button.addEventListener("click", () => {

        var code = OuterGenerateCode();
        console.log(code)

        // fetch('index.php', {
        //     method: 'POST',
        //     body: this.code,
        // })
        // .then(response => {
        //     if (!response.ok) {
        //         throw new Error('Network response was not ok');
        //     }
        //     return response.text();
        // })
        // .then(output => {
        //     console.log(output);
        // })
        // .catch(error => {
        //     console.error('Error:', error);
        // });


        let xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText); // display the output in the console
        }
        };

        xmlhttp.open("POST", "index.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send("code=" + code);

        });



        tag.appendChild(button);
        this.element = tag;
        return tag;
    }

    // create a function that adds a child to the children array whenever a child is added to its element
    addChild(child) {
        this.children.push(child);
    }

    // create a function that removes a child from the children array whenever a child is removed from its element
    removeChild(child) {
        this.children.splice(this.children.indexOf(child), 1);
    }

    // create a function that removes the element from the DOM and deletes the instance
    deleteElement() {
        this.element.remove();
        delete this;
    }

    // populating home elmenet's children array
    populateChildren() {
        const home = document.getElementsByClassName("home")[0];

        // get all the children of the home element
        this.children = [];

        for (let i = 0; i < this.element.children.length; i++) {
            if (this.element.children[i].classList.contains("for_loop")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the for_loop_list array
                for (let j = 0; j < for_loop_list.length; j++) {
                    if (for_loop_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(for_loop_list[j]);
                    }
                }
            }
            else if (this.element.children[i].classList.contains("while_loop")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the while_loop_list array
                for (let j = 0; j < while_loop_list.length; j++) {
                    if (while_loop_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(while_loop_list[j]);
                    }
                }
            }
            else if (this.element.children[i].classList.contains("variable")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the variable_list array
                for (let j = 0; j < variable_list.length; j++) {
                    if (variable_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(variable_list[j]);
                    }
                }
            }
            else if (this.element.children[i].classList.contains("arithemetic")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the arithemetic_list array
                for (let j = 0; j < arithemetic_list.length; j++) {
                    if (arithemetic_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(arithemetic_list[j]);
                    }
                }
            }
            else if (this.element.children[i].classList.contains("if_statement")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the if_statement_list array
                for (let j = 0; j < if_statement_list.length; j++) {
                    if (if_statement_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(if_statement_list[j]);
                    }
                }
            }
            else if (this.element.children[i].classList.contains("if_else")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the if_else_list array
                for (let j = 0; j < if_else_list.length; j++) {
                    if (if_else_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(if_else_list[j]);
                    }
                }
            }
            else if (this.element.children[i].classList.contains("foo")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the function_list array
                for (let j = 0; j < foo_list.length; j++) {
                    if (foo_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(foo_list[j]);
                    }
                }
            }
            else if (this.element.children[i].classList.contains("foo_call")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the function_call_list array
                for (let j = 0; j < foo_call_list.length; j++) {
                    if (foo_call_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(foo_call_list[j]);
                    }
                }
            }
            else if (this.element.children[i].classList.contains("print")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the print_list array
                for (let j = 0; j < print_list.length; j++) {
                    if (print_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(print_list[j]);
                    }
                }
            }
            else if (this.element.children[i].classList.contains("read_file")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the print_list array
                for (let j = 0; j < read_file_list.length; j++) {
                    if (read_file_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(read_file_list[j]);
                    }
                }
            }
            else if (this.element.children[i].classList.contains("write_file")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the print_list array
                for (let j = 0; j < write_file_list.length; j++) {
                    if (write_file_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(read_file_list[j]);
                    }
                }
            }
        }
    }

    // create a function to generate code using the children array
    generateCode() {
        this.populateChildren();
        let code = "";
        for (let i = 0; i < this.children.length; i++) {
            code += this.children[i].generateCode();
        }
        return code;
    }
}

let variable_list = [];
let for_loop_list = [];
let if_else_list = [];
let while_loop_list = [];
let if_statement_list = [];
let arithemetic_list = [];
let print_list = [];
let foo_list = [];
let foo_call_list = [];
let read_file_list = [];
let write_file_list = [];

var element = new home();
const main_area = document.getElementById("main_area");
main_area.setAttribute("data-parent-id", home.id);
main_area.appendChild(element.getElement());

class variable {

    static id = 0;


    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.element = null;
    }

    getElement() {
        // create the element and add it to the DOM
        const tag = document.createElement("div");
        const input1 = document.createElement("input");
        input1.type = "text";
        input1.classList.add("variableName");
        input1.placeholder = "Variable Name";

        // Change the name of the variable when the user changes the name in the input box
        input1.addEventListener("input", (event) => {
            this.name = event.target.value;
        })

        const span = document.createElement("span");
        span.innerHTML = " = ";
        const input2 = document.createElement("input");
        input2.type = "text";
        input2.classList.add("variableValue");
        input2.placeholder = "Variable Value";

        // Change the value of the variable when the user changes the value in the input box
        input2.addEventListener("input", (event) => {
            this.value = event.target.value;
        })

        tag.appendChild(input1);
        tag.appendChild(span);
        tag.appendChild(input2);
        tag.classList.add("variable");
        // add a button at top right corner to remove the div and the object
        const button = document.createElement("button");
        button.innerHTML = "X";
        button.classList.add("deleteButton");
        button.addEventListener("click", () => {
            this.deleteElement();
        });
        tag.appendChild(button);
        tag.setAttribute("data-parent-id", variable.id);
        this.element = tag;
        return tag;
    }

    deleteElement() {
        // remove the element from the DOM and delete the instance
        this.element.remove();
        delete this;
    }

    generateCode() {
        // return the code for php
        return "$" + this.name + " = " + this.value + ";<br>";
    }

};

class for_loop {

    static id = 0;

    constructor(init = 0, condition = 0, increment = 0) {
        this.init = init;
        this.condition = condition;
        this.increment = increment;
        this.children = []
        this.element = null;
    }

    getElement() {
        var tag = document.createElement("div");
        var text = document.createTextNode("");
        var span = document.createElement("span");
        span.innerHTML = "For ";
        var input1 = document.createElement("input");
        input1.type = "text";
        input1.classList.add("forLoopInit");
        input1.placeholder = "Init";

        input1.addEventListener("input", (event) => {
            this.init = event.target.value;
        })

        var span1 = document.createElement("span");
        span1.innerHTML = "; ";

        var input2 = document.createElement("input");
        input2.type = "text";
        input2.classList.add("forLoopCondition");
        input2.placeholder = "Condition";

        input2.addEventListener("input", (event) => {
            this.condition = event.target.value;
        })

        var span2 = document.createElement("span");
        span2.innerHTML = "; ";

        var input3 = document.createElement("input");
        input3.type = "text";
        input3.classList.add("forLoopIncrement");
        input3.placeholder = "Increment";

        input3.addEventListener("input", (event) => {
            this.increment = event.target.value;
        })

        tag.appendChild(span);
        tag.appendChild(input1);
        tag.appendChild(span1);
        tag.appendChild(input2);
        tag.appendChild(span2);
        tag.appendChild(input3);
        tag.appendChild(text);
        tag.classList.add("for_loop");
        tag.classList.add("childBearingDiv");
        // Add a button at top right corner to remove the div delete the object as well
        var button = document.createElement("button");
        button.innerHTML = "X";
        button.classList.add("deleteButton");
        button.addEventListener("click", () => {
            this.deleteElement();
        });
        tag.appendChild(button);
        tag.setAttribute("data-parent-id", for_loop.id);
        this.element = tag;
        return tag;
    }

    deleteElement() {
        // remove the element from the DOM and delete the instance
        this.element.remove();
        delete this;
    }

    populateChildren() {
        this.children = [];
        // Checking if there is any element inside the childBearingDiv other than delete button, and input fields
        if (this.element.children.length > 3) {
            // If there is any element, then add it to the children array with the help of the id
            for (let i = 0; i < this.element.children.length; i++) {
                if (this.element.children[i].classList.contains("for_loop")) {
                    // check for the data-parent-id of the HTML code and pick that respective object from the for_loop_list array
                    for (let j = 0; j < for_loop_list.length; j++) {
                        if (for_loop_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                            this.children.push(for_loop_list[j]);
                        }
                    }
                }
                else if (this.element.children[i].classList.contains("while_loop")) {
                    // check for the data-parent-id of the HTML code and pick that respective object from the while_loop_list array
                    for (let j = 0; j < while_loop_list.length; j++) {
                        if (while_loop_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                            this.children.push(while_loop_list[j]);
                        }
                    }
                }
                else if (this.element.children[i].classList.contains("variable")) {
                    // check for the data-parent-id of the HTML code and pick that respective object from the variable_list array
                    for (let j = 0; j < variable_list.length; j++) {
                        if (variable_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                            this.children.push(variable_list[j]);
                        }
                    }
                }
                else if (this.element.children[i].classList.contains("if_statement")) {
                    // check for the data-parent-id of the HTML code and pick that respective object from the if_statement_list array
                    for (let j = 0; j < if_statement_list.length; j++) {
                        if (if_statement_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                            this.children.push(if_statement_list[j]);
                        }
                    }
                }
                else if (this.element.children[i].classList.contains("arithemetic")) {
                    // check for the data-parent-id of the HTML code and pick that respective object from the arithemetic_list array
                    for (let j = 0; j < arithemetic_list.length; j++) {
                        if (arithemetic_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                            this.children.push(arithemetic_list[j]);
                        }
                    }
                }
                else if (this.element.children[i].classList.contains("if_else")) {
                    // check for the data-parent-id of the HTML code and pick that respective object from the if_else_list array
                    for (let j = 0; j < if_else_list.length; j++) {
                        if (if_else_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                            this.children.push(if_else_list[j]);
                        }
                    }
                }
                else if (this.element.children[i].classList.contains("foo")) {
                    // check for the data-parent-id of the HTML code and pick that respective object from the function_list array
                    for (let j = 0; j < foo_list.length; j++) {
                        if (foo_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                            this.children.push(foo_list[j]);
                        }
                    }
                }
                else if (this.element.children[i].classList.contains("foo_call")) {
                    // check for the data-parent-id of the HTML code and pick that respective object from the function_call_list array
                    for (let j = 0; j < foo_call_list.length; j++) {
                        if (foo_call_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                            this.children.push(foo_call_list[j]);
                        }
                    }
                }
                else if (this.element.children[i].classList.contains("print")) {
                    // check for the data-parent-id of the HTML code and pick that respective object from the print_list array
                    for (let j = 0; j < print_list.length; j++) {
                        if (print_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                            this.children.push(print_list[j]);
                        }
                    }
                }
                else if (this.element.children[i].classList.contains("read_file")) {
                    // check for the data-parent-id of the HTML code and pick that respective object from the print_list array
                    for (let j = 0; j < read_file_list.length; j++) {
                        if (read_file_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                            this.children.push(read_file_list[j]);
                        }
                    }
                }
                else if (this.element.children[i].classList.contains("write_file")) {
                    // check for the data-parent-id of the HTML code and pick that respective object from the print_list array
                    for (let j = 0; j < write_file_list.length; j++) {
                        if (write_file_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                            this.children.push(read_file_list[j]);
                        }
                    }
                }
            }
        }
    }

    generateCode() {
        this.populateChildren();
        // return the code for php
        if (isNaN(this.init.charAt(0)) && this.init.charAt(0) != "$") {
            this.init = "$" + this.init;
        }
        if (isNaN(this.condition.charAt(0)) && this.condition.charAt(0) != "$") {
            this.condition = "$" + this.condition;
        }
        if (isNaN(this.increment.charAt(0)) && this.increment.charAt(0) != "$") {
            this.increment = "$" + this.increment;
        }
        var code = "for (" + this.init + "; " + this.condition + "; " + this.increment + ") {<br>";
        for (let i = 0; i < this.children.length; i++) {
            code += this.children[i].generateCode();
        }
        code += "<br>}<br>";
        return code;
    }

};

class while_loop {

    static id = 0;

    constructor(variable, variable2) {
        this.variable = variable;
        this.variable2 = variable2;
        this.condition = ">"
        this.children = []
        this.element = null;
    }

    getElement() {
        var tag = document.createElement("div");
        var text = document.createTextNode("");
        var span = document.createElement("span");
        span.innerHTML = "While ";
        var variable = document.createElement("input");
        variable.type = "text";
        variable.classList.add("whileLoopCondition1");
        variable.placeholder = "variable";

        variable.addEventListener("input", (event) => {
            this.variable = event.target.value;
        })

        // Create a drop down to select the comparing operators such as >, < , <=, >=, ==, !=
        var select = document.createElement("select");
        select.classList.add("select");
        var option1 = document.createElement("option");
        option1.value = ">";
        option1.text = ">";
        var option2 = document.createElement("option");
        option2.value = "<";
        option2.text = "<";
        var option3 = document.createElement("option");
        option3.value = ">=";
        option3.text = ">=";
        var option4 = document.createElement("option");
        option4.value = "<=";
        option4.text = "<=";
        var option5 = document.createElement("option");
        option5.value = "==";
        option5.text = "==";
        var option6 = document.createElement("option");
        option6.value = "!=";
        option6.text = "!=";
        select.appendChild(option1);
        select.appendChild(option2);
        select.appendChild(option3);
        select.appendChild(option4);
        select.appendChild(option5);
        select.appendChild(option6);

        select.addEventListener("change", (event) => {
            this.condition = event.target.value;
        })

        var variable2 = document.createElement("input");
        variable2.type = "text";
        variable2.classList.add("whileLoopCondition2");
        variable2.placeholder = "variable";

        variable2.addEventListener("input", (event) => {
            this.variable2 = event.target.value;
        })

        // Add a button at top right corner to remove the div delete the object as well
        var button = document.createElement("button");
        button.innerHTML = "X";
        button.classList.add("deleteButton");
        button.addEventListener("click", () => {
            this.deleteElement();
        });

        tag.appendChild(span);
        tag.appendChild(variable);
        tag.appendChild(select);
        tag.appendChild(variable2);
        tag.appendChild(button);
        tag.appendChild(text);
        tag.classList.add("while_loop");
        tag.classList.add("childBearingDiv");
        tag.setAttribute("data-parent-id", while_loop.id);
        this.element = tag;
        return tag;
    }

    deleteElement() {
        // remove the element from the DOM and delete the instance
        this.element.remove();
        delete this;
    }

    populateChildren() {
        this.children = [];
        // Checking if there is any element inside the childBearingDiv other than delete button, and input fields
        for (let i = 0; i < this.element.children.length; i++) {
            if (this.element.children[i].classList.contains("for_loop")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the for_loop_list array
                for (let j = 0; j < for_loop_list.length; j++) {
                    if (for_loop_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(for_loop_list[j]);
                    }
                }
            }
            else if (this.element.children[i].classList.contains("while_loop")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the while_loop_list array
                for (let j = 0; j < while_loop_list.length; j++) {
                    if (while_loop_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(while_loop_list[j]);
                    }
                }
            }
            else if (this.element.children[i].classList.contains("variable")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the variable_list array
                for (let j = 0; j < variable_list.length; j++) {
                    if (variable_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(variable_list[j]);
                    }
                }
            }
            else if (this.element.children[i].classList.contains("arithemetic")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the arithemetic_list array
                for (let j = 0; j < arithemetic_list.length; j++) {
                    if (arithemetic_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(arithemetic_list[j]);
                    }
                }
            }
            else if (this.element.children[i].classList.contains("if_statement")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the if_statement_list array
                for (let j = 0; j < if_statement_list.length; j++) {
                    if (if_statement_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(if_statement_list[j]);
                    }
                }
            }
            else if (this.element.children[i].classList.contains("if_else")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the if_else_list array
                for (let j = 0; j < if_else_list.length; j++) {
                    if (if_else_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(if_else_list[j]);
                    }
                }
            }
            else if (this.element.children[i].classList.contains("foo")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the function_list array
                for (let j = 0; j < foo_list.length; j++) {
                    if (foo_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(foo_list[j]);
                    }
                }
            }
            else if (this.element.children[i].classList.contains("foo_call")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the function_call_list array
                for (let j = 0; j < foo_call_list.length; j++) {
                    if (foo_call_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(foo_call_list[j]);
                    }
                }
            }
            else if (this.element.children[i].classList.contains("print")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the print_list array
                for (let j = 0; j < print_list.length; j++) {
                    if (print_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(print_list[j]);
                    }
                }
            }
            else if (this.element.children[i].classList.contains("read_file")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the print_list array
                for (let j = 0; j < read_file_list.length; j++) {
                    if (read_file_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(read_file_list[j]);
                    }
                }
            }
            else if (this.element.children[i].classList.contains("write_file")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the print_list array
                for (let j = 0; j < write_file_list.length; j++) {
                    if (write_file_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(read_file_list[j]);
                    }
                }
            }
        }
    }

    generateCode() {
        this.populateChildren();
        // return the code for php
        if (this.variable != undefined) {
            if (isNaN(this.variable.charAt(0)) && this.variable.charAt(0) != "$") {
                this.variable = "$" + this.variable;
            }
        }
        if (this.variable2 != undefined) {
            if (isNaN(this.variable2.charAt(0)) && this.variable2.charAt(0) != "$") {
                this.variable2 = "$" + this.variable2;
            }
        }
        var code = "while(" + this.variable + "" + this.condition + "" + this.variable2 + ") {<br>";
        for (let i = 0; i < this.children.length; i++) {
            code += this.children[i].generateCode();
        }
        code += "<br>}<br>";
        return code;

    }
}

class if_else {

    static id = 0;

    constructor(variable, variable1) {
        this.variable = variable;
        this.variable1 = variable1;
        this.if_children = [];
        this.else_children = [];
        this.condition = ">";
        this.element = null;
    }

    getElement() {
        var tag = document.createElement("div");
        var text = document.createTextNode("");
        var span = document.createElement("span");
        span.innerHTML = "If ";
        var variable = document.createElement("input");
        variable.type = "text";
        variable.classList.add("if_else_input1");
        variable.placeholder = "variable";

        variable.addEventListener("input", (event) => {
            this.variable = event.target.value;
        })

        // Create a drop down to select the comparing operators such as >, < , <=, >=, ==, !=
        var select = document.createElement("select");
        select.classList.add("select");
        var option1 = document.createElement("option");
        option1.value = ">";
        option1.text = ">";
        var option2 = document.createElement("option");
        option2.value = "<";
        option2.text = "<";
        var option3 = document.createElement("option");
        option3.value = ">=";
        option3.text = ">=";
        var option4 = document.createElement("option");
        option4.value = "<=";
        option4.text = "<=";
        var option5 = document.createElement("option");
        option5.value = "==";
        option5.text = "==";
        var option6 = document.createElement("option");
        option6.value = "!=";
        option6.text = "!=";
        select.appendChild(option1);
        select.appendChild(option2);
        select.appendChild(option3);
        select.appendChild(option4);
        select.appendChild(option5);
        select.appendChild(option6);

        select.addEventListener("change", (event) => {
            this.condition = event.target.value;
        })

        var variable1 = document.createElement("input");
        variable1.type = "text";
        variable1.classList.add("if_else_input2");
        variable1.placeholder = "variable";

        variable1.addEventListener("input", (event) => {
            this.variable1 = event.target.value;
        })

        var dropable = document.createElement("div");
        dropable.classList.add("dropable");
        dropable.classList.add("if_children");
        dropable.classList.add("childBearingDiv");
        var span1 = document.createElement("span");
        span1.innerHTML = " Else ";
        var dropable1 = document.createElement("div");
        dropable1.classList.add("dropable");
        dropable1.classList.add("else_children");
        dropable1.classList.add("childBearingDiv");
        // Add a button at top right corner to remove the div delete the object as well
        var button = document.createElement("button");
        button.innerHTML = "X";
        button.classList.add("deleteButton");
        button.addEventListener("click", () => {
            this.deleteElement();
        });
        tag.appendChild(span);
        tag.appendChild(variable);
        tag.appendChild(select);
        tag.appendChild(variable1);
        tag.appendChild(button);
        tag.appendChild(dropable);
        tag.appendChild(span1);
        tag.appendChild(text);
        tag.appendChild(dropable1);
        tag.classList.add("if_else");
        tag.setAttribute("data-parent-id", if_else.id);
        this.element = tag;
        return tag;
    }

    deleteElement() {
        // remove the element from the DOM and delete the instance
        this.element.remove();
        delete this;
    }

    populateIfChildren() {
        this.if_children = [];

        var if_dropable = this.element.getElementsByClassName("if_children")[0];
        // Checking if there is any element inside the childBearingDiv other than delete button, and input fields
        for (let i = 0; i < if_dropable.children.length; i++) {
            if (if_dropable.children[i].classList.contains("for_loop")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the for_loop_list array
                for (let j = 0; j < for_loop_list.length; j++) {
                    if (for_loop_list[j].element.getAttribute("data-parent-id") == if_dropable.children[i].getAttribute("data-parent-id")) {
                        this.if_children.push(for_loop_list[j]);
                    }
                }
            }
            else if (if_dropable.children[i].classList.contains("while_loop")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the while_loop_list array
                for (let j = 0; j < while_loop_list.length; j++) {
                    if (while_loop_list[j].element.getAttribute("data-parent-id") == if_dropable.children[i].getAttribute("data-parent-id")) {
                        this.if_children.push(while_loop_list[j]);
                    }
                }
            }
            else if (if_dropable.children[i].classList.contains("variable")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the variable_list array
                for (let j = 0; j < variable_list.length; j++) {
                    if (variable_list[j].element.getAttribute("data-parent-id") == if_dropable.children[i].getAttribute("data-parent-id")) {
                        this.if_children.push(variable_list[j]);
                    }
                }
            }
            else if (if_dropable.children[i].classList.contains("arithemetic")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the arithemetic_list array
                for (let j = 0; j < arithemetic_list.length; j++) {
                    if (arithemetic_list[j].element.getAttribute("data-parent-id") == if_dropable.children[i].getAttribute("data-parent-id")) {
                        this.if_children.push(arithemetic_list[j]);
                    }
                }
            }
            else if (if_dropable.children[i].classList.contains("if_statement")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the if_statement_list array
                for (let j = 0; j < if_statement_list.length; j++) {
                    if (if_statement_list[j].element.getAttribute("data-parent-id") == if_dropable.children[i].getAttribute("data-parent-id")) {
                        this.if_children.push(if_statement_list[j]);
                    }
                }
            }
            else if (if_dropable.children[i].classList.contains("if_else")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the if_else_list array
                for (let j = 0; j < if_else_list.length; j++) {
                    if (if_else_list[j].element.getAttribute("data-parent-id") == if_dropable.children[i].getAttribute("data-parent-id")) {
                        this.if_children.push(if_else_list[j]);
                    }
                }
            }
            else if (if_dropable.children[i].classList.contains("foo")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the function_list array
                for (let j = 0; j < foo_list.length; j++) {
                    if (foo_list[j].element.getAttribute("data-parent-id") == if_dropable.children[i].getAttribute("data-parent-id")) {
                        this.if_children.push(foo_list[j]);
                    }
                }
            }
            else if (if_dropable.children[i].classList.contains("foo_call")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the function_call_list array
                for (let j = 0; j < foo_call_list.length; j++) {
                    if (foo_call_list[j].element.getAttribute("data-parent-id") == if_dropable.children[i].getAttribute("data-parent-id")) {
                        this.if_children.push(foo_call_list[j]);
                    }
                }
            }
            else if (if_dropable.children[i].classList.contains("print")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the print_list array
                for (let j = 0; j < print_list.length; j++) {
                    if (print_list[j].element.getAttribute("data-parent-id") == if_dropable.children[i].getAttribute("data-parent-id")) {
                        this.if_children.push(print_list[j]);
                    }
                }
            }
            else if (if_dropable.children[i].classList.contains("read_file")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the print_list array
                for (let j = 0; j < read_file_list.length; j++) {
                    if (read_file_list[j].element.getAttribute("data-parent-id") == if_dropable.children[i].getAttribute("data-parent-id")) {
                        this.if_children.push(read_file_list[j]);
                    }
                }
            }
            else if (if_dropable.children[i].classList.contains("write_file")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the print_list array
                for (let j = 0; j < write_file_list.length; j++) {
                    if (write_file_list[j].element.getAttribute("data-parent-id") == if_dropable.children[i].getAttribute("data-parent-id")) {
                        this.if_children.push(read_file_list[j]);
                    }
                }
            }
        }
    }

    populateElseChildren() {
        this.else_children = [];

        var else_dropable = this.element.getElementsByClassName("else_children")[0];
        // Checking if there is any element inside the childBearingDiv other than delete button, and input fields
        for (let i = 0; i < else_dropable.children.length; i++) {
            if (else_dropable.children[i].classList.contains("for_loop")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the for_loop_list array
                for (let j = 0; j < for_loop_list.length; j++) {
                    if (for_loop_list[j].element.getAttribute("data-parent-id") == else_dropable.children[i].getAttribute("data-parent-id")) {
                        this.else_children.push(for_loop_list[j]);
                    }
                }
            }
            else if (else_dropable.children[i].classList.contains("while_loop")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the while_loop_list array
                for (let j = 0; j < while_loop_list.length; j++) {
                    if (while_loop_list[j].element.getAttribute("data-parent-id") == else_dropable.children[i].getAttribute("data-parent-id")) {
                        this.else_children.push(while_loop_list[j]);
                    }
                }
            }
            else if (else_dropable.children[i].classList.contains("variable")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the variable_list array
                for (let j = 0; j < variable_list.length; j++) {
                    if (variable_list[j].element.getAttribute("data-parent-id") == else_dropable.children[i].getAttribute("data-parent-id")) {
                        this.else_children.push(variable_list[j]);
                    }
                }
            }
            else if (else_dropable.children[i].classList.contains("arithemetic")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the arithemetic_list array
                for (let j = 0; j < arithemetic_list.length; j++) {
                    if (arithemetic_list[j].element.getAttribute("data-parent-id") == else_dropable.children[i].getAttribute("data-parent-id")) {
                        this.else_children.push(arithemetic_list[j]);
                    }
                }
            }
            else if (else_dropable.children[i].classList.contains("if_statement")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the if_statement_list array
                for (let j = 0; j < if_statement_list.length; j++) {
                    if (if_statement_list[j].element.getAttribute("data-parent-id") == else_dropable.children[i].getAttribute("data-parent-id")) {
                        this.else_children.push(if_statement_list[j]);
                    }
                }
            }
            else if (else_dropable.children[i].classList.contains("if_else")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the if_else_list array
                for (let j = 0; j < if_else_list.length; j++) {
                    if (if_else_list[j].element.getAttribute("data-parent-id") == else_dropable.children[i].getAttribute("data-parent-id")) {
                        this.else_children.push(if_else_list[j]);
                    }
                }
            }
            else if (else_dropable.children[i].classList.contains("foo")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the function_list array
                for (let j = 0; j < foo_list.length; j++) {
                    if (foo_list[j].element.getAttribute("data-parent-id") == else_dropable.children[i].getAttribute("data-parent-id")) {
                        this.else_children.push(foo_list[j]);
                    }
                }
            }
            else if (else_dropable.children[i].classList.contains("foo_call")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the function_call_list array
                for (let j = 0; j < foo_call_list.length; j++) {
                    if (foo_call_list[j].element.getAttribute("data-parent-id") == else_dropable.children[i].getAttribute("data-parent-id")) {
                        this.else_children.push(foo_call_list[j]);
                    }
                }
            }
            else if (else_dropable.children[i].classList.contains("print")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the print_list array
                for (let j = 0; j < print_list.length; j++) {
                    if (print_list[j].element.getAttribute("data-parent-id") == else_dropable.children[i].getAttribute("data-parent-id")) {
                        this.else_children.push(print_list[j]);
                    }
                }
            }
            else if (else_dropable.children[i].classList.contains("read_file")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the print_list array
                for (let j = 0; j < read_file_list.length; j++) {
                    if (read_file_list[j].element.getAttribute("data-parent-id") == else_dropable.children[i].getAttribute("data-parent-id")) {
                        this.else_children.push(read_file_list[j]);
                    }
                }
            }
            else if (else_dropable.children[i].classList.contains("write_file")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the print_list array
                for (let j = 0; j < write_file_list.length; j++) {
                    if (write_file_list[j].element.getAttribute("data-parent-id") == else_dropable.children[i].getAttribute("data-parent-id")) {
                        this.else_children.push(read_file_list[j]);
                    }
                }
            }
        }
    }

    generateCode() {
        this.populateIfChildren();
        this.populateElseChildren();
        // return the code for php
        if (isNaN(this.variable.charAt(0)) && this.variable.charAt(0) != "$") {
            this.variable = "$" + this.variable;
        }
        if (this.variable1 != undefined) {
            if (isNaN(this.variable1.charAt(0)) && this.variable1.charAt(0) != "$") {
                this.variable1 = "$" + this.variable1;
            }
        }
        var code = "$if (" + this.variable + "" + this.condition + "" + this.variable1 + ") {<br>";

        if (this.if_children.length > 0) {
            for (let i = 0; i < this.if_children.length; i++) {
                code += this.if_children[i].generateCode();
            }
        }
        code += "<br>} else {<br>";
        if (this.else_children.length > 0) {
            for (let i = 0; i < this.else_children.length; i++) {
                code += this.else_children[i].generateCode();
            }
        }
        code += "<br>}<br>";
        return code;
    }
}

class arithemetic {

    static id = 0;

    constructor(input1, input2, input3) {
        this.input1 = input1;
        this.input2 = input2;
        this.input3 = input3;
        this.condition = "+";
        this.element = null;
    }

    getElement() {
        var tag = document.createElement("div");
        var text = document.createTextNode("");
        var input1 = document.createElement("input");
        input1.type = "text";
        input1.classList.add("arithemeticLeft");
        input1.placeholder = "Left";

        input1.addEventListener("input", (event) => {
            this.input1 = event.target.value;
        })

        var span1 = document.createElement("span");
        span1.innerHTML = " = ";
        var input2 = document.createElement("input");
        input2.type = "text";
        input2.classList.add("arithemeticMiddle");
        input2.placeholder = "Middle";

        input2.addEventListener("input", (event) => {
            this.input2 = event.target.value;
        })

        // Create a drop down to select the arithemetic operator
        var select = document.createElement("select");
        select.classList.add("select");
        var option1 = document.createElement("option");
        option1.value = "+";
        option1.text = "+";
        var option2 = document.createElement("option");
        option2.value = "-";
        option2.text = "-";
        var option3 = document.createElement("option");
        option3.value = "*";
        option3.text = "*";
        var option4 = document.createElement("option");
        option4.value = "/";
        option4.text = "/";
        select.appendChild(option1);
        select.appendChild(option2);
        select.appendChild(option3);
        select.appendChild(option4);

        select.addEventListener("change", (event) => {
            this.condition = event.target.value;
        })

        var input3 = document.createElement("input");
        input3.type = "text";
        input3.classList.add("arithemeticRight");
        input3.placeholder = "Right";

        input3.addEventListener("input", (event) => {
            this.input3 = event.target.value;
        })

        // Add a button at top right corner to remove the div delete the object as well
        var button = document.createElement("button");
        button.innerHTML = "X";
        button.classList.add("deleteButton");
        button.addEventListener("click", () => {
            this.deleteElement();
        });
        tag.appendChild(input1);
        tag.appendChild(span1);
        tag.appendChild(input2);
        tag.appendChild(select);
        tag.appendChild(text);
        tag.appendChild(input3);
        tag.appendChild(button);
        tag.classList.add("arithemetic");
        tag.setAttribute("data-parent-id", arithemetic.id);
        this.element = tag;
        return tag;
    }

    deleteElement() {
        // remove the element from the DOM and delete the instance
        this.element.remove();
        delete this;
    }

    generateCode() {
        // return the code for php
        if (isNaN(this.input1.charAt(0)) && this.input1.charAt(0) != "$") {
            this.input1 = "$" + this.input1;
        }
        if (isNaN(this.input2.charAt(0)) && this.input2.charAt(0) != "$") {
            this.input2 = "$" + this.input2;
        }
        if (this.input3 != undefined) {
            if (isNaN(this.input3.charAt(0)) && this.input3.charAt(0) != "$") {
                this.input3 = "$" + this.input3;
            }
        }
        return this.input1 + " = " + this.input2 + this.condition + this.input3 + ";<br>";
    }
}

class if_statement {

    static id = 0;

    constructor(variable, variable1) {
        this.variable = variable;
        this.variable1 = variable1;
        this.condition = ">";
        this.children = []
        this.element = null;
    }

    getElement() {
        var tag = document.createElement("div");
        var text = document.createTextNode("");
        var span = document.createElement("span");
        span.innerHTML = "If ";
        var variable = document.createElement("input");
        variable.type = "text";
        variable.classList.add("if_input1");
        variable.placeholder = "variable";

        variable.addEventListener("input", (event) => {
            this.variable = event.target.value;
        })

        // Create a drop down to select the comparing operators such as >, < , <=, >=, ==, !=
        var select = document.createElement("select");
        select.classList.add("select");
        var option1 = document.createElement("option");
        option1.value = ">";
        option1.text = ">";
        var option2 = document.createElement("option");
        option2.value = "<";
        option2.text = "<";
        var option3 = document.createElement("option");
        option3.value = ">=";
        option3.text = ">=";
        var option4 = document.createElement("option");
        option4.value = "<=";
        option4.text = "<=";
        var option5 = document.createElement("option");
        option5.value = "==";
        option5.text = "==";
        var option6 = document.createElement("option");
        option6.value = "!=";
        option6.text = "!=";
        select.appendChild(option1);
        select.appendChild(option2);
        select.appendChild(option3);
        select.appendChild(option4);
        select.appendChild(option5);
        select.appendChild(option6);

        select.addEventListener("change", (event) => {
            this.condition = event.target.value;
        })

        var variable1 = document.createElement("input");
        variable1.type = "text";
        variable1.classList.add("if_input2");
        variable1.placeholder = "variable";

        variable1.addEventListener("input", (event) => {
            this.variable1 = event.target.value;
        })

        var dropable = document.createElement("div");
        dropable.classList.add("dropable");
        dropable.classList.add("childBearingDiv");
        // Add a button at top right corner to remove the div delete the object as well
        var button = document.createElement("button");
        button.innerHTML = "X";
        button.classList.add("deleteButton");
        button.addEventListener("click", () => {
            this.deleteElement();
        });
        tag.appendChild(span);
        tag.appendChild(variable);
        tag.appendChild(select);
        tag.appendChild(variable1);
        tag.appendChild(button);
        tag.appendChild(dropable);
        tag.appendChild(text);
        tag.classList.add("if_statement");
        tag.setAttribute("data-parent-id", if_statement.id);
        this.element = tag;
        return tag;
    }

    deleteElement() {
        // remove the element from the DOM and delete the instance
        this.element.remove();
        delete this;
    }

    populateChildren() {
        this.children = [];
        // storing the div with class "dropable" in a variable along with all its children
        var dropable = this.element.getElementsByClassName("dropable")[0];

        for (let i = 0; i < dropable.children.length; i++) {
            if (dropable.children[i].classList.contains("for_loop")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the for_loop_list array
                for (let j = 0; j < for_loop_list.length; j++) {
                    if (for_loop_list[j].element.getAttribute("data-parent-id") == dropable.children[i].getAttribute("data-parent-id")) {
                        this.children.push(for_loop_list[j]);
                    }
                }
            }
            else if (dropable.children[i].classList.contains("while_loop")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the while_loop_list array
                for (let j = 0; j < while_loop_list.length; j++) {
                    if (while_loop_list[j].element.getAttribute("data-parent-id") == dropable.children[i].getAttribute("data-parent-id")) {
                        this.children.push(while_loop_list[j]);
                    }
                }
            }
            else if (dropable.children[i].classList.contains("variable")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the variable_list array
                for (let j = 0; j < variable_list.length; j++) {
                    if (variable_list[j].element.getAttribute("data-parent-id") == dropable.children[i].getAttribute("data-parent-id")) {
                        this.children.push(variable_list[j]);
                    }
                }
            }
            else if (this.element.children[i].classList.contains("arithemetic")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the arithemetic_list array
                for (let j = 0; j < arithemetic_list.length; j++) {
                    if (arithemetic_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(arithemetic_list[j]);
                    }
                }
            }
            else if (dropable.children[i].classList.contains("if_statement")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the if_statement_list array
                for (let j = 0; j < if_statement_list.length; j++) {
                    if (if_statement_list[j].element.getAttribute("data-parent-id") == dropable.children[i].getAttribute("data-parent-id")) {
                        this.children.push(if_statement_list[j]);
                    }
                }
            }
            else if (dropable.children[i].classList.contains("if_else")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the if_else_list array
                for (let j = 0; j < if_else_list.length; j++) {
                    if (if_else_list[j].element.getAttribute("data-parent-id") == dropable.children[i].getAttribute("data-parent-id")) {
                        this.children.push(if_else_list[j]);
                    }
                }
            }
            else if (this.element.children[i].classList.contains("foo")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the function_list array
                for (let j = 0; j < foo_list.length; j++) {
                    if (foo_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(foo_list[j]);
                    }
                }
            }
            else if (this.element.children[i].classList.contains("foo_call")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the function_call_list array
                for (let j = 0; j < foo_call_list.length; j++) {
                    if (foo_call_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(foo_call_list[j]);
                    }
                }
            }
            else if (this.element.children[i].classList.contains("print")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the print_list array
                for (let j = 0; j < print_list.length; j++) {
                    if (print_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(print_list[j]);
                    }
                }
            }
            else if (this.element.children[i].classList.contains("read_file")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the print_list array
                for (let j = 0; j < read_file_list.length; j++) {
                    if (read_file_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(read_file_list[j]);
                    }
                }
            }
            else if (this.element.children[i].classList.contains("write_file")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the print_list array
                for (let j = 0; j < write_file_list.length; j++) {
                    if (write_file_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(read_file_list[j]);
                    }
                }
            }
        }
    }

    generateCode() {
        this.populateChildren();
        // return the code for php
        if (this.variable != undefined) {
            if (isNaN(this.variable.charAt(0)) && this.variable.charAt(0) != "$") {
                this.variable = "$" + this.variable;
            }
        }
        if (this.variable1 != undefined) {
            if (isNaN(this.variable1.charAt(0)) && this.variable1.charAt(0) != "$") {
                this.variable1 = "$" + this.variable1;
            }
        }
        var code = "if(" + this.variable + "" + this.condition + "" + this.variable1 + "){<br>";
        for (let i = 0; i < this.children.length; i++) {
            code += this.children[i].generateCode();
        }
        code += "<br>}<br>";
        return code;
    }
}

class print {
    static id = 0;

    constructor(input) {
        this.input = input;
        this.element = null;
    }

    deleteElement() {
        // remove the element from the DOM and delete the instance
        this.element.remove();
        delete this;
    }

    getElement() {
        var tag = document.createElement("div");
        var text = document.createTextNode("");
        tag.appendChild(text);
        tag.className = "print";
        var span = document.createElement("span");
        span.innerHTML = "Print";
        tag.appendChild(span);
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("value", "");
        input.placeholder = "Enter the value to print";

        input.addEventListener("input", (event) => {
            this.input = event.target.value;
        })

        tag.appendChild(input);
        var button = document.createElement("button");
        button.addEventListener("click", () => {
            this.deleteElement();
        });
        button.innerHTML = "X";
        button.className = "deleteButton";
        tag.appendChild(button);
        tag.setAttribute("data-parent-id", print.id);
        this.element = tag;
        print.id += 1;
        this.element = tag;
        return tag;
    }

    generateCode() {
        return "echo \"" + this.input + "\";<br>";
    }
}

class foo {
    static id = 0;

    constructor(input) {
        this.input = input;
        this.children = [];
        this.element = null;
    }

    deleteElement() {
        // remove the element from the DOM and delete the instance
        this.element.remove();
        delete this;
    }

    getElement() {
        var tag = document.createElement("div");
        var text = document.createTextNode("");
        tag.appendChild(text);
        tag.classList.add("foo");
        tag.classList.add("childBearingDiv");

        var span = document.createElement("span");
        span.innerHTML = "Function";
        tag.appendChild(span);
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("value", "");
        input.placeholder = "Enter the arguements";

        input.addEventListener("input", (event) => {
            this.input = event.target.value;
        })

        tag.appendChild(input);
        var button = document.createElement("button");
        button.addEventListener("click", () => {
            this.deleteElement();
        });
        button.innerHTML = "X";
        button.className = "deleteButton";
        tag.appendChild(button);
        tag.setAttribute("data-parent-id", foo.id);
        this.element = tag;
        foo.id += 1;
        this.element = tag;
        return tag;
    }

    populateChildren() {
        this.children = [];
        // Checking if there is any element inside the childBearingDiv other than delete button, and input fields
        for (let i = 0; i < this.element.children.length; i++) {
            if (this.element.children[i].classList.contains("for_loop")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the for_loop_list array
                for (let j = 0; j < for_loop_list.length; j++) {
                    if (for_loop_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(for_loop_list[j]);
                    }
                }
            }
            else if (this.element.children[i].classList.contains("while_loop")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the while_loop_list array
                for (let j = 0; j < while_loop_list.length; j++) {
                    if (while_loop_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(while_loop_list[j]);
                    }
                }
            }
            else if (this.element.children[i].classList.contains("variable")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the variable_list array
                for (let j = 0; j < variable_list.length; j++) {
                    if (variable_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(variable_list[j]);
                    }
                }
            }
            else if (this.element.children[i].classList.contains("arithemetic")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the arithemetic_list array
                for (let j = 0; j < arithemetic_list.length; j++) {
                    if (arithemetic_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(arithemetic_list[j]);
                    }
                }
            }
            else if (this.element.children[i].classList.contains("if_statement")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the if_statement_list array
                for (let j = 0; j < if_statement_list.length; j++) {
                    if (if_statement_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(if_statement_list[j]);
                    }
                }
            }
            else if (this.element.children[i].classList.contains("if_else")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the if_else_list array
                for (let j = 0; j < if_else_list.length; j++) {
                    if (if_else_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(if_else_list[j]);
                    }
                }
            }
            else if (this.element.children[i].classList.contains("foo")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the function_list array
                for (let j = 0; j < foo_list.length; j++) {
                    if (foo_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(foo_list[j]);
                    }
                }
            }
            else if (this.element.children[i].classList.contains("foo_call")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the function_call_list array
                for (let j = 0; j < foo_call_list.length; j++) {
                    if (foo_call_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(foo_call_list[j]);
                    }
                }
            }
            else if (this.element.children[i].classList.contains("print")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the print_list array
                for (let j = 0; j < print_list.length; j++) {
                    if (print_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(print_list[j]);
                    }
                }
            }
            else if (this.element.children[i].classList.contains("read_file")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the print_list array
                for (let j = 0; j < read_file_list.length; j++) {
                    if (read_file_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(read_file_list[j]);
                    }
                }
            }
            else if (this.element.children[i].classList.contains("write_file")) {
                // check for the data-parent-id of the HTML code and pick that respective object from the print_list array
                for (let j = 0; j < write_file_list.length; j++) {
                    if (write_file_list[j].element.getAttribute("data-parent-id") == this.element.children[i].getAttribute("data-parent-id")) {
                        this.children.push(read_file_list[j]);
                    }
                }
            }
        }
    }

    generateCode() {
        this.populateChildren();
        var code = "function(" + this.input + ") {<br>";
        for (let i = 0; i < this.children.length; i++) {
            code += this.children[i].generateCode();
        }
        code += "<br>}<br>";
        return code;
    }
};

class foo_call {
    static id = 0;

    constructor(input) {
        this.input = input;
        this.element = null;
    }

    deleteElement() {
        // remove the element from the DOM and delete the instance
        this.element.remove();
        delete this;
    }

    getElement() {
        var tag = document.createElement("div");
        var text = document.createTextNode("");
        tag.appendChild(text);
        tag.classList.add("foo_call");

        var span = document.createElement("span");
        span.innerHTML = "Function Call";
        tag.appendChild(span);
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("value", "");
        input.placeholder = "Function with args";

        input.addEventListener("input", (event) => {
            this.input = event.target.value;
        })

        tag.appendChild(input);
        var button = document.createElement("button");
        button.addEventListener("click", () => {
            this.deleteElement();
        });
        button.innerHTML = "X";
        button.className = "deleteButton";
        tag.appendChild(button);
        tag.setAttribute("data-parent-id", foo_call.id);
        this.element = tag;
        foo_call.id += 1;
        this.element = tag;
        return tag;
    }

    generateCode() {
        return this.input + ";<br>";
    }
}

class read_file {
    static id = 0;

    constructor(input) {
        this.input = input;
        this.element = null;
    }

    deleteElement() {
        // remove the element from the DOM and delete the instance
        this.element.remove();
        delete this;
    }

    getElement() {
        var tag = document.createElement("div");
        var text = document.createTextNode("");
        tag.appendChild(text);
        tag.classList.add("read_file");

        var span = document.createElement("span");
        span.innerHTML = "Read File";
        tag.appendChild(span);
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("value", "");
        input.placeholder = "File name";

        input.addEventListener("input", (event) => {
            this.input = event.target.value;
        })

        tag.appendChild(input);
        var button = document.createElement("button");
        button.addEventListener("click", () => {
            this.deleteElement();
        });
        button.innerHTML = "X";
        button.className = "deleteButton";
        tag.appendChild(button);
        tag.setAttribute("data-parent-id", read_file.id);
        this.element = tag;
        read_file.id += 1;
        this.element = tag;
        return tag;
    }

    generateCode() {
        // generate code to read the file in php syntax
        return "file_get_contents(\"" + this.input + "\");<br>";
    }
}

class write_file {
    static id = 0;

    constructor(input) {
        this.input = input;
        this.element = null;
    }

    deleteElement() {
        // remove the element from the DOM and delete the instance
        this.element.remove();
        delete this;
    }

    getElement() {
        var tag = document.createElement("div");
        var text = document.createTextNode("");
        tag.appendChild(text);
        tag.classList.add("write_file");

        var span = document.createElement("span");
        span.innerHTML = "Write File";
        tag.appendChild(span);
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("value", "");
        input.placeholder = "File name";

        input.addEventListener("input", (event) => {
            this.input = event.target.value;
        })

        tag.appendChild(input);
        var button = document.createElement("button");
        button.addEventListener("click", () => {
            this.deleteElement();
        });
        button.innerHTML = "X";
        button.className = "deleteButton";
        tag.appendChild(button);
        tag.setAttribute("data-parent-id", write_file.id);
        this.element = tag;
        write_file.id += 1;
        this.element = tag;
        return tag;
    }

    generateCode() {
        // generate code to write the file in php syntax
        return "file_put_contents(\"" + this.input + "\");<br>";
    }
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function _drop(event, el) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");

    switch (data) {
        case "variable":
            var tag = new variable("var", "val");
            variable_list.push(tag);
            variable.id += 1;
            el.insertAdjacentElement('beforeend', tag.getElement());
            break;
        case "for_loop":
            var tag = new for_loop("init", "condition", "increment");
            for_loop_list.push(tag);
            for_loop.id += 1;
            el.insertAdjacentElement('beforeend', tag.getElement());
            break;
        case "while_loop":
            var tag = new while_loop("condition");
            while_loop_list.push(tag);
            while_loop.id += 1;
            el.insertAdjacentElement('beforeend', tag.getElement());
            break;
        case "if_else":
            var tag = new if_else("condition");
            if_else_list.push(tag);
            if_else.id += 1;
            el.insertAdjacentElement('beforeend', tag.getElement());
            break;
        case "arithemetic":
            var tag = new arithemetic("left", "right");
            arithemetic_list.push(tag);
            arithemetic.id += 1;
            el.insertAdjacentElement('beforeend', tag.getElement());
            break;
        case "if_statement":
            var tag = new if_statement("condition");
            if_statement_list.push(tag);
            if_statement.id += 1;
            el.insertAdjacentElement('beforeend', tag.getElement());
            break;
        case "print":
            var tag = new print("input");
            print_list.push(tag);
            print.id += 1;
            el.insertAdjacentElement('beforeend', tag.getElement());
            break;
        case "foo":
            var tag = new foo("input");
            foo_list.push(tag);
            foo.id += 1;
            el.insertAdjacentElement('beforeend', tag.getElement());
            break;
        case "foo_call":
            var tag = new foo_call("input");
            foo_call_list.push(tag);
            foo_call.id += 1;
            el.insertAdjacentElement('beforeend', tag.getElement());
            break;
        case "read_file":
            var tag = new read_file("input");
            read_file_list.push(tag);
            read_file.id += 1;
            el.insertAdjacentElement('beforeend', tag.getElement());
            break;
        case "write_file":
            var tag = new write_file("input");
            write_file_list.push(tag);
            write_file.id += 1;
            el.insertAdjacentElement('beforeend', tag.getElement());
            break;
        default:
            break;
    }
}

function drop(event) {
    let el = event.target;
    while (!el.classList.contains("childBearingDiv")) {
        el = el.parentElement;
    }
    _drop(event, el);
}

function allowDrop(event) {
    event.preventDefault();
}

function OuterGenerateCode() {
    const code = element.generateCode();
    // Display the this code int the code box
    document.getElementById("code").innerHTML += "<br>";
    document.getElementById("code").innerHTML += code;
    return code;
}