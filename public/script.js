fetch('http://localhost:8080/question')
    .then(resp => resp.json())
    .then(data => displayForm(data))
    .catch(err => console.log(err));

let displayForm = (obj) => {
    let answerContainer = document.getElementById('input-container');
    document.getElementById('question').innerHTML = obj.question;

    for(let i = 0; i < obj.options.length; i++){
        let inputContainer = document.createElement('div');
        let answerOption = document.createElement('input');
        let key = document.getElementById('hidden');
        let label = document.createElement('label');

        inputContainer.appendChild(answerOption);
        inputContainer.appendChild(label);
        inputContainer.setAttribute("class", 'answer-option');

        answerOption.setAttribute("type", "radio");
        answerOption.setAttribute("id", obj.options[i]);
        answerOption.setAttribute("value", obj.options[i]);
        answerOption.setAttribute("name", "answer");

        key.setAttribute("value", obj.key);
        label.setAttribute("for", obj.options[i]);
        label.innerHTML = obj.options[i];  
        
        answerContainer.appendChild(inputContainer);
    }
}
