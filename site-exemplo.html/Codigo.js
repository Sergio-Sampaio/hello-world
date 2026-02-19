function tabela(){
    let entrada = document.getElementById("entrada")
    x = Number(entrada.value)
    let tab = document.getElementById('seltab')

    tab.innerHTML = ''
    for (let i = 0; i <= 10; i++){
        let item = document.createElement('option')
        item.text = `${x} x ${i} = ${x*i}`
        tab.appendChild(item)

        /*        let y = i*x
        let res = document.getElementById("res")
        res.innerHTML += (`${x} x ${i} = ${y} </br>`)
        */ // primeira tentativa sozinho, achei massa tbm

    }



}