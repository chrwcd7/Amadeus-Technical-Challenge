Technical challenge (Java, JavaScript, C, C++ - whatever you like)
————————————————————————————————————————————————————————————————————

Objective: Write a short program that resolves variable values in an input Map. 

Problem description:
An input of the program will consist of a Map<String, String> where keys are simple strings and where values are strings that can contain variables referencing other keys in the Map through the ${KEY} pattern - e.g. 

“key1”: “foo${key2}bar”

When encountered, such variable should be resolved by substituting ${KEY} with a value from the input map under the key "variableName". 

Taking an example input of the following map: 

“key1”: “value1” 
“key2”: “${key1}value2”

the expected output would be: 

“key1“: “value1“ 
“key2“: “value1value2“

Expected deliverables: 
- a project with the program and a corresponding unit tests 
- a list of 3-rd party libraries used (if any) with a very short justification for using them (note: those libraries should be helpers only and should not solve the whole problem)
- a short list of things that were not clear from the above description (if any) and how you decided to deal with the unspecified things 

Further constraints: 
- the provided program must clearly report any errors in the input by throwing an exception with a descriptive message - in other words: invalid input Maps must be clearly identified by the program and error messages should provide hints on to on how to fix the issue.
- you can use any 3rd party library provided that: 
        - it is an open source library (preferably well known)
        - dependency is clearly declared  
        - you can provide justification to use a particular library 
        - the library doesn't cover the core resolution algorithm, which is the main objective of the technical challenge

In case of questions / doubts: 
- take assumptions and clearly document questions and assumptions taken 


