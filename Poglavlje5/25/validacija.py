import bcrypt
from flask import flash


def proveri_osnovne_podatke_korisnika(ime, prezime, korisnicko_ime):
    greske = False

    if not ime.isalpha():
        greske = True
        flash("Име не сме бити празно и мора имати алфанумеричке карактере", "error")
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

    return greske


def proveri_podatke_novog_korisnika(ime, prezime, korisnicko_ime, lozinka):
    greske = proveri_osnovne_podatke_korisnika(ime, prezime, korisnicko_ime)

    if len(lozinka) < 4:
        greske = True
        flash("Лозинка не сме бити празна и мора имати најмање 4 карактера", "error")

    return greske


def proveri_podatke_postojeceg_korisnika(
    ime, prezime, korisnicko_ime, stara_lozinka, nova_lozinka, korisnik
):
    greske = proveri_osnovne_podatke_korisnika(ime, prezime, korisnicko_ime)

    if stara_lozinka:
        ispravna_lozinka = bcrypt.checkpw(
            stara_lozinka.encode(), korisnik["lozinka"].encode()
        )
        if not ispravna_lozinka:
            greske = True
            flash("Стара лозинка није исправна", "error")

        if not nova_lozinka or len(nova_lozinka) < 4:
            greske = True
            flash(
                "Нова лозинка не сме бити празна и мора имати најмање 4 карактера",
                "error",
            )

    return greske
