// // src/components/Contact.js

import React from "react";

const Contact = () => {
  return (
    <section id='Contact' className='contact--section'>
      <div>
        <p className='section--title'>Lets stay in touch</p>
        <h2 className='skills--section--heading'>Contact Me</h2>
      </div>
      <form
        className='contact--form--container'
        action='https://formspree.io/f/mrgnqdqb'
        method='POST'
      >
        <div className='container'>
          <label htmlFor='first-name' className='contact--label'>
            <span className='text-md'>First Name</span>
            <input
              type='text'
              className='contact--input text-md'
              name='first-name'
              id='first-name'
              required
            />
          </label>
          <label htmlFor='last-name' className='contact--label'>
            <span className='text-md'>Last Name</span>
            <input
              type='text'
              className='contact--input text-md'
              name='last-name'
              id='last-name'
              required
            />
          </label>
          <label htmlFor='email' className='contact--label'>
            <span className='text-md'>Email</span>
            <input
              type='email'
              className='contact--input text-md'
              name='email'
              id='email'
              required
            />
          </label>
          <label htmlFor='phone-number' className='contact--label'>
            <span className='text-md'>Phone-number</span>
            <input
              type='number'
              className='contact--input text-md'
              name='phone-number'
              id='phone-number'
              required
            />
          </label>
        </div>
        <label htmlFor='message' className='contact--label'>
          <span className='text-md'>Message</span>
          <textarea
            className='contact--input text-md'
            id='message'
            name='message'
            rows='8'
            placeholder='Type your message...'
            required
          />
        </label>
        <label htmlFor='checkbox' className='checkbox--label'>
          <input type='checkbox' required name='checkbox' id='checkbox' />
          <span className='text-sm'>I accept the terms and conditions</span>
        </label>
        <input type='hidden' name='_subject' value='New submission!' />
        <input type='hidden' name='_next' value='/' />
        <div>
          <button type='submit' className='btn btn-primary contact--form--btn'>
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;

{
  /* <label htmlFor='choode-topic' className='contact--label'>
          <span className='text-md'>Choose a topic</span>
          <select id='choose-topic' className='contact--input text-md'>
            <option>Select One...</option>
            <option>Work opportunity</option>
            <option>Item 2</option>
            <option>Item 3</option>
          </select>
        </label> */
}

// import React from "react";
// import { Box, Typography, TextField, Button, Snackbar } from "@mui/material";

// const Contact = () => {
//   const [formData, setFormData] = React.useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [openSnackbar, setOpenSnackbar] = React.useState(false);
//   const [error, setError] = React.useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("https://formspree.io/f/mrgnqdqb", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       if (response.ok) {
//         setOpenSnackbar(true);
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         throw new Error("Failed to submit form");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setError("Failed to submit form");
//     }
//   };

//   const handleCloseSnackbar = () => {
//     setOpenSnackbar(false);
//     setError("");
//   };

//   return (
//     <Box
//       sx={{
//         height: "100vh",
//         width: "40%",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#fff",
//         margin: "0 auto", // Center the box horizontally
//       }}
//     >
//       <Typography variant='h3'>Contact Me</Typography>
//       <form onSubmit={handleSubmit} style={{ marginTop: "20px", width: "100%" }}>
//         <TextField
//           required
//           id='name'
//           label='Name'
//           value={formData.name}
//           onChange={handleChange}
//           fullWidth
//           sx={{ marginBottom: "10px" }}
//         />
//         <TextField
//           required
//           id='email'
//           label='Email'
//           type='email'
//           value={formData.email}
//           onChange={handleChange}
//           fullWidth
//           sx={{ marginBottom: "10px" }}
//         />
//         <TextField
//           id='message'
//           label='Message'
//           multiline
//           rows={4}
//           value={formData.message}
//           onChange={handleChange}
//           fullWidth
//           sx={{ marginBottom: "20px" }}
//         />
//         <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
//           <Button type='submit' variant='contained' sx={{ width: "50%" }}>
//             Send
//           </Button>
//         </Box>
//       </form>
//       <Snackbar
//         open={openSnackbar}
//         autoHideDuration={6000}
//         onClose={handleCloseSnackbar}
//         message='Message sent successfully!'
//       />
//       <Snackbar
//         open={!!error}
//         autoHideDuration={6000}
//         onClose={handleCloseSnackbar}
//         message={error}
//         color='error'
//       />
//     </Box>
//   );
// };

// export default Contact;

// import React from 'react';
// import { Box, Typography, TextField, Button } from '@mui/material';

// const Contact = () => {
//   return (
//     <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
//       <Typography variant="h3">Contact</Typography>
//       <Box component="form" sx={{ mt: 3, '& .MuiTextField-root': { m: 1, width: '25ch' } }} noValidate autoComplete="off">
//         <div>
//           <TextField required id="name" label="Name" />
//           <TextField required id="email" label="Email" type="email" />
//         </div>
//         <TextField
//           id="message"
//           label="Message"
//           multiline
//           rows={4}
//           sx={{ m: 1, width: '52ch' }}
//         />
//         <Button variant="contained" sx={{ mt: 2 }}>Send</Button>
//       </Box>
//     </Box>
//   );
// };

// export default Contact;
