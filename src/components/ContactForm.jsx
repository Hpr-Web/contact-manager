import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

function ContactForm({ onAddContact }) {
    const [inputValue, setInputValue] = useState({ name: "", email: "" });

    function handelInputChange(e) {
        const { id, value } = e.target;
        if (id === "email") {
            setInputValue((pre) => {
                return { ...pre, email: value };
            });
        } else {
            setInputValue((pre) => {
                return { ...pre, name: value };
            });
        }
    }

    function onButtonClick(inputValue) {
        const { name, email } = inputValue
        if (name === "" && email === "") {
            alert("Name and Email Both are empty")
        }
        else if (name === "") {
            alert("Name field is empty")
        } else if (email === "") {
            alert("Email field is empty")
        }
        else {
            onAddContact(inputValue);
        }
        setInputValue({ name: "", email: "" });
    }

    return (
        <div className="contactmain">
            <form className="form">
                {" "}
                <TextField
                    fullWidth
                    id="name"
                    label="Name"
                    variant="outlined"
                    type="text"
                    size="small"
                    value={inputValue.name}
                    onChange={handelInputChange}
                />
                <TextField
                    fullWidth
                    id="email"
                    label="Email"
                    variant="outlined"
                    type="email"
                    size="small"
                    color=""
                    value={inputValue.email}
                    onChange={handelInputChange}
                />
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={() => onButtonClick(inputValue)}
                >
                    Add
                </Button>
            </form>
        </div>
    );
}

export default ContactForm;