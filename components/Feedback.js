import React from "react";
import { ReactDOM } from "react";
import { useFormik } from "formik";
import * as yup from 'yup';
import { TextField,Button, Box } from "@mui/material";

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
        initialValues:{
            firstName: "",
            secondName: "",
            feedback: ""

        },
        validationSchema: validateFeedbackForm,
        onSubmit : async (values, {resetForm}) =>{
            console.log({values})
            console.log(JSON.stringify(values));

            const response = await fetch('/api/feedback',{
                body:JSON.stringify(
                    values
                ),
                headers: {
                    'Content-Type' :'application/json',
                },
                method: 'POST',
            });
            console.log({response});

            const results = await response.json();
            alert(results.message)
            resetForm({values:""})
           

        }
    });
    return(
        <div>
            <Box
            sx={{
                width:'50%',
                height:500,
                margin:'0 auto',
                // background:'grey',
                padding: '10px'
            }}
            component={"form"}
             onSubmit={formik.handleSubmit}>
                <h3>What would you like to tell me?</h3>
                <TextField
                fullWidth
                id="firstName"
                name="firstName"
                label="First Name"
                placeholder="Hunter"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
                />
                  <TextField
                sx={{
                    marginTop:2
                }}
                fullWidth
                id="secondName"
                name="secondName"
                label="Second Name"
                placeholder="Achieng"
                value={formik.values.secondName}
                onChange={formik.handleChange}
                error={formik.touched.secondName && Boolean(formik.errors.secondName)}
                helperText={formik.touched.secondName && formik.errors.secondName}
                />
                  <TextField
                sx={{
                    marginTop:2
                }}
                fullWidth
                multiline
                rows={5}
                id="feedback"
                name="feedback"
                label="Feedback"
                placeholder="What do you want to tell us?"
                value={formik.values.feedback}
                onChange={formik.handleChange}
                error={formik.touched.feedback && Boolean(formik.errors.feedback)}
                helperText={formik.touched.feedback && formik.errors.feedback}
                />
                <Button
                sx={{
                    marginTop:2
                }}
                variant="contained" color="primary" type="submit">
                    Submit
                </Button>


            </Box>
        </div>
    )
}
export default FeedbackForm
