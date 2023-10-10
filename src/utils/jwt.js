import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
    

    const token = jwt.sign({user}, "crack", {expiresIn: '20h'})

    console.log("token: ", token);
    return token;
}


generateToken({"_id":"6522e34b2f0f6d6792a2f19c","first_name":"rogelio","last_name":"","age": "18","email":"andresrogesu@gmail.com","password":"$2b$15$Qq984AMwXYAEyWjrAaAzLe5fBTPPmUGk2QLur0Z9HR66JZt1Xd7AK","rol":"user"}
);



