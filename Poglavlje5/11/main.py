from flask import Flask, render_template, url_for, redirect

app = Flask(__name__)


@app.route("/")
def pocetna():
    return render_template("pocetna.html")


@app.route("/stara-pocetna")
def stara_pocetna():
    return redirect(url_for("pocetna"))
