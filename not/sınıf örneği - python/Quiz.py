from Question import Question

question_prompts = [
        "3 + 3 = ?\n(a)6\n(b)7\n(c)8\n(d)9", 
        "4 + 3 = ?\n(a)6\n(b)7\n(c)8\n(d)9", 
        "5 + 3 = ?\n(a)6\n(b)7\n(c)8\n(d)9", 
        "6 + 3 = ?\n(a)6\n(b)7\n(c)8\n(d)9"
    ]

questions = [
    Question(question_prompts[0], "a"),
    Question(question_prompts[1], "b"),
    Question(question_prompts[2], "c"),
    Question(question_prompts[3], "d")
]

def run_test(questions):
    score = 0

    for question in questions:
        answer = input(question.prompt)
        if answer== question.answer:
            score += 1
            

    print("You got " + str(score) + "/" + str(len(questions)) + " correct.")

run_test(questions)
