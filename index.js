const num1 = document.getElementById("n1")
const num2 = document.getElementById("n2")
const num3 = document.getElementById("n3")
const num4 = document.getElementById("n4")
const num5 = document.getElementById("n5")
const num6 = document.getElementById("n6")
const num7 = document.getElementById("n7")
const num8 = document.getElementById("n8")
const num9 = document.getElementById("n9")
const num0 = document.getElementById("n0")
const mul = document.getElementById("mul")
const div = document.getElementById("div")
const res = document.getElementById("res")
const sum = document.getElementById("sum")
const rai = document.getElementById("rai")
const pot = document.getElementById("pot")
const igu = document.getElementById("igu")


let flag = "", num_1, num_2, total;

const resultado = document.getElementById("resultado")

num1.addEventListener("click",function () {
    if (resultado.innerText === "--") {
        resultado.innerText = ""
    }
    resultado.innerText += num1.textContent
})
num2.addEventListener("click",function () {
    if (resultado.innerText === "--") {
        resultado.innerText = ""
    }
    resultado.innerText += num2.textContent
})

num3.addEventListener("click",function () {
    if (resultado.innerText === "--") {
        resultado.innerText = ""
    }
    resultado.innerText += num3.textContent
})

num4.addEventListener("click",function () {
    if (resultado.innerText === "--") {
        resultado.innerText = ""
    }
    resultado.innerText += num4.textContent
})

num5.addEventListener("click",function () {
    if (resultado.innerText === "--") {
        resultado.innerText = ""
    }
    resultado.innerText += num5.textContent
})

num6.addEventListener("click",function () {
    if (resultado.innerText === "--") {
        resultado.innerText = ""
    }
    resultado.innerText += num6.textContent
})

num7.addEventListener("click",function () {
    if (resultado.innerText === "--") {
        resultado.innerText = ""
    }
    resultado.innerText += num7.textContent
})

num8.addEventListener("click",function () {
    if (resultado.innerText === "--") {
        resultado.innerText = ""
    }
    resultado.innerText += num8.textContent
})

num9.addEventListener("click",function () {
    if (resultado.innerText === "--") {
        resultado.innerText = ""
    }
    resultado.innerText += num9.textContent
})

num0.addEventListener("click",function () {
    if (resultado.innerText === "--") {
        resultado.innerText = ""
    }
    resultado.innerText += num0.textContent
})

// FALTA RESIKVER COMO ATRAPAR EL SEGUNDO NUMERO PARA PODER
// ATRAPAR EL RESULTADO TOTAL
mul.addEventListener("click",function () {
    num_1 = Number(resultado.innerText)
    flag = "*"
    resultado.innerText = "--"
    

})

div.addEventListener("click",function () {
    num_1 = Number(resultado.innerText)
    flag = "/"
    resultado.innerText = "--"
    

})
sum.addEventListener("click",function () {
    num_1 = Number(resultado.innerText)
    flag = "+"
    resultado.innerText = "--"
    

})
res.addEventListener("click",function () {
    num_1 = Number(resultado.innerText)
    flag = "-"
    resultado.innerText = "--"
    

})
pot.addEventListener("click",function () {
    num_1 = Number(resultado.innerText)
    flag = "pot"
    resultado.innerText = "--"
    

})
rai.addEventListener("click",function () {
    num_1 = Number(resultado.innerText)
    flag = "rai"
    resultado.innerText = "--"

    // setInterval(function () {
    //     igu.click()
    // })
    igu.click()
})


// FALTA CONTINUAR CON LA LOGICA


igu.addEventListener("click",function () {
    num_2 = Number(resultado.innerText)

    switch (flag) {
        case "*":
            resultado.innerText = num_1 * num_2
            break;
        case "/":
            resultado.innerText = num_1 / num_2
            break;
        case "+":
            resultado.innerText = num_1 + num_2
            break;
        case "-":
            resultado.innerText = num_1 - num_2
            break;
        case "pot":
            resultado.innerText = Math.pow(num_1,num_2)
            break;
        case "rai":
            resultado.innerText = Math.sqrt(num_1)
            break;   

        default:
            resultado.innerText = "ERROR"
            break;

        num_1 = ""
        num_2 = ""
    }
    setTimeout(function () {
        resultado.innerText = "--"
    },10000)
})







