//js for quiz form
const questions = [
    {
        question: "What is the name of the instrument that Wolfgang Amadeus Mozart is most famous for playing?",
        optionA: "a) Violin",
        optionB: "b) Piano",
        optionC: "c) Flute",
        optionD: "d) Trumpet",
        correctOption: "optionB",
    },
    {
        question: "Who is often referred to as the 'Queen of Pop'?",
        optionA: "a) Madonna",
        optionB: "b) Beyoncé",
        optionC: "c) Taylor Swift",
        optionD: "d) Lady Gaga",
        correctOption: "optionA",
    },
    {
        question: "Which famous band wrote and performed the song 'Stairway to Heaven'?",
        optionA: "a) The Rolling Stones",
        optionB: "b) The Beatles",
        optionC: "c) Led Zeppelin",
        optionD: "d) Queen",
        correctOption: "optionC",
    },
    {
        question: "In which country did the musical genre 'tango' originate?",
        optionA: "a) Brazil",
        optionB: "b) Spain",
        optionC: "c) Argentina",
        optionD: "d) Italy",
        correctOption: "optionC",
    },
    {
        question: "Who is known for being the 'King of Rock and Roll'?",
        optionA: "a) Michael Jackson",
        optionB: "b) Elvis Presley",
        optionC: "c) Bob Dylan",
        optionD: "d) Prince",
        correctOption: "optionB",
    }
]

let shuffledQs = []

function handleQuestions() { 
    while (shuffledQs.length <= 4) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQs.includes(random)) {
            shuffledQs.push(random)
        }
    }
}

let questionNum = 1
let score = 0
let wrongAttempt = 0
let index = 0

function NextQuestion(index) {
    handleQuestions()
    const currentQ = shuffledQs[index]
    document.getElementById("question-number").innerHTML = questionNum
    document.getElementById("player-score").innerHTML = score
    document.getElementById("display-question").innerHTML = currentQ.question;
    document.getElementById("option-one-label").innerHTML = currentQ.optionA;
    document.getElementById("option-two-label").innerHTML = currentQ.optionB;
    document.getElementById("option-three-label").innerHTML = currentQ.optionC;
    document.getElementById("option-four-label").innerHTML = currentQ.optionD;
}

function checkForAnswer() {
    const currentQ = shuffledQs[index]
    const currentQAns = currentQ.correctOption
    const options = document.getElementsByName("option");
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQAns) {
            correctOption = option.labels[0].id
        }
    })
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQAns) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            score++
            index++
            setTimeout(() => {
                questionNum++
            }, 1000)
        }
        else if (option.checked && option.value !== currentQAns) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            index++
            setTimeout(() => {
                questionNum++
            }, 1000)
        }
    })
}

function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    setTimeout(() => {
        if (index <= 4) {
            NextQuestion(index)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

function handleEndGame() {
    let remark = null
    let remarkColor = null

    if (score <= 2) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
        playerGrade = "Bronze"
    }
    else if (score >= 3 && score < 5) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
        playerGrade = "Silver"
    }
    else if (score = 5) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
        playerGrade = "Gold"
    }

    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = score
    document.getElementById('score-modal').style.display = "flex"
}

function closeScoreModal() {
    questionNum = 1
    score = 0
    wrongAttempt = 0
    index = 0
    shuffledQs = []
    NextQuestion(index)
    document.getElementById('score-modal').style.display = "none"
}

function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}