let mobiles = [
    {
        brand: "samsung",
        model: "a30",
        ram: "4gb",
        rom: "48gb",
        price: 2000
    },
    {
        brand: "samsung",
        model: "note10",
        ram: "6gb",
        rom: "128gb",
        price: 4000
    },
    {
        brand: "oppo",
        model: "a10",
        ram: "8gb",
        rom: "256gb",
        price: 15000
    },
    {
        brand: "oppo",
        model: "a20",
        ram: "4gb",
        rom: "64gb",
        price: 4000
    },
    {
        brand: "xiaomi",
        model: "z10",
        ram: "3gb",
        rom: "32gb",
        price: 3000
    },
    {
        brand: "xiaomi",
        model: "x10",
        ram: "6gb",
        rom: "148gb",
        price: 10000
    },
    {
        brand: "motorolla",
        model: "g9plus",
        ram: "4gb",
        rom: "128gb",
        price: 7000
    },
    {
        brand: "motorolla",
        model: "oneplus",
        ram: "3gb",
        rom: "64gb",
        price: 6000
    },
    {
        brand: "realme",
        model: "r10",
        ram: "2gb",
        rom: "16gb",
        price: 1500
    },
    {
        brand: "realme",
        model: "s10",
        ram: "6gb",
        rom: "256",
        price: 20000
    },
]

let query = document.getElementById("query")
let inp = document.getElementById("inp")
let btn = document.getElementById("btn")
let main = document.getElementById("main")




let mobdata = Object.keys(mobiles[0])

// console.log(mobdata)

let mob = mobdata.forEach((a)=>{
    query.innerHTML += `<option>${a}</option>`
})


btn.addEventListener("click",()=>{
    main.innerHTML = " "

    let filter = mobiles.filter((a)=>{
        if(a[query.value]===inp.value){
            return a
        }
    })
    if(filter.length == 0){
        main.innerHTML = "data not found"
    }
    inp.value = " "

    let filterloop = filter.map((a)=>{
        main.innerHTML += `<p>
        brand = ${a.brand}<br>
        model = ${a.model}<br>
        ram = ${a.ram}<br>
        rom = ${a.rom}<br>
        price = ${a.price}
        </p>`
    })
})














