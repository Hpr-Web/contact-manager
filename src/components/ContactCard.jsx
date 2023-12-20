import React from "react";
import List from "@mui/material/List";
import DeleteIcon from "@mui/icons-material/Delete";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import {
    Avatar,
    Box,
    Divider,
    IconButton,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
} from "@mui/material";

function SingleCard({ name, email, onDeleteButtonClick, unique }) {
    return (
        <>
            <ListItem
                disablePadding
                sx={{ bgcolor: "" }}
                secondaryAction={
                    <IconButton
                        edge="end"
                        onClick={() => onDeleteButtonClick(unique)}
                    >
                        <DeleteIcon color="primary" />
                    </IconButton>
                }
            >
                <ListItemButton>
                    <ListItemAvatar>
                        <Avatar>
                            <AccountCircleIcon fontSize="large" />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={name}
                        secondary={email}
                    />
                </ListItemButton>
            </ListItem>
            <Divider />
        </>
    );
}

function ContactCard({ data, onDeleteButtonClick }) {
    const contact = data.map(({ name, email, unique }) => {
        return (
            <SingleCard
                onDeleteButtonClick={onDeleteButtonClick}
                unique={unique}
                key={unique}
                name={name}
                email={email}
            />
        );
    });
    return (
        <div className="contactlist">
            <h2>Contact List</h2>
            <Divider />
            <div className="contact">
                <Box>
                    <List disablePadding>
                        <div>{contact}</div>
                    </List>
                </Box>
            </div>
        </div>
    );
}

export default ContactCard;
