import express from 'express';
const port = 3000;
const app = express();
app.use(express.json());


const users = [
{
    id: 1,
    nome: "ewerton",
    email: "ewertonatjs@gmail.com",
    sexo: "Masculino",
    senha: "864735966",
    telefone: "19997568437"
    },
   {  
     id: 2,
     nome: "beatriz",
     email: "bia19@gmail.com",
     sexo: "Feminino",
     senha: "151546654",
     telefone: "19997568427"
}];

app.post('/users', (req, res) => {
           const {nome, email, sexo, senha, telefone} = req.body;
           
           const newUser = {
            id: users.length + 1,
            nome,
            email,
            sexo,
            senha,
            telefone,
           }
           users.push(newUser);
           res.status(201).json({
            message: "Usuário cadastrado com sucesso",
            data: users
           });
        });

        app.get('/users', (req, res) => {
    res.status(200).json({
      message: "Usuários retornados com sucesso",
      data: users
    })
})

app.delete('/users/:id', (req, res)=>{
  const {id} = req.params; 

  const userIndex = users.findIndex(user => user.id === Number(id));
  
  if(userIndex === -1){
    return res.status(404).json ({
    message: "Usuário não encontrado"
    });

  }
  users.splice(userIndex, 1);
  return res.status(200).json({
  message: "Usuário deletado com sucesso",
  data: users

  });
});
app.listen(port, () => {
  console.log(`Servidor rodando em local host: ${port}`);
});  