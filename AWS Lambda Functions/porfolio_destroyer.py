# -*- coding: utf-8 -*-
"""
Created on Mon May 16 20:19:23 2022

@author: Rishi
"""

# This Function deletes html file according to payload passed in request body

import json
import boto3

s3=boto3.client('s3')
bucket = 'portfolio-generator-user-data'

def lambda_handler(event, context):
    
    
    data = json.loads(event['body'])
    
    hash = data['hash']
    
    try:
        
        path="user-data/"
        fileName = hash+".html"
        
        s3.delete_object(Bucket=bucket, Key=path+fileName)
        
    except:
        
         return {
        'statusCode': 500,
        'body': json.dumps("failed to delete_object")
         }

    
    return {
        'statusCode': 200,
        'body': json.dumps("Deleted Object Sucessfully")
            }
