const createSprite = element => {
    var d = document;
    let __element = d.querySelector(element);
    let frames = 9;
    let i = 1;

    __element.classList.add(`frame${i}`)

    const nextFrame = () => {
        __element.classList
            .remove(`frame${i}`)

        i == frames ? i = 1 : null
        
        __element.classList
            .add(`frame${++i}`)
        
    }

    const returnTentativas = () => i

    const reset = () => {
        var frame = __element.classList[1]
        frame ? __element.classList.remove(frame) : null
        i = 1;
    }
    
    const isFinished = () => i === 9 ? true : false

    return {
        nextFrame,
        reset,
        isFinished,
        returnTentativas
    }
}