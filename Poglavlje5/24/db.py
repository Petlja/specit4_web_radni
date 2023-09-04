import mysql.connector
import bcrypt
from flask import flash

mydb = mysql.connector.connect(
    host="localhost", user="root", password="", database="mysql_vezbanje"
)


def dohvati_sve_korisnike():
    kursor = mydb.cursor(dictionary=True)
    upit = "SELECT id_korisnika, ime, prezime, korisnicko_ime FROM korisnici"

    kursor.execute(upit)
    korisnici = kursor.fetchall()

    return korisnici


def unesi_novog_korisnika(ime, prezime, korisnicko_ime, lozinka):
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
