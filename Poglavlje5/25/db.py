import mysql.connector
import bcrypt
from flask import flash

mydb = mysql.connector.connect(
    host="localhost", user="root", password="", database="mysql_vezbanje"
)


def dohvati_korisnika(id_korisnika):
    kursor = mydb.cursor(dictionary=True)
    upit = (
        "SELECT id_korisnika, ime, prezime, korisnicko_ime, lozinka "
        "FROM korisnici WHERE id_korisnika = %s"
    )

    kursor.execute(upit, params=[id_korisnika])
    korisnik = kursor.fetchone()

    return korisnik


def izmeni_postojeceg_korisnika(
    id_korisnika, ime, prezime, korisnicko_ime, nova_lozinka
):
    kursor = mydb.cursor()

    if nova_lozinka:
        sql = (
            "UPDATE korisnici SET ime = %(ime)s, prezime = %(prezime)s, "
            "korisnicko_ime = %(korisnicko_ime)s, lozinka = %(lozinka)s "
            "WHERE id_korisnika = %(id_korisnika)s"
        )

        sifrovana_lozinka = bcrypt.hashpw(nova_lozinka.encode(), bcrypt.gensalt())

        kursor.execute(
            sql,
            params={
                "id_korisnika": id_korisnika,
                "ime": ime,
                "prezime": prezime,
                "korisnicko_ime": korisnicko_ime,
                "lozinka": sifrovana_lozinka,
            },
        )
    else:
        sql = (
            "UPDATE korisnici SET ime = %(ime)s, prezime = %(prezime)s, "
            "korisnicko_ime = %(korisnicko_ime)s "
            "WHERE id_korisnika = %(id_korisnika)s"
        )

        kursor.execute(
            sql,
            params={
                "id_korisnika": id_korisnika,
                "ime": ime,
                "prezime": prezime,
                "korisnicko_ime": korisnicko_ime,
            },
        )

    mydb.commit()

    flash(
        f"Број успешно измењених редова: {kursor.rowcount}.",
        "success",
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
