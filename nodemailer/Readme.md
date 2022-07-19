# SENDING EMAILS WITH NODEMAILER

### SCREENSHOT OF THE DELIVERED EMAIL
![The email sent](email-sent.png)

### BRIEF EXPLANATION OF STEPS INVOLVED IN SENDING EMAILS USING NODEMAILER
* Create a SMTP transporter: This is a transport used to deliver messages and also acts as a protocol between email hosts. 
* Set email options: includes the setting the sender, receiver, email details (subject, text, etc)
* use sendMail method if the transporter created earlier to deliver the message.
