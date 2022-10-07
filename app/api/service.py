from app.api.connect import connect_unix_socket
import json
import collections
class Service(object):
  def findAllGames():
    pool = connect_unix_socket()
    conn = pool.connect()
    cur = conn.connection.cursor()
    cur.execute("select * from games limit 100")
    rows = cur.fetchall()
    # Convert query to objects of key-value pairs
    objects_list = []
    for row in rows:
        d = collections.OrderedDict()
        d["appid"] = row[0]
        d["name"] = row[1]
        d["release_date"] = row[2].strftime('%d/%m/%Y')
        d["english"] = row[3]
        d["developer"] = row[4]
        d["publisher"] = row[5]
        d["platforms"] = row[6]
        d["required_age"] = row[7]
        d["categories"] = row[8]
        d["genres"] = row[9]
        d["steamspy_tags"] = row[10]
        d["achievements"] = row[11]
        d["positive_ratings"] = row[12]
        d["negative_ratings"] = row[13]
        d["average_playtime"] = row[14]
        d["median_playtime"] = row[15]
        d["owners"] = row[16]
        d["price"] = str(row[17])
        objects_list.append(d)
    return json.dumps(objects_list)

  def findPlaytimeByPrice():
    pool = connect_unix_socket()
    conn = pool.connect()
    cur = conn.connection.cursor()
    cur.execute("select CONCAT('$',price), ROUND(AVG(average_playtime)) from games WHERE average_playtime < 40000 GROUP BY price ORDER BY price asc;")
    rows = cur.fetchall()
    prices = []
    playtimes = []
    for row in rows:
        prices.append(row[0])
        playtimes.append(int(row[1]))
    return {'prices': prices, 'playtimes': playtimes}


  def findGenreGameCounts():
    pool = connect_unix_socket()
    conn = pool.connect()
    cur = conn.connection.cursor()
    cur.execute("SELECT (SELECT COUNT(*) AS action FROM games WHERE genres LIKE '%Action%') AS action, (SELECT COUNT(*) AS adventure FROM games WHERE genres LIKE '%Adventure%') AS adventure, (SELECT COUNT(*) AS strategy FROM games WHERE genres LIKE '%Strategy%') AS strategy, (SELECT COUNT(*) AS rpg FROM games WHERE genres LIKE '%RPG%') AS rpg, (SELECT COUNT(*) AS casual FROM games WHERE genres LIKE '%Casual%') AS casual, (SELECT COUNT(*) AS simulation FROM games WHERE genres LIKE '%Simulation%') AS simulation")
    rows = cur.fetchall()
    row = rows[0]
    return {'genreCounts': row}


