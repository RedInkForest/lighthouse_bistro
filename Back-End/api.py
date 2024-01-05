import mysql.connector
from fastapi import FastAPI

from dotenv import load_dotenv
load_dotenv()
import os

app = FastAPI()

#SQL Setup
db = mysql.connector.connect(
    host="localhost",
    user= os.getenv('user'),
    password= os.getenv('password'),
    database="Reservations"
)

cursor = db.cursor()

'''
DATABASE SET UP
cursor.execute("CREATE DATABASE Reservations")
cursor.execute("CREATE TABLE res (name VARCHAR(255), date_month INT, date_day INT, time_minutes INT, party_size INT)")


RESERVATION TABLE:
name - Name under the Reservation
date_month - month of reservation
date_day - day of reservation
time_minutes - time of day given in minutes
party_size - party size of reservation

'''


#GET - reservations for a day


#POST - add reservation to database


#DELETE - delete reservation


#PUT - update reservation information (party size, timing)