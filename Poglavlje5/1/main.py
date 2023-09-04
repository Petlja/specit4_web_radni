from flask import Flask

app = Flask(__name__)


@app.route("/")
def zdravo_svete():
    return "<h1>Здраво, свете!</h1>"
