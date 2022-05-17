# portfolio-generator-minimal
Generate static HTML portfolio using REACT, S3, Lambda and Gravatar API.


# LOCAL SETUP



1. Create 3 AWS Lambda Functions wit following Permissios (Content of functions is in AWS Lambda folder):- 

* cloudFront_cache_invalidator --> CreateInvalidation For CloudFront
* porfolio_destroyer ----> S3 Full Write Access
* portfolio_creator  ----> S3 Full Write Access

2. Update lamda function URL settings for all 3:-
```
Function URL Config=>

* Auth Tyep: NONE
* Confiure CORS: Enable
* Allow origin: *
* Expose Headers: access-control-allow-origin
* Allow headers: content-type
* Allowed Methods: GET, POST
```
3. Update function URLs in .env file

4. Create S3 bucket and use OAI + Cloudfront to make it publicaly available. Also update bucket name and cloudfront distribution id in lambda functions

5. Install REACT dependecies and run

``` 
npm i
npm start 
```


