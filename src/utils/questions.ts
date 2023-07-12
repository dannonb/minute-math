export const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const createChoices = (answer: number) => {
    const wrongChoices: number[] = []
    while (wrongChoices.length < 3) {
        let possibleChoice = randomNumber(0, (answer + 1) * 2)
        if (possibleChoice !== answer && !wrongChoices.includes(possibleChoice)) {
            wrongChoices.push(possibleChoice)
        }
    }
    let options: number[] = [answer, ...wrongChoices]
    options.sort(() => Math.random() - 0.5)
    return options
}

class Question {
    expression: string;
    answer: number;
    choices: number[];
    constructor(expression: string, answer: number) {
        this.expression = expression
        this.answer = answer
        this.choices = createChoices(answer)
    }
}

export const additionQuestion = (difficulty: number) => {
    let first, second, sum

    if (difficulty === 1) {
        first = randomNumber(1, 50)
        second = randomNumber(1, 50)
    } else if (difficulty === 2) {
        first = randomNumber(50, 100)
        second = randomNumber(50, 100)
    } else {
        first = randomNumber(100, 999)
        second = randomNumber(100, 999)
    }

    sum = first + second

    return new Question(
        `${first} + ${second} =`,
        sum
    )
}

export const subtractionQuestion = (difficulty: number) => {
    let first, second, difference

    if (difficulty === 1) {
        first = randomNumber(1, 45)
        second = randomNumber(first + 1, 50)
    } else if (difficulty === 2) {
        first = randomNumber(50, 95)
        second = randomNumber(first + 1, 100)
    } else {
        first = randomNumber(100, 995)
        second = randomNumber(first + 1, 999)
    }

    difference = second - first

    return new Question(
        `${second} - ${first} =`,
        difference
    )
}

export const multiplicationQuestion = (difficulty: number) => {
    let first, second, product

    if (difficulty === 1) {
        first = randomNumber(1, 12)
        second = randomNumber(1, 12)
    } else if (difficulty === 2) {
        first = randomNumber(10, 100)
        second = randomNumber(1, 10)
    } else {
        first = randomNumber(100, 999)
        second = randomNumber(1, 10)
    }

    product = first * second

    return new Question(
        `${first} x ${second} =`,
        product
    )
}

export const exponentQuestion = (difficulty: number) => {
    let base, exponent, power

    if (difficulty === 1) {
        base = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100][randomNumber(0, 9)]
        exponent = 2
    } else if (difficulty === 2) {
        base = randomNumber(1, 10)
        exponent = randomNumber(2, 4)
    } else {
        base = randomNumber(11, 100)
        exponent = randomNumber(3, 5)
    }

    power = Math.pow(base, exponent)

    return new Question(
        `${base} to the power of ${exponent}`,
        power
    )
}

// console.log('level 1 addition', additionQuestion(1))
// console.log('level 2 addition', additionQuestion(2))
// console.log('level 3 addition', additionQuestion(3))

// console.log('level 1 subtraction', subtractionQuestion(1))
// console.log('level 2 subtraction', subtractionQuestion(2))
// console.log('level 3 subtraction', subtractionQuestion(3))

// console.log('level 1 multiplication', multiplicationQuestion(1))
// console.log('level 2 multiplication', multiplicationQuestion(2))
// console.log('level 3 multiplication', multiplicationQuestion(3))

// console.log('level 1 exponent', exponentQuestion(1))
// console.log('level 2 exponent', exponentQuestion(2))
// console.log('level 3 exponent', exponentQuestion(3))