
import React from 'react'


export default function ContactEntry() {
    const [formData, setFormData] = React.useState(
        {FirstName: "", LastName: "", Organization: "", Phone: "", Email: "", LastContact: "", LastContactType: "", NextContact: "", NextContactType: ""}
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
                    type="text"
                    placeholder='First Name'
                    onChange={handleChange}
                    name='FirstName'
                    value={formData.FirstName}
                /><br />
                <input 
                    type="text"
                    placeholder='Last Name Name'
                    onChange={handleChange}
                    name='LastName'
                    value={formData.LastName}
                /><br />
                <input 
                    type="text"
                    placeholder='Organization'
                    onChange={handleChange}
                    name='Organization'
                    value={formData.Organization}
                /><br />
               <input 
                    type="text"
                    placeholder='Phone Number'
                    onChange={handleChange}
                    name='Phone'
                    value={formData.Phone}
                /><br />
                <input 
                    type="email"
                    placeholder='Email Address'
                    onChange={handleChange}
                    name='Email'
                    value={formData.Email}
                /><br />
                <input 
                    type="date" 
                    id="lastConDate" 
                    name="LastContact" 
                    onChange={handleChange}
                    value={formData.LastContact}
                /><br />
                <label htmlFor="lastConTypePer">In-Person</label>
                <input 
                    type="radio" 
                    id="lastConTypePer" 
                    name="LastContactType" 
                    value="In-Person" 
                    onChange={handleChange}
                    checked={formData.LastContactType === "In-Person"}
                /><br />
                <label htmlFor="lastConTypeEm">E-Mail</label>
                <input 
                    type="radio" 
                    id="lastConTypeEm" 
                    name="LastContactType" 
                    value="E-Mail" 
                    onChange={handleChange}
                    checked={formData.LastContactType === "E-Mail"}
                /><br />
                <label htmlFor="lastConTypePh">Phone</label>
                <input 
                    type="radio" 
                    id="lastConTypePh" 
                    name="LastContactType" 
                    value="Phone" 
                    onChange={handleChange}
                    checked={formData.LastContactType === "Phone"}
                /><br />
                <label htmlFor="lastConTypeVM">Virtual Meeting</label>
                <input 
                    type="radio" 
                    id="lastConTypeVM" 
                    name="LastContactType" 
                    value="Virtual Meeting" 
                    onChange={handleChange}
                    checked={formData.LastContactType === "Virtual Meeting"}
                /><br />
                <input 
                    type="date" 
                    id="nextConDate" 
                    name="NextContact" 
                    onChange={handleChange}
                    value={formData.NextContact}
                /><br />
                <label htmlFor="nextConTypePer">In-Person</label>
                <input 
                    type="radio" 
                    id="nextConTypePer" 
                    name="NextContactType" 
                    value="In-Person" 
                    onChange={handleChange}
                    checked={formData.NextContactType === "In-Person"}
                /><br />
                <label htmlFor="nextConTypeEm">E-Mail</label>
                <input 
                    type="radio" 
                    id="nextConTypeEm" 
                    name="NextContactType" 
                    value="E-Mail" 
                    onChange={handleChange}
                    checked={formData.NextContactType === "E-Mail"}
                /><br />
                <label htmlFor="nextConTypePh">Phone</label>
                <input 
                    type="radio" 
                    id="nextConTypePh" 
                    name="NextContactType" 
                    value="Phone" 
                    onChange={handleChange}
                    checked={formData.NextContactType === "Phone"}
                /><br />
                <label htmlFor="nextConTypeVM">Virtual Meeting</label>
                <input 
                    type="radio" 
                    id="nextConTypeVM" 
                    name="NextContactType" 
                    value="Virtual Meeting" 
                    onChange={handleChange}
                    checked={formData.NextContactType === "Virtual Meeting"}
                /><br />
                <button>Submit</button>
            </form>
        )
        }

