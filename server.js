import express from 'express';

const port = 3000;

const app = express();
app.use (express.json());

const users = [
    {
        id: 1,
        nome: "alice",
        email: "alice@gmail.com",
        sexo: "123456789"
        
    },
    {
        id: 2,
        nome: "lama negra",
        email: "carlos@gmail.com",
        sexo: "1792851589",
        telefone: "1999263458"
    }
];

app.post('/users', (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const sexo = req.body.sexo;
    const telefone = req.body.telefone;
    // const {nome, email, sexo, telefone} = req.body; 

    const newUser = {
        id: users.length + 1, 
        nome: nome,
        email: email,
        sexo: sexo,
        telefone: telefone
    }  
    users.push(newUser);
    res.status(201).json({
        message: "Usuário cadastrado"
    })
})




//rotas

app.get('/users', (req, res) =>  {
   res.status(200).json({
    message: "Usuários retornados com sucesso",
    data: users
   })
})
app.delete("/users/:id", (req, res) => {
    const id = req.params.id;
    const userIndex = users.findIndex((u) => { return u.id == id });

    if (userIndex == -1) {
        return res.status(404).json({
           message: "Usuário não encontrado"
        })
    }
    users.splice(userIndex, 1);
    return res.status(200).json({
       message: "Usuário deletado com sucesso" 
    
    });
   })
    app.put("/users/:id", (req, res) => {
     const id = req.params.id;
     const user = users.find((u) => {
        return u.id == id
     });
       if(!user){
        return res.status(404).json ({
            error: "Usuário não encontrado"
        })
       }
       const {nome, email, sexo, telefone} = req.body;
       user.nome = nome;
       user.email = email;
       user.sexo = sexo;
       user.telefone = telefone;
    
    return res.status(200).json({
        message: "Usuário atualizado com sucesso"
    })
    
    
    })
   
     











































app.listen(port, () =>  {
    console.log(`servidor rotando em localhost:${port}`)
});


 