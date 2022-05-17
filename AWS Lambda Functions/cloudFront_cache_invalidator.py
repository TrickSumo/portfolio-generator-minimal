# -*- coding: utf-8 -*-
"""
Created on Mon May 16 20:16:17 2022

@author: Rishi
"""

# This Lambda funtion takes deleted/updated/uploaded file as key and creates cloudfront cache invalidation for same

import json
import boto3
import urllib.parse
import time


   

cf=boto3.client('cloudfront')
dist_id = 'EG62S80TD9PDW'

def lambda_handler(event, context):
    
    
    
    #bucket = event['Records'][0]['s3']['bucket']['name']
    
    
    key = urllib.parse.unquote_plus(event['Records'][0]['s3']['object']['key'], encoding='utf-8')
    path = "/"+key.split('/')[1]
    print(path)
    response=""
    
    
    def invalidate():
        
        
        try:
            
            
            response = cf.create_invalidation(
            DistributionId= 'EG62S80TD9PDW'   ,
            InvalidationBatch={
                'Paths': {
                    'Quantity': 1,
                    'Items': [
                        path
                    ]
                },
                'CallerReference': str(time.time()).replace(".", "")
                 }
              )
        
            #invalidation_id = response['Invalidation']['Id']
            print("Done")
      

        except:
            print("error")
            
    

    
    
    invalidate()
   
   

        
    
    
    

    
