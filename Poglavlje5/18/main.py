from flask import (
    Flask,
    make_response,
    redirect,
    render_template,
    request,
    flash,
    url_for,
    session,
)

app = Flask(__name__)

app.secret_key = "мој-тајни-кључ"


@app.route("/")
def pocetna():
    korisnicko_ime = session.get("korisnicko_ime")

    return render_template(
        "pocetna.html",
        naslov="Почетна страница",
        korisnicko_ime=korisnicko_ime,
    )


@app.route("/prijava", methods=["GET", "POST"])
def prijava():
    if request.method == "GET":
        korisnicko_ime = session.get("korisnicko_ime")
        return render_template(
            "prijava.html",
            naslov="Пријављивање на систем",
            korisnicko_ime=korisnicko_ime,
        )
    else:
        korisnicko_ime = request.form.get("korisnicko_ime")
        lozinka = request.form.get("lozinka")

        if korisnicko_ime == "" or lozinka == "":
            flash("Корисничко име и лозинка не смеју бити празни", category="error")
            return redirect(url_for("prijava"))

        flash("Успешно сте се пријавили на систем!", category="success")

        session["korisnicko_ime"] = korisnicko_ime
        return redirect(url_for("pocetna"))


@app.route("/odjava")
def odjava():
    session.pop("korisnicko_ime")
    return redirect(url_for("pocetna"))
