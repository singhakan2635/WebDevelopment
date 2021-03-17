# Exam 2 Questions

* Answers should be roughly 2-5 sentences, and in your own words.  
* Some questions ask for a code sample - keep them short and to the point.
* Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.
* I cannot assume knowledge you don't demonstrate, so be clear and explicit.

## Q1: The first rule I've given about REST services is that the URL should represent a resource.  What does that mean?  Give an example where a url DOES not represent a resource, then describe how to modify it so that it does.

  It means that in the case of the REST services which should never use the verb for our endpoint path, instaed we should make sure to use the noun , which represent the entity which we are trying to retrieve as pathname. The main reason behing is HTTP method request already have verb (GET/PUT/POST/PATCH).

  For Example - 
  //Does not represent a resource
  ```
    app.get('/getItems', (req,res) => 
    {
      //do something
    });
  ```
  In the above example , we are already calling the HTTP request get and then we are specify the pathname as the getItems as well.Modyfying the above example

  ```
    app.get('/Items', (req, res) => 
    {
      //do something
    });
  ```

## Q2: If the service returns the username as a plain text string (not JSON), what is wrong with the below and what would fix it? (Assume the service works without error)
```
  const username = fetch('/username');
  console.log(`user is named ${username}`);
```  
In the above example, the problem with the fetch is , it returns a promise not a value. 'Promise' is async and to access the async data , we need a callback. So in this case, the console.log would return a promise not the value of the username.

We can fix this by doing a callback on the promise which is returned by the fetch and then we can do console.log.
```
    const username = fetch('/username');
    username.then( ( val ) => 
    {
        console.log(`user is named ${val}`)
    });
```

## Q3: What does it mean to "store your state in the DOM"?  Why shouldn't you do this?

  An application "state" is the summary of the current values of all the things/variables that can change, while DOM stand sfor Document Object Model which is hierarchial tree structure of the JS Node. "Store Your state in the DOM" means storing the state in the DOM instead of storing in variables/ objects and use those to update or render the page as required.

  Reasons why we shouldn't do it are :
  1. Once we update the DOM, we lose all the previous state
  2. In some cases it can lead to memeory leakage or if we have hige amount of data, it might slow down the application
  3. Since we are storing everyting in the DOM state, it's prone to security threats as its easily accessible.

## Q4: Explain the differences between a multiple-page-web application and single-page-web application.  Be sure to fully demonstrate your understanding.
  In multiple page web application, each web page is fully reloaded everytime it receives a corresponsing request. In the case Single Page Web Application(SPA), whenever the user request some changes , it will call a restful service and use the returned data from the REST service to only update or render the necessary content part.
   MPAs has multiple web pages , which makes it heavier but its good for displaying huge amount of data as there are there are alot of options while the SPA are lightweight and efficient as it takes less time to do partial page render.

## Q5: What is Progressive Enhancement?  What is the difference in an SPA that uses Progressive Enhancement compared to an SPA that doesn't use Progressive Enhancement?
  Progressive Enhancement is taking a non client side JS web app and augmenting it with the JS. This means that it uses a feature detection to determine whether browsers can handle more modern functionality. PE delivers as much as possible features to the user with the most powerful browser while providing base essential content to the user without a browser that is capable of running all required code.

  SPA that doesn't use PE might stop working in the case the browser does not fully support the client side JS. This means that people with the older browser may not be able to surf all the webpages as soem of them might be designed for modern or latest browser. On the other hand, the SPA which uses the PE, is much more secure and it make the code compatible with all the browser.

## Q6: Explain how a REST service is or is not similar to a dynamic asset.
  REST stands for Representational State Transfer, an architectural style providing service standards for interaction between server and client. In the case of the REST architecture, client makes request to get or modify the resources on the server , then the server sends the request. It's similar to the dynamic asserts in term of the request reponse pattern but the dynamic asserts generates HTML fragments and send it to the client. Where as the REST sends back the reponse or data that needs to be processed by the client side JS before its displayed to the client.


## Q7: Give an example of a piece of information you should not store in a cookie, and why you should not store it that way.
  An example of a piece of information , which we should not store in a cookie is any sensitive data like password. As it can be accessed by anyone who can get a hold on the user cookie and can access the sensitve data or information directly.

## Q8: Explain why it is useful to separate a function that fetches data from what you do with that data
  In any application, a large portion of the code is always repetative or reusable. Separation of concern / function is the ebst practice since it decouples the code as much as possible. The seperation of a fucntion that fetches data from what we do , also improves the skimming of the code by reducing the effort.

## Q9: Explain why try/catch is useless when dealing with asynchronous errors (assume you aren't using async/await)
  Try/Catch is useless because most of the times we are suign non-blocking asynchronous code. This is because the "try" statement runs and then its following promise runs but the callback associated with the fucntion doesn't run yet. The problem is error is thrown in the callback function , which is not executed at the same time as the catch block.The catch block never catchs the error.

## Q10: Is separation of concerns a front end issue, a server-side issue, or both?  Describe an example the demonstrates your answer.
  Seperation of concerns is both a front end as well as server side issue as it improves the program's clarity and durability. Failing to do so, would lead to the poor quality of code.

Server Side JS - 
```
const addAbilityToCalculate = function(a, b)
{ 
  return a * b; 
}

app.post('/result', (req, res)=>
{ 
  const item = req.body;
  const c = calculate(item.a, item.b); 
  res.send(JSON.stringify({c})); 
});
```

Client Side JS - 
```
const getItems = function()
{
   //something
  } 
const renderPage = function()
{ 
  //something... 
} 
const fetchPostItems = function()
{ 
  return fetch('/items', {
        method: 'POST', 
        headers: new Headers({ 'content-type':'application/json' }),
        body: JSON.stringify({ getItems() }
        )} 
)};

const performCalculationWork = function()
{ 
  fetchPostItems() 
  .then(req=>
    { 
      renderPage();
    }); 
}

document.querySelector('.button').addEventListener('click', e=>
{ 
  performCalculationWork();
}); 
```

