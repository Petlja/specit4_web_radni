from flask import Flask, redirect, render_template, request, flash, url_for

app = Flask(__name__)

app.secret_key = "мој-тајни-кључ"


@app.route("/")
def pocetna():
    return render_template("pocetna.html", naslov="Почетна страница")


@app.route("/prijava", methods=["GET", "POST"])
def prijava():
    if request.method == "GET":
        return render_template("prijava.html", naslov="Пријављивање на систем")
    else:
        korisnicko_ime = request.form.get("korisnicko_ime")
        lozinka = request.form.get("lozinka")

        if korisnicko_ime == "" or lozinka == "":
            flash("Корисничко име и лозинка не смеју бити празни", category="error")
            return redirect(url_for("prijava"))

        flash("Успешно сте се пријавили на систем!", category="success")
        return redirect(url_for("pocetna"))
