from flask import Flask, render_template

app = Flask(__name__)


@app.route("/pozdrav/<ime>")
def pozdrav(ime):
    return render_template("pozdrav.html", ime=ime)
