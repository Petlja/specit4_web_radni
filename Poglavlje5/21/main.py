from flask import Flask, render_template
from db import mydb

app = Flask(__name__)


@app.route("/korisnici")
def korisnici():
    kursor = mydb.cursor(dictionary=True)
    upit = "SELECT id_korisnika, ime, prezime, korisnicko_ime FROM korisnici"
    korisnici = []

    kursor.execute(upit)
    for korisnik in kursor:
        korisnik["korisnicko_ime"] = korisnik["korisnicko_ime"].upper()
        korisnici.append(korisnik)

    return render_template("korisnici.html", korisnici=korisnici)
