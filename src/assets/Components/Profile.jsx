
import React, { useState, useEffect } from 'react';
import { Button, TextField, Card, CardContent, CardHeader, CardActions } from '@mui/material';
import Navbar from './Navbar';
import { Container } from 'react-bootstrap';

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editedProfile, setEditedProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const response = await new Promise(resolve =>
                setTimeout(() => resolve({
                    name: "alphin ",
                    email: "alphin.doe@example.com",
                    mobile: "8525852287",
                    address: "Kerala"
                }), 1000)
            );
            setProfile(response);
            setEditedProfile(response);
        };

        fetchProfile();
    }, []);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditedProfile(profile);
    };

    const handleSave = async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setProfile(editedProfile);
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProfile(prev => ({ ...prev, [name]: value }));
    };

    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <div className='app-background'>
      
                    {/* <Container > */}

        <Card sx={{ maxWidth: 739, margin: 'auto',width:'765px', backgroundColor: '#e4eff5' }}>
            <CardHeader 
                title="PROFILE DETAILS" 
                sx={{ backgroundColor: '#a26aaa', color: 'white' }}
            />
            <CardContent>
                <Navbar />
                {isEditing ? (
                    <div>
                        <TextField
                            fullWidth
                            margin="normal"
                            name="name"
                            value={editedProfile.name}
                            onChange={handleChange}
                            label="Name"
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            name="email"
                            value={editedProfile.email}
                            onChange={handleChange}
                            label="Email"
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            name="mobile"
                            value={editedProfile.mobile}
                            onChange={handleChange}
                            label="Mobile"
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            name="address"
                            value={editedProfile.address}
                            onChange={handleChange}
                            label="Address"
                        />
                    </div>
                ) : (
                    <div>
                        <p><strong>Name:</strong> {profile.name}</p>
                        <p><strong>Email:</strong> {profile.email}</p>
                        <p><strong>Mobile:</strong> {profile.mobile}</p>
                        <p><strong>Address:</strong> {profile.address}</p>
                    </div>
                )}
            </CardContent>
            <CardActions sx={{ justifyContent: 'flex-end' }}>
                {isEditing ? (
                    <>
                        <Button onClick={handleSave} variant="contained" color="primary">
                            Save
                        </Button>
                        <Button onClick={handleCancel} variant="outlined" color="secondary">
                            Cancel
                        </Button>
                    </>
                ) : (
                    <Button onClick={handleEdit} variant="contained" color="primary">
                        Edit
                    </Button>
                )}
            </CardActions>
        </Card>
        {/* </Container> */}
        </div>
    );
};

export default Profile;