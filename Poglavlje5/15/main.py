from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/")
def pocetna():
    return render_template("pocetna.html", naslov="Почетна страница")


@app.route("/odeljenja", methods=["POST"])
def odeljenja():
    razred = request.form.get("razred")
    odeljenje = request.form.get("odeljenje")

    return render_template(
        "odeljenja.html",
        naslov="Одељења",
        razred=razred,
        odeljenje=odeljenje,
        ucenici=["Ивана Стаменковић", "Јован Петровић", "Растко Јовић"],
    )
