const receivesAFunction = (spy) =>{
    return spy()
}
receivesAFunction()
function returnsANamedFunction (){
    return function alex(){}
}
returnsANamedFunction()
function returnsAnAnonymousFunction () {
    return () => {

    }
}
returnsAnAnonymousFunction()