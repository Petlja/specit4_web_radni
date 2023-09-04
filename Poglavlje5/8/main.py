from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def pocetna():
    return render_template("pocetna.html")


@app.route("/odeljenja")
def odeljenja():
    return render_template(
        "odeljenja.html", razredi=["Први", "Други", "Трећи", "Четврти"]
    )
