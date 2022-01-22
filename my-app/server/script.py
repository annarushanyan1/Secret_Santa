import smtplib
from email.message import EmailMessage
import sys
import json

obj = sys.argv[1]

y = json.loads(obj)

my_address = ""  # sender address
        
app_generated_password = ""  # gmail generated password

with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
    smtp.login(my_address, app_generated_password)  # login gmail account

    def send(email, content):
        msg = EmailMessage()

        msg["Subject"] = "Secret Santa"  # email subject

        msg["From"] = my_address  # sender address

        msg["To"] = email
        msg.set_content(f'You are <<{content}>>\'s Secret Santa😍')
        
        smtp.send_message(msg)  # send message
        
        print("mails has sent")
        
        del msg



    for key in y:
        #key is email
        print(key)
        print("heyyy")
        send(key,y[key])
        # smtp.ehlo()
        # smtp.starttls()
        
        

        


def send(email, content):
    msg = EmailMessage()
    
    msg["Subject"] = "Secret Santa"  # email subject

    msg["From"] = my_address  # sender address

    msg["To"] = email
    
    msg.set_content(f'You are <<{content}>>\'s Secret Santa😍')
    
    smtp.send_message(msg)  # send message
    
    print("mails has sent")
    del msg



for key in y:
    send(key,y[key])
    print("sending")

        
        

        


