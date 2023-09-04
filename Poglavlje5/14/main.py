from flask import Flask, redirect, render_template, request, flash, url_for

app = Flask(__name__)

app.secret_key = "мој-тајни-кључ"


@app.route("/")
def pocetna():
    return render_template("pocetna.html", naslov="Почетна страница")


@app.route("/odeljenja")
def odeljenja():
    greske = False

    razred = request.args.get("razred", type=int)
    odeljenje = request.args.get("odeljenje", type=int)

    if razred < 1 or razred > 4:
        greske = True
        flash("Разред мора бити између 1 и 4", "error")

    if odeljenje < 1 or odeljenje > 8:
        greske = True
        flash("Одељење мора бити између 1 и 8", "error")

    if greske:
        return redirect(url_for("pocetna"))
    else:
        return render_template(
            "odeljenja.html",
            naslov="Одељења",
            razred=razred,
            odeljenje=odeljenje,
            ucenici=["Ивана Стаменковић", "Јован Петровић", "Растко Јовић"],
        )
