///////////// fetch con archivo de texto //////////////
const datosTexto = ()=>{
    fetch('prom.txt')
    .then(res =>{
        return res.text()
    })
    .then(res =>{
        console.log(res);
    })
}

datosTexto()

////////////////////////////////7

//////////////// probando fetch con json /////////////
const datosJson = ()=>{
    fetch('it.json')
    .then(res => res.json())
    .then(res => {
        for(i=0; i < res.length; i++){
            var x = 'covid 19'
            var y = 'coronavirus'
            var titulo = res[i].titulo
            if(titulo.includes(x) || titulo.includes(y)){
                console.log(res[i]);
            }
        }
    })
}

//datosJson()

//////////////////////////77

///////////////////////// probando feych con asinc y await ////////////////////7
const datosJsonAsync = async ()=>{
    try {
        const res = await fetch('it.json')
        const post = await res.json()
        
        for(i=0; i < post.length; i++){
            var x = 'covid 19'
            var y = 'coronavirus'
            var titulo = post[i].titulo
            if(titulo.includes(x) || titulo.includes(y)){
                console.log(post[i]);
            }
        }

    } catch (error) {
        console.log(error);
    }
    
}

datosJsonAsync()

//////////////////////////////////////////

////////////// pruebas con api web fetch //////////////
const datosApiWeb = async (idP)=>{
    try {
        
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${idP}`)
        const post = await res.json()
        console.log(post.userId);

        /////////////// datos user
        const resUser= await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        const postUser = await resUser.json()
        console.log(postUser.name);

    } catch (error) {
        console.log(error);
    }
}

datosApiWeb(70)

/////////////////////////////////////////

////////// pruebas con axios en lugar de fetch /////////////////////77
const datosAxios = async (idP)=>{
    try {
        const res = await axios(`https://jsonplaceholder.typicode.com/posts/${idP}`)
        
        /////////////// datos user
        const user = await axios(`https://jsonplaceholder.typicode.com/users/${res.data.userId}`)
        console.log(user.data.name);

    } catch (error) {
        console.log(error);
    }
}

datosAxios(12)

//////////////////////////////////////77