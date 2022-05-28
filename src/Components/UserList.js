import react, { useState,useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { CardActionArea } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';


const UserList=()=>{
    const [users, setUser]=useState([]);

    useEffect(()=>{
      axios.get('https://reqres.in/api/users?page=2')
      .then(function (response) {
        // handle success
        console.log(response);
        setUser(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    },[])
  console.log(users);
    return (
        <Container maxWidth="lg">
        <h4 style={{textAlign:"center",padding:20}}>LIST OF USERS</h4>
        <p style={{textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div style={{ display: "flex", gap: "25px", flexWrap: "wrap", padding:"5%" }}>

        {users.map(user => (
                
     
                <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={user.avatar}
                    alt={user.first_name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {user.first_name}   {user.last_name} 


                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    <MailIcon style={{fontSize: 20, float:"left", paddingRight: 3}} />{user.email}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            
        ))}
      </div>
      </Container>
    );


}
export default UserList;