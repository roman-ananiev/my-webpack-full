import React from 'react'

function createAnalitics() {
    let counter = 0
    let isDestroyed = false
    const listener =() => counter++

    document.addEventListener('click', listener)

    return {
        destroy() {
            document.removeEventListener('click', listener)
            isDestroyed = true
        },
        getClicks() {
            if(isDestroyed){
                return "analitics is destroyed"
            }
            return counter
        }
    }

}

window.analitic = createAnalitics()