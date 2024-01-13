import mysql.connector
from fastapi import FastAPI
from pydantic import BaseModel

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
class Info(BaseModel):
    name: str
    month: int
    day: int 
    time: int
    party: int


#GET - reservations for a day
@app.get('/res_for_day/{month}/{day}')
def res_for_day(month: int, day:int):
    sql = "SELECT * FROM res WHERE date_month = %s AND date_day = %s"
    val = (month, day)
    cursor.execute(sql,val)
    return cursor.fetchall()


#POST - add reservation to database
@app.post('/make/')
def make(info: Info):
    sql = "INSERT INTO res VALUES (%s, %s, %s, %s, %s)"
    val = (info.name, info.month, info.day, info.time, info.party)
    cursor.execute(sql, val)
    db.commit()


#DELETE - delete reservation
@app.delete('/cancel/{month}/{day}/{name}')
def cancel(month: int, day:int, name:str):
    sql = "DELETE FROM res WHERE date_month = %s AND date_day = %s AND name = %s"
    val = (month, day, name)
    cursor.execute(sql,val)
    db.commit()

#PUT - update reservation information (party size, timing)
