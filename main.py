from __future__ import absolute_import, print_function
from app.api.service import Service as Game
from flask_cors import CORS
from flask import Flask

app = Flask(__name__)
CORS(app)

@app.route("/api/games", methods=["GET"])
def index():
 return json_response(Game.findAllGames())

@app.route("/api/playtimesByPrice", methods=["GET"])
def playtimesByPrice():
 return json_response(Game.findPlaytimeByPrice())

@app.route("/api/genreGameCounts", methods=["GET"])
def findGenreGameCounts():
 return json_response(Game.findGenreGameCounts())

def json_response(payload, status=200):
 return (payload, status, {'content-type': 'application/json'})


if __name__ == '__main__':
    # This is used when running locally only. When deploying to Google App
    # Engine, a webserver process such as Gunicorn will serve the app. This
    # can be configured by adding an `entrypoint` to app.yaml.
    # Flask's development server will automatically serve static files in
    # the "static" directory. See:
    # http://flask.pocoo.org/docs/1.0/quickstart/#static-files. Once deployed,
    # App Engine itself will serve those files as configured in app.yaml.
    app.run(host='127.0.0.1', port=8080, debug=True)