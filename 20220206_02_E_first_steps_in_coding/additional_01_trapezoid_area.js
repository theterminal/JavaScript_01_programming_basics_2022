// 20220209 - JavaScript - Programming Basics - First Steps in Coding
// Additional 01 - Trapezoid Area - judge: https://judge.softuni.org/Contests/Practice/Index/1642#0


function trapezoidArea(input) {
    let b1 = Number(input[0]);
    let b2 = Number(input[1]);
    let h = Number(input[2]);

    let area = (b1 + b2) * h / 2;

    console.log(area.toFixed(2));
}

trapezoidArea(["8", "13", "7"]);
