from flask import Flask

app = Flask(__name__)


@app.route("/")
def pocetna():
    return """<h1>Почетна страница</h1>"""


@app.route("/o-nama")
def o_nama():
    return """<h1>О нама</h1>"""
