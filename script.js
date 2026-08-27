function positiveNegativeZero() {
    let number1 = Number(prompt("Enter a number:"));

    if (number1 > 0) {
        alert("Positive");
    } else if (number1 < 0) {
        alert("Negative");
    } else {
        alert("Zero");
    }
}

function evenOdd() {
    let number2 = Number(prompt("Enter a number:"));

    if (number2 % 2 === 0) {
        alert("Even");
    } else {
        alert("Odd");
    }
}

function votingEligibility() {
    let age = Number(prompt("Enter your age:"));

    if (age >= 18) {
        alert("You can vote");
    } else {
        alert("You cannot vote");
    }
}

function gradeCalculator() {
    let marks = Number(prompt("Enter your marks:"));

    if (marks >= 90 && marks <= 100) {
        alert("A+");
    } else if (marks >= 80) {
        alert("A");
    } else if (marks >= 70) {
        alert("B");
    } else if (marks >= 60) {
        alert("C");
    } else {
        alert("Fail");
    }
}

function largestTwo() {
    let first = Number(prompt("Enter first number:"));
    let second = Number(prompt("Enter second number:"));

    if (first > second) {
        alert("Largest: " + first);
    } else if (second > first) {
        alert("Largest: " + second);
    } else {
        alert("Both numbers are equal");
    }
}

function temperatureChecker() {
    let temperature = Number(prompt("Enter temperature:"));

    if (temperature > 40) {
        alert("Very Hot");
    } else if (temperature >= 30) {
        alert("Hot");
    } else if (temperature >= 20) {
        alert("Normal");
    } else {
        alert("Cold");
    }
}

function loginSystem() {
    let correctUsername = "admin";
    let correctPassword = "1234";

    let username = prompt("Enter username:");
    let password = prompt("Enter password:");

    if (username === correctUsername) {
        if (password === correctPassword) {
            alert("Login successful");
        } else {
            alert("Wrong password");
        }
    } else {
        alert("Wrong username");
    }
}

function admissionChecker() {
    let studentAge = Number(prompt("Enter your age:"));
    let studentMarks = Number(prompt("Enter your marks:"));
    let interview = prompt("Interview result (pass/fail):");

    if (studentAge >= 18 && studentMarks >= 60) {
        if (interview.toLowerCase() === "pass") {
            alert("Admission successful");
        } else {
            alert("Interview failed");
        }
    } else {
        alert("You do not meet the age or marks requirement");
    }
}

function atmWithdrawal() {
    let correctPin = "1234";

    let balance = Number(prompt("Enter account balance:"));
    let amount = Number(prompt("Enter withdrawal amount:"));
    let pin = prompt("Enter PIN:");

    if (pin === correctPin) {
        if (amount > 0) {
            if (amount <= balance) {
                let remainingBalance = balance - amount;
                alert("Withdrawal successful\nRemaining balance: " + remainingBalance);
            } else {
                alert("Insufficient balance");
            }
        } else {
            alert("Withdrawal amount must be greater than 0");
        }
    } else {
        alert("Incorrect PIN");
    }
}