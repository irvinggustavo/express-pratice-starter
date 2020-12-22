/*
Tasks
1. Create an Express Server that will live on PORT 8080.
2. Using express middleware, serve the static files from the public folder.
3. Create a GET endpoint listening for '/question'
    - This endpoint will select a random question from our data array 
    and send the question object back to the client. Make sure you don't 
    send the correctAnswer along with the question object!!
    - Remember to import the data array at the top of the page.
4. Create a POST endpoint listening for '/submit'.
    - The front-end is already set up to send this request - how could you figure out
        what key-value pairs are being sent in the POST body object? You will
        need to answer this to complete the task.
    - This endpoint will check if the user selected the correct answer
    to the corresponding question. If their selection is correct, direct 
    them to the success page. If not, direct them to the fail page.
        Hint: Use express' sendFile method to direct them to the correct page.
        You will need to prefix the file name with __dirname + '/public' in order
        to have the correct path. 
    - To complete this endpoint, you must find the corresponding 
    question in our data array and compare the correct answer to the user's
    answer.
*/