from flask import Flask, flash, redirect, render_template, request, url_for
from db import mydb
import bcrypt

app = Flask(__name__)

app.secret_key = b"\xcaO\xeb\xf3\xac\\c\x11_x\xb6\x07\nsu\xef\xe2\x98~\xfe\x08Y~h"


@app.route("/korisnici/novi", methods=["GET", "POST"])
def novi_korisnik():
    if request.method == "GET":
        return render_template("novi_korisnik.html", naslov="Креирање корисника")
    else:
        greske = False

        ime = request.form.get("ime", "")
        prezime = request.form.get("prezime", "")
        korisnicko_ime = request.form.get("korisnicko_ime", "")
        lozinka = request.form.get("lozinka", "")

        if not ime.isalpha():
            greske = True
            flash(
                "Име не сме бити празно и мора имати алфанумеричке карактере", "error"
            )
        if not prezime.isalpha():
            greske = True
            flash(
                "Презиме не сме бити празно и мора имати алфанумеричке карактере",
                "error",
            )
        if not korisnicko_ime.isalpha():
            greske = True
            flash(
                "Корисничко име не сме бити празно и мора имати алфанумеричке карактере",
                "error",
            )
        if len(lozinka) < 4:
            greske = True
            flash(
                "Лозинка не сме бити празна и мора имати најмање 4 карактера", "error"
            )

        if greske:
            return redirect(url_for("novi_korisnik"))

        sifrovana_lozinka = bcrypt.hashpw(lozinka.encode(), bcrypt.gensalt())

        kursor = mydb.cursor()
        sql = (
            "INSERT INTO korisnici (ime, prezime, korisnicko_ime, lozinka) "
            "VALUES (%(ime)s, %(prezime)s, %(korisnicko_ime)s, %(lozinka)s)"
        )

        kursor.execute(
            sql,
            params={
                "ime": ime,
                "prezime": prezime,
                "korisnicko_ime": korisnicko_ime,
                "lozinka": sifrovana_lozinka,
            },
        )

        mydb.commit()

        flash(
            f"Број успешно унетих редова: {kursor.rowcount}. Идентификатор унетог реда: {kursor.lastrowid}",
            "success",
        )
        return redirect(url_for("korisnici"))


@app.route("/korisnici")
def korisnici():
    kursor = mydb.cursor(dictionary=True)
    upit = "SELECT id_korisnika, ime, prezime, korisnicko_ime FROM korisnici"

    kursor.execute(upit)
    korisnici = kursor.fetchall()

    return render_template("korisnici.html", naslov="Корисници", korisnici=korisnici)
