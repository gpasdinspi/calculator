function add(nb1, nb2){
    return nb1 + nb2;
}

function sub(nb1, nb2){
    return nb1 - nb2;
}

function mul(nb1, nb2){
    return nb1 * nb2;
}

function divide(nb1, nb2){
    return nb1 / nb2;
}

function operate(nb1, nb2, op){
    switch (op){
        case add:
            return add(nb1, nb2);
        case sub:
            return sub(nb1, nb2);
        case mul:
            return mul(nb1, nb2);
        case divide:
            return divide(nb1, nb2);
    }

}

console.log(operate(2, 3, mul))
