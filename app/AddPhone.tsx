import React from 'react'

export default function AddPhone() {
    const [formData, setFormData] = React.useState(
        {phone: ""}
    ) 
    console.log(formData);
    const handleChange = e => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }    

    const handleSubmit = async e => {
        e.preventDefault();
        try{
          fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({formData}),
          })
    } catch (error){console.error(error)}
    }
        return(
            <form onSubmit={handleSubmit}>
                <input
                    type="select"
                />
                <input 
                    type="text"
                    placeholder='Phone Number'
                    onChange={handleChange}
                    name='phone'
                    value={formData.phone}
                />
                <button>Submit</button>
            </form>
        )
        }

/* Select box: The component should pull the id, first_name, last_name, sort by last_name,  and then make LN + ", " + FN into selectable options.
Once selected, that person will be the FK for the phone/email. 

*/