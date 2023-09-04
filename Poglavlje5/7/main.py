from flask import Flask, render_template

app = Flask(__name__)


@app.route("/ucenici/<odeljenje>")
def pozdrav(odeljenje):
    return render_template(
        "ucenici.html",
        odeljenje=odeljenje,
        ucenici=["Ивана Стаменковић", "Јован Петровић", "Растко Јовић"],
    )
