//TODO Prerequire Redux

//? 1- Pure Function?
//? 2- Reduce Function?
//? 3- HOF ?
//? 4- Mutate : تغییر دادن/ Immutate ? Mutable : قابل تغییر  / Immutable




//* Pure function
//? به ازای ورودی خاص یک خروجی می دهد.
//! random function is Im Pure function
//! Console.log is side effect : توابعی که ساید افکت دارند پیور نیستند.
//? در توابع پیور برای محاسبه خروجی فقط از ورودی ها و فقط متغیرهای لوکال استفاده میشود
//! اگر از متغیری خارج از اسکوپ استفاده کند دیگه تابع پیور نخواهد بود


//* Reduce is Pure function
//? Reduce function input : array ==> output : one value  ==> Reduce ((acc,num)=>{},initialvalue)

//* HOF : High Order function
//? const HOF =(CB)=>{return ClosureF}    ==> HOF is functions that give function as arguman(CB) OR return function

//? Sample : Hof =()=>{return f}  === > Access to f ==> Hof()()


//* Mutate / Immutate

//? Primitive type :  IMMutable
//? Refrence Type : Mutable  (مقادیر داخل آبجکت رو میشه تغغیر داد بدون تغییر ماهیت)
//! Map function : این تابع ، مقدار اولیه آرایه را تغییر نمی دهد و آرایه جدید می سازد : Immutate  <== Map , Reduce , Some , Foreach ...
//! Reverse Function : مقادیر آرایه اصلی را تغییر می دهد و برعکس میکند  : Mutate





//TODO  Redux : Store - Reducer - Action


//* Store : Sample
//? Counter Store   => let counterStore = 0

//? TodoList Store => let todoListStore = [{id:1,title:'Learn Js'},{id:1,title:'Learn Js'}]

//? Shop Store => let shopStore = { products :[] ,
//?                                 users : [] ,
//?                                 article : [] ,
//?                               }


//* Action : action is object describing "What happend", and returns a new state value
//* Action Sample

//? Counter Action => let incrementAction = {type:"increment"}   / let decrementAction = {type: "decrement"}

//? TodoList Action =>  let createTodoAction = {type:'ADD_TODO'}   :  type standard is Uppercase
//?                     let removeTodoAction = {type:'REMOVE_TODO'}
//?                     let getTodoAction = {type: 'GET_TODOS'}



//* Reducer   =>  Action   ---> Reducer ---> Store
//? let counterReducer =(action) =>{
//?                                 switch(action.type){
//?                                        case 'increment':{
//?                                                          return newStore
//?                                                         }
//?                                         default {
//?                                                             return store
//?                                                         }
//?                                                    }
//?
//?                                 }


//? Shop Reducers  ==> Multiple Reducers : productReducer , userReducer , ticketReducer ....


//TODOS Install reduc : pure js : test => console.log(Redux);

//* Reducer : A reducer's function signature is : (state , action) => newState   / use Conditional login in reducer 