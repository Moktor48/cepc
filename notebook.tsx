/*

ROOT-

app

    API-
    api

    PAGES-
    coalition
        Dynamically create a page with Coalition data to include:
            Name
            Members
                Ability to read/add/subtract
            Notes
                Ability to read/add/subtract
    person
        Dynamically create a page with contact data to include
            |-Name
         DB-| Org
            |-Last and future contact dates and methods
         DB-|-Phone
         DB-|-Email
         DB-| Coalition
         DB-| Notes
                Ability to CRUD all 

    SUPPORT-
    components

    ORM-
    prisma

PERSON page
Dynamic path: /app/person/[id]/page.tsx
I need to generate the page using the dynamic path through the link from the main page (COMPLETE)

/app/page.tsx: Link from chosen name= id => (COMPLETE)

dynamic page which should query the full DB (contact/notes/phone (COMPLETE)/email/junction/coalition)

This is where I save static params to pass to phone/email/notes <this is what I need the static for>

Those params will be used to pass the cont_id_xxxx to allow entry of notes, emails, and phone numbers as well as editing the contact.

DATA ENTRY
    ADD: A success/failure notification that the data was sent
    ADD: Refresh page on submit

    Steps:  OnClick,
            When filled out wrong, red outline, message Missing Info
            When filled out correctly, form submits and gives Success message while clearing the form

DATA MANIPULATION
    Deleting contacts:
    1) On Contact Page (delete button with confirmation prompt)

    Modifying contacts:
    1) Patch request on contact page. (Change button? Checkboxes?)

WTF is happening with my GET request for findMany on cont_note?





Step 1: Get the static parameters on the PERSON page
Step 2: Pass those params to the 3 queries
Step 3: ??
Step 4: Profit!


API MESS

Contact POST general, GET all
    [id] get one, put, patch, delete
        phone post specific, GET all for [id]
            [phone] get one, put, patch, delete
        email post specific, get all for [id]
            [email] get one, put, patch, delete
        note post specific, get all for [id]
            [contnoteid] get one, put, patch, delete
Coalition post general,get all
    [name] get one, put, patch, delete
        note post specific, get all for [name]
            [coalnoteid] get one, put, patch, delete
Combined post specific, get all
    [id] get one, put, patch, delete


































*/