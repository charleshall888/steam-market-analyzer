from app.repository.connect import connect_tcp_socket
import pandas as pd
class Service(object):
 def findAllGames():
   pool = connect_tcp_socket()
   games = pd.read_sql_query("select * from steam_games.games limit 10", con=pool)
   return games