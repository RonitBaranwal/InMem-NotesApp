1> First clone this repository using :
    git clone https://github.com/RonitBaranwal/InMem-NotesApp.git

2>Enter the local setup for the project :
    cd InMem-NotesApp

3>install all the dependencies using npm install

4>Run the project using npm run start or node server 

5>POST /notes  
Body: { "title": "My Note", "content": "This is a test." }
Returns: 201 Created

6>GET /notes  
Returns: 200 OK

7>GET /notes/:id  
Returns: 200 OK or 404 Not Found

8>PUT /notes/:id  
Body: { "title": "Updated Title", "content": "New content" }
Returns: 200 OK or 404 Not Found

9>DELETE /notes/:id  
Returns: 200 OK or 404 Not Found

This was all about how to run the app and check the project locally .
I have used map for further handling of data using key and value.
Key is the time at which the note is created and hence always unique.
