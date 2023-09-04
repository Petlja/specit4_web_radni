from flask import Flask

app = Flask(__name__)


@app.route("/pozdrav/<ime>")
def pozdrav(ime):
    return f"<h1>Здраво! Ја сам {ime}.</h1>"
