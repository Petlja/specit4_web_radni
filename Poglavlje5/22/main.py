from flask import Flask, render_template, request
from db import mydb

app = Flask(__name__)


@app.route("/pretraga")
def pretraga():
    return render_template("pretraga.html", naslov="Претрага корисника")


@app.route("/korisnici")
def korisnici():
    slovo = request.args.get("slovo")

    kursor = mydb.cursor(dictionary=True)
    upit = (
        "SELECT id_korisnika, ime, prezime, korisnicko_ime "
        "FROM korisnici WHERE substring(ime, 1, 1) = %s"
    )

    kursor.execute(upit, params=[slovo])
    korisnici = kursor.fetchall()

    return render_template("korisnici.html", naslov="Корисници", korisnici=korisnici)
