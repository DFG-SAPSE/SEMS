

# Welcome to Cloud Functions for Firebase for Python!
# To get started, simply uncomment the below code or create your own.
# Deploy with `firebase deploy`

from firebase_functions import https_fn,firestore_fn,options
# import * as functions from 'firebase-functions'
from firebase_admin import initialize_app, firestore
import google.cloud.firestore
import requests
import Adyen
import json
from flask_cors import CORS


 

app = initialize_app()

@https_fn.on_request(cors=options.CorsOptions(cors_origins="*", cors_methods=["get", "post"]))
def paymentMethods(req: https_fn.Request) -> https_fn.Response:
    adyen = Adyen.Adyen()
    adyen.payment.client.xapikey = "AQEmhmfuXNWTK0Qc+iSDt0kLhueYR55DGbATDOC4Fe74YZ6vdNFGR+sQwV1bDb7kfNy1WIxIIkxgBw==-FbGT9UxZoya3h6hsDdc4q9IAjLN9mbw++oPlv7D7utw=-(bnCGI$[YBB&5h5c"
    adyen.payment.client.platform = "test" 
    
    data = {
    "merchantAccount": "SEMSAccountECOM",
    "countryCode":"PH",
    "amount":{
      "currency":"PHP",
      "value":100
    }
  }
    try:
      res = adyen.checkout.payments_api.payment_methods(data)
      dic = {"data":json.loads(res.raw_response)}
      dic["status"] = "success"
      print(dic)

      return dic
    except Exception as e:
      print(e)
      return {"data":{"resultCode":"Refused","status":"failure"}}

@https_fn.on_request(cors=options.CorsOptions(cors_origins="*", cors_methods=["get", "post"]))
def paymentsDetails(req: https_fn.Request)-> https_fn.Response:
  adyen = Adyen.Adyen()
  adyen.payment.client.xapikey = "AQEmhmfuXNWTK0Qc+iSDt0kLhueYR55DGbATDOC4Fe74YZ6vdNFGR+sQwV1bDb7kfNy1WIxIIkxgBw==-FbGT9UxZoya3h6hsDdc4q9IAjLN9mbw++oPlv7D7utw=-(bnCGI$[YBB&5h5c"
  adyen.payment.client.platform = "test"

  try:
    data = {
      "details": req.get_json()["data"]
    }

    res = adyen.checkout.payments_api.payments_details(data)
    dic = {"data":json.loads(res.raw_response)}
    dic["status"] = "success"
    print(dic)
    return dic
  
  except Exception as e:
    print(e)
    return {"data":{"resultCode":"Refused","status":"failure"}}


@https_fn.on_request(cors=options.CorsOptions(cors_origins="*", cors_methods=["get", "post"]))
def payments(req: https_fn.Request) -> https_fn.Response:
  adyen = Adyen.Adyen()
  adyen.payment.client.xapikey = "AQEmhmfuXNWTK0Qc+iSDt0kLhueYR55DGbATDOC4Fe74YZ6vdNFGR+sQwV1bDb7kfNy1WIxIIkxgBw==-FbGT9UxZoya3h6hsDdc4q9IAjLN9mbw++oPlv7D7utw=-(bnCGI$[YBB&5h5c"
  adyen.payment.client.platform = "test"
  
  try:
    data = req.get_json()
    data = data["data"]
    if data["type"] == "GCash":
      body = {
        "merchantAccount": "SEMSAccountECOM",
        "reference":"2100",
        "shopperReference": "asda",
        "amount":{
          "currency": data["currency"],
          "value":data["value"]
        },
        "paymentMethod": {
              "type": "gcash",
            },
      "returnUrl":"exp://192.168.2.12:8081/--/(booking)/PaymentSuccess"
      }
    else:
      body = {
          "merchantAccount": "SEMSAccountECOM",
          "reference":"2100",
          "shopperReference": "asda",
          "amount":{
            "currency":f"{data['currency']}",
            "value":data['value']
          },
          "paymentMethod": {
                
                "type":"scheme",
                # "encryptedCardNumber": "test_4111111111111111",
                # "encryptedExpiryMonth": f"test_03",
                # "encryptedExpiryYear": f"test_2030",
                # "encryptedSecurityCode": f"test_737"
                
                "type": data["type"],
                "encryptedCardNumber": f"test_{data['cardNumber']}",
                "encryptedExpiryMonth": f"test_{data['expiryDate'][0:2]}",
                "encryptedExpiryYear": f"test_20{data['expiryDate'][2:4]}",
                "encryptedSecurityCode": f"test_{data['securityCode']}"
              },
        "returnUrl":"exp://192.168.2.12:8081/--/(booking)/PaymentSuccess"
        }
    res = adyen.checkout.payments_api.payments(body)
    dic = {"data":json.loads(res.raw_response)}
    dic["status"] = "success"
    
    print(dic)
    return dic
  except Exception as e:
    print(e)
    return {"data":{"resultCode":"Refused","status":"failure"}}