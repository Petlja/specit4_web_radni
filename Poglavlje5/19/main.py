from flask import Flask
from db import mydb

app = Flask(__name__)


@app.route("/")
def pocetna():
    return f"""
        <h1>Остварена је конекција ка бази података!</h1>
        <p>{mydb.database}</p>
    """
