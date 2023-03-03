//lets talk about promises

//a promise has three possible states
    //pending
    //resolved
    //rejected

    const someCondition = false
const executorFunction = (resolve, reject) => {
    if (someCondition) {
        resolve('I resolved!');
    } else {
        reject('I rejected!'); 
    }
  }
  //we construct this promise with the Promise() method
  //function is passed through to the constructor of promise
  //that function has two parameters, resolve and reject
  //if the condition results in true, we invoke resolve()
  //otherwise, reject()
  const myFirstPromise = new Promise(executorFunction);

  console.log(myFirstPromise);

  