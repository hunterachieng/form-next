import React from "react";
import { ReactDOM } from "react";
import { useFormik } from "formik";
import * as yup from 'yup';
import { TextField,Button, Input } from "@mui/material";

const validateFeedbackForm = yup.object({
    firstName: yup
    .string('Enter your first Name')
    .required('First Name is required'),

    secondName: yup
    .string('Enter your second Name')
    .required('Second Name is required'),
    
    feedback: yup
    .string('Write your feedback description')
    .required('Description is required'),
});

const FeedbackForm = () => {
    const formik = useFormik({
        validationSchema: validateFeedbackForm,
        onSubmit : async (values) =>{
            values.preventDefault();
            const firstName = values.target.firstName.value;
            const secondName = values.target.secondName.value;
            const feedback = values.target.feedback.value;

            const response = await fetch('/api/feedback',{
                body:JSON.stringify({
                    firstName: firstName,
                    secondName: secondName,
                    feedback: feedback
                }),
                headers: {
                    'Content-Type' :'application/json',
                },
                method: 'POST',
            });
            const results = await response.json();
            alert(`We have received your feedback ${results.firstName}`)
        }
    });
    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                fullWidth
                id="firstName"
                name="firstName"
                label="First Name"
                />

            </form>
        </div>
    )
}
