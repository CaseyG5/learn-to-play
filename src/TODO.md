## App => @Dele

## [Page] Home => @Jasmine

> > static content

- Header => @Jasmine
  - NavBar => @Jasmime / make all Links work/
  - Profile / prop: user{email: String, username: String} => @David

## [Page] Dashboard => @Lady

- Complaints / state: complaints[{row_id:Number, content:String, status:Bool}] = useState([]) / =>@Lady
  - ComplaintItem / prop: complaint{row_id:Number, content:String, status:Bool} / => @Lady
- ComplaintForm / state||refs email:String, username: String / <form onSubmit={handleComplaint}></form> => @Greg

> update a user info

## [Page] Profile => @Debp

- UserForm / state: email: String, username: String/ => @Jasmine
- UserFavsUserComplaintFavs => @Debp
- / state: userComplaint[{row_id:Number, content:String, status:Bool}] (user.id [hasMany] complaints ) / ==> @Casey
  - UseComplaintItems / prop: complaint{row_id:Number, content:String, status:Bool} / => @Casey

## [Page] Contact / ref => state: contactEmail:String, content:String (findApi to send on handler) => handleContactSubmit( sendEmail(data={contactEmail, content})) / => @Debp

## [Page] Login /state||refs email:String, pwd: String / => @David

## [Page] Registration / state: message/ => @Casey

- RegistrationForm / state||ref -> username, email / ==> @David
- RegistrationMessage /prop -> message:String (message && <RegistrationMessage />) ==> @David
