let button = document.querySelector("button");
let para = document.querySelector("p");

button.addEventListener("click", async () => {
    let fact = await getfact();
    para.innerText = fact;
})

// async function getfact(){
//     try{
//         let res = await fetch("https://catfact.ninja/fact")
//         let data = await res.json();
//         return data.fact;
//     }catch{
//         return "Something went wrong, Try again";
//     }
// }

async function getfact(){
    try {
        let res = await axios.get("https://catfact.ninja/fact");
        return res.data.fact;
    } catch {
        return "Something went wrong, Try again";
    }
}