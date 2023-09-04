from flask import Flask, redirect, render_template, request, url_for
from db import unesi_novog_korisnika, dohvati_sve_korisnike
from validacija import proveri_podatke_korisnika

app = Flask(__name__)

app.secret_key = b"\xcaO\xeb\xf3\xac\\c\x11_x\xb6\x07\nsu\xef\xe2\x98~\xfe\x08Y~h"


@app.route("/korisnici/novi", methods=["GET", "POST"])
def novi_korisnik():
    if request.method == "GET":
        return render_template("novi_korisnik.html", naslov="Креирање корисника")
    else:
        ime = request.form.get("ime", "")
        prezime = request.form.get("prezime", "")
        korisnicko_ime = request.form.get("korisnicko_ime", "")
        lozinka = request.form.get("lozinka", "")

        greske = proveri_podatke_korisnika(ime, prezime, korisnicko_ime, lozinka)
        if greske:
            return redirect(url_for("novi_korisnik"))

        unesi_novog_korisnika(ime, prezime, korisnicko_ime, lozinka)

        return redirect(url_for("korisnici"))


@app.route("/korisnici")
def korisnici():
    korisnici = dohvati_sve_korisnike()

    return render_template("korisnici.html", naslov="Корисници", korisnici=korisnici)
