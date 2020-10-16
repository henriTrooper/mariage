import base64
import jwt
import json
import os
authorization = os.environ.get("AUTHORIZATION")
name = os.environ.get("NAME")
email = os.environ.get("EMAIL")
expireIn = os.environ.get("EXPIREIN")
secret = os.environ.get("SECRET")
""" Encoding/Decoding pasword base64 """
def encoding(value=None):
    encoding = base64.b64encode(value.encode('utf-8')).decode('utf-8')
    return encoding

def decoding(value=None):
    decoding = base64.b64decode(value.encode('utf-8')).decode('utf-8')
    return decoding

""" Encoding/Decoding pasword JWT """
def encodingJWT(value=None):
    jwtencod = jwt.encode(value, 'henriJWT', algorithm='HS256')
    return jwtencod

def decodingJWT(value=None):
   jwtendeco = jwt.decode(value, 'henriJWT', algorithms=['HS256'])
   return jwtendeco


if __name__ == '__main__':
    import fire
    """ print(encoding('<login>'))
    print(encoding('<password>'))"""
    e = jwt.encode({"authorization": authorization, "name": name, "email": email, 'exp': int(expireIn)}, secret)
    print(e)
    try:
        jwt.decode(e, 'henriJWT', algorithms=['HS256'])
    except jwt.ExpiredSignatureError:
        print('expiration')