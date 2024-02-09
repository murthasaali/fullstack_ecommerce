const token = localStorage.getItem('token');
   

    // Set token in headers
  export  const config = {
      headers: {
        authorization:token,
      },
    };
