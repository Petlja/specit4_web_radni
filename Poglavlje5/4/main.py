from flask import Flask

app = Flask(__name__)


@app.route("/")
def pocetna():
    return """
        <html lang="sr">
            <head>
                <title>Почетна страница</title>
            </head>
            <body>
                <h1>Здраво, свете!</h1>
            </body>
        </html>
    """
