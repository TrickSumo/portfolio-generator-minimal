# -*- coding: utf-8 -*-
"""
Created on Mon May 16 20:23:00 2022

@author: Rishi
"""

import json
import boto3

s3 = boto3.client('s3')

bucket = 'portfolio-generator-user-data'


def lambda_handler(event, context):
   

    data=json.loads(event['body'])
        
    name = data['name']
    hash = data['email']
    thumbnailURL = data['thumbnailURL']
    location = data['location']
    edu=data['edu']
    exp=data['exp']
    hob=data['hob']
    
    # Creating HTML File
    
    with open("/tmp/"+hash+".html",'w+') as file:
        file.write('')
               
    with open("/tmp/"+hash+".html",'a+') as file:
        file.write('''<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <!-- <link rel="stylesheet" href="style.css"> -->
        <script src="https://portfolio.tricksumo.com/index.js" defer> </script>
    
        <title>{}</title>
        
         <link rel="icon" type="image/x-icon" href="https://portfolio.tricksumo.com/favicon.png">
    </head>
    
    '''.format(name)
    
    + ''' <body id = "body">
    
        <header>
            <a href="{}.html" id="logo">My Portfolio</a>
            <button id="btn"> Dark Theme</button>
        </header>'''.format(hash)
        
        +
        
        '''    <section>
    
    
    
           <center>
               <figure> 
                   <img src="{}" alt="A4 photo of candidate" height="300" id="photo"> 
                   <figcaption id="figcaption"> <u> {} </u> <br/> <u> {} </u> </figcaption>
                </figure>
            
            </center>
    
        </section>'''.format(thumbnailURL, name,location)
        
        
        +
        
        '''
        <section id="card">
        <section id="card1">
    
       <center>  <b> Education!</b> </center>
       <ul>'''
       )
       
    
        for i in edu:
            file.write("<li>{}</li> <br/>".format(i['text']))
        
        file.write('''
                  </ul>
     
         </section>
    
         <section class="card2">
    
            <center>  <b> Experience!</b> </center>
    
            <ul>''')
            
        for i in exp:
            file.write("<li>{}</li> <br/>".format(i['text']))
            
        file.write('''
                  </ul>
     
         </section>
    
         <section id="card3">
    
            <center>  <b> Hobbies!</b> </center>
    
            <ul>''')
            
        for i in hob:
            file.write("<li>{}</li> <br/>".format(i['text']))
            
        file.write('''
                      </ul>
         
             </section>
             </section>
    
                  <footer id="footer">
    
            All &copy are owned by {}.
    
    
         </footer>
    
    
        
        </body>
        </html>'''.format(name))
        
    
    
    # File Upload   
    try:
        
        localFile = "/tmp/"+hash+".html" 
        path="user-data/"
        fileName = hash+".html"


        
        s3.upload_file(localFile, Bucket=bucket, Key=path+fileName, ExtraArgs={'ContentType':'text/html'})
        
      
        print('Put Complete')
        
    except:
        
        print("Something Went Wrong")
        
        return {'statusCode': 500,
        
        'body':"Something Went Wrong"
            }
       
        
        
    return {
        'statusCode': 200,
        
        'body': "Successfully uploaded to bucket!!!"
        
        
        }


