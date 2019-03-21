let friendArr = ['Jill', 'Alex', 'Sam','Nick','Matt']

let btn = document.getElementsByTagName('button')[0]
btn.addEventListener('click',function() {

for(let i = 0; i< friendArr.length; i++){
let div = document.createElement('div');
div.className= friendArr[i];

let h3 = document.createElement('h3');
let h3Text = document.createTextNode(friendArr[i]);
h3.style.color='white';
h3.appendChild(h3Text);
div.appendChild(h3);
document.body.appendChild(div);

    for(let j = 99; j >0; j--){
        let n = j.toString()
        let m = (j-1).toString()
        if(j != 1){
            let p = document.createElement('p');
            let pText = document.createTextNode(n + " lines of code in the file, " + n +"  lines of code; " + friendArr[i] + " strikes one out, clears it all out, " + m + "  lines of code in the file")
            p.appendChild(pText);
            div.appendChild(p)
        }else{
            let p = document.createElement('p');
            let pText = document.createTextNode("1 line of code in the file, 1 line of code; " + friendArr[i] + " strikes one out, clears it all out, no more lines of code in the file")
            p.appendChild(pText);
            div.appendChild(p)
        }
    }
}
});