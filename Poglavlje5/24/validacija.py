from flask import flash


def proveri_podatke_korisnika(ime, prezime, korisnicko_ime, lozinka):
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
    if len(lozinka) < 4:
        greske = True
        flash("Лозинка не сме бити празна и мора имати најмање 4 карактера", "error")

    return greske
