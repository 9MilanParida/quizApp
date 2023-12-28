import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    myQuestions=[
        {
            id:"Question1",
            question:"which is capital of odisha",
            answare:{
                a:"bhubaneswar",
                b:"mumbai",
                c:"j&k"
            },
            correctAnsware:"a"
        },
    ]
}