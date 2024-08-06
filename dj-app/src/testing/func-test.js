const duration = 491.9733
const key = 

function convertTime(t) {
    const sec = Math.round(t % 60)
    const min = Math.floor(t / 60)
    return `${min}:${sec}`
  }

// console.log(convertTime(duration))

function convertKeyNotation(i) {
    const pitch_class = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
    if(i == -1){
        return 'N/A'
    }else{
        return pitch_class[i]
    }
}

console.log(convertKeyNotation(0))
