# Exam 1 Questions

* Answers should be roughly 2-5 sentences, and in your own words.  
* Some questions ask for a code sample - keep them short and to the point.
* Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.
* I cannot assume knowledge you don't demonstrate, so be clear and explicit.

## Q: What is the difference between a dynamic asset and a static asset?
    Dynamic asset are the resources that can change on the fly and respond differently based on the user's request. The static asset is resources which is same for each and every request.

## Q: What is the difference between a relative and absolute file path in an href?  What is the "webserver root/document root" and how do absolute/relative paths relate to this document root?
    In an href, a relative path doesn't have to include the full path and it's referenced from the current context. Absolute path has domain name included. A document root is a file path where the homepage file exists(eg. myWebsite/index.html, myWebsite is the document root). An absolute path start with the document root but a relative path depends on the current location that it's being used.

## Q: What is the difference between server-side and client-side JS?
    Server Side JS runs on the server like NodeJS, and basically used to create dynamic pages.Also, sever-side JS can access the different server side resources easily like database and server hard disk. On the other hand, the client side JS runs on the clients like Web Browser and basically used to have better interactive web pages. Also, client-side Js is restricted to clients machine resources like computing power and permissions.

## Q: What are the differences between `var`, `const`, and `let`, and when should you use each of them?
    `Var` is globally scoped and hoisted where as `const` and `let` is block scoped and cannot be redefined outside the scope. 'var' and 'let' do not need to be assigned value when declared where as `const` , once defined and delared cannot be changed.
    We can use `var` in case we have to use the variable globally. We use `let` when we have to alter the value of the varibale in the block at some point and we use `const, in the case we don't have to changes the varibale once defined.

## Q: What are the 4 ways to create inheritance in JS? (no examples needed, just a sentence describing each)
    `Constructor Invocation Pattern` : In this inheritance we set the successor prototype to include a parent object to be inherited.
    `Using class after ES6` : In this inheritance we use the class as blueprint to create inheritance that has attributes and functions defined by the class constructor.
    `create() method` : In this inheritance, we set the new object's prototype to the object that `Object.create()` returns.
    `Object as Literal` : In this inheritace, we set the inheritor's prototype using Object.setProtorypeOf(inheritor object, inherited object).

## Q: Give a short code demonstration of 1 way to create JS inheritance to __inherit__ a method named "purr".
    ```
        const cat : 
        {
            purr : function()
            {
                console.log("....purr...purr");
            }
        };
        const Max = Object.create(cat);
        Max.purr;
    ```

## Q: Give a short code demonstration of a different way to create JS inheritance to __inherit__ a method named "hiss".
    `
        const cat = function(name)
            {
                this.name = name;
            };
        cat.prototype.hiss = function()
            {
                console.log("hisssing");
            }
        );
        const oscar = new cat("oscar");
        oscar.hiss();
    `

## Q: Explain what a callback is, and give an example.
    A callback is a function passed into another function as an argument to be executed later.
    `
        const example = {
            sayCheese : function(student)
            {
                console.log("It's Time to Say Cheese , example.student.name);
            },
            student : {
                name : 'Akanksha';
            },
            picture : function(person, example.sayCheese)
            {
                example.sayCheese(person);
            }
        };
    `
    Calling the Function picture will trigger sayCheese as well

## Q: What are the words that would correctly fill in the space in this sentence:

"If a function using `this` is `_______`, then `this` will not have the intended implicit value"
    -   As a callback

## Q: In CSS, what does it mean "You shouldn't name your classes after what they look like"?   Why?  Give an example of a class that is well named and a class that is poorly named.

    This means we should name the class based on their functionlity not how they appear on the frontend. This way fo naming the class makes things easier in the terms of applying changes.

    `readmeCssFile {color:black};` - In this case if we have to change the section in which we have to modify the color of the text, it would be very difficult to figure it out. - Poorly Named

    `readme-header p { color: red };` - In this case we know where to look to modify the color of the header of paragraph in this file. - Well Named

