"use client"
import React, { useEffect, useState } from 'react'
import ContData from './ContData'
import PhoneData from './PhoneData'
import EmailData from './EmailData'
import CoalitionData from './CoalitionData'
import NoteBox from './NoteBox'
import AddPhone from './AddPhone'
import AddEmail from './AddEmail'
import AddNote from './AddNote'
import ModContact from './ModContact'
import CoalitionSelect from './CoalitionSelect'
import DeleteContact from './DeleteContact'

export default function ClientState({id, contactData, coalitionData, phoneData, emailData, noteData, juncData}) {
    const [load, setLoad] = useState(false)

useEffect(() => {

}, [load]) 

  return (
    <div>
            <ContData
                key={contactData.id + "cd"}
                id={contactData.id}
                fname={contactData.first_name}
                lname={contactData.last_name}
                org={contactData.org}
                lcont={contactData.last_contact}
                ncont={contactData.next_contact}
                ltype={contactData.last_con_type}
                ntype={contactData.next_con_type}
                /><br />

            <p>Phone Numbers:</p>
            <div className="max-w-3xl bg-slate-900 border-solid border-2 border-slate-400 rounded-md">
            {phoneData.map((data: any) => (  
            <PhoneData
                key={data.phone}
                id={id}
                phone={data.phone} 
                />))}</div><br />

            <p>Email Addresses:</p>
            <div className="max-w-3xl bg-slate-900 border-solid border-2 border-slate-400 rounded-md">
            {emailData.map((data: any) => (      
            <EmailData
                key={data.email}
                id={id}
                email={data.email} 
                />))}</div><br />

            <p>Coalitions:</p>
            <div className="max-w-3xl bg-slate-900 border-solid border-2 border-slate-400 rounded-md">
            {coalitionData.map((data: any) => (
            <CoalitionData
                key={data.id + "coal"}
                coalition_id={data.id}
                Coalition={data.name}
                contact_id={id}
                junc={juncData}
                />))}</div><br />

            <p>Contact Notes:</p>
            {noteData.map((data: any) => (    
            <NoteBox
                key={data.id + "note"}
                id={data.id}
                enType="contact"
                conID={id}
                entry={data.entry_date}
                note={data.note} 
                />))}<br />

            <AddPhone
                key={id + "phn"} 
                id={id}
                isLoading={load}
                onSub={() => setLoad(!load)}
            /><br />

            <AddEmail
                key={id + "eml"}
                id={id}
                isLoading={load}
                onSub={() => setLoad(!load)}
            /><br />

            <AddNote
                key={id + "nt"}
                id={id}
                isLoading={load}
                onSub={() => setLoad(!load)}
            /><br />

            <ModContact
                key={id + "mc"}
                id={id}
                isLoading={load}
                onSub={() => setLoad(!load)}
            /><br />

            <CoalitionSelect
                key={id + "cs"}
                id={id}
            /><br />

            <DeleteContact
                key={id + "dc"}
                idx={id}
            />
    </div>
  )
}

