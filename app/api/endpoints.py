from flask import Flask, json, g
from app.game.service import Service as Game
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/games", methods=["GET"])
def index():
 return json_response(Game.findAllGames())

@app.route("/playtimesByPrice", methods=["GET"])
def playtimesByPrice():
 return json_response(Game.findPlaytimeByPrice())

@app.route("/genreGameCounts", methods=["GET"])
def findGenreGameCounts():
 return json_response(Game.findGenreGameCounts())

def json_response(payload, status=200):
 return (payload, status, {'content-type': 'application/json'})