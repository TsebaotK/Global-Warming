# dependences
from flask import Flask, render_template, jsonify
import pandas as pd
from sqlalchemy import create_engine


# this has the web server + everything
app = Flask(__name__)


# create a home route
@app.route("/")

# creating a function for our home route
def usa_temps():
    return render_template('index.html')


# # create another route
@app.route("/emissionsroute")

# creating a function for another route
def emissionsroute():
    engine = create_engine("sqlite:///data/climate_data2.sqlite")
    conn = engine.connect()
    climate_data = pd.read_sql("SELECT * FROM emissions", conn)
    data = climate_data.to_dict(orient="records")
    engine.dispose()
    return jsonify(data)

# # create another route
@app.route("/tempsroute")

# creating a function for another route
def tempsroute():
    engine = create_engine("sqlite:///data/climate_data2.sqlite")
    conn = engine.connect()
    climate_data = pd.read_sql("SELECT * FROM temps", conn)
    data = climate_data.to_dict(orient="records")
    engine.dispose()
    return jsonify(data)

# # create another route
@app.route("/usemissionsroute")

# creating a function for another route
def us_emissions_route():
    engine = create_engine("sqlite:///data/climate_data2.sqlite")
    conn = engine.connect()
    climate_data = pd.read_sql("SELECT * FROM usemissions", conn)
    data = climate_data.to_dict(orient="records")
    engine.dispose()
    return jsonify(data)


@app.route("/heatmapdata")

def heatmapdata():
    with open("data/mapdata.geojson", 'r') as file:
        return jsonify(file.read())


# running it from a script
if __name__ == '__main__':

 # run our app
    app.run(debug=True)