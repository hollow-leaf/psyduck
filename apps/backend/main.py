from flask import Flask, request
from flask_cors import CORS
from blockchain.blockchain import *

load_dotenv()
SQLALCHEMY_DATABASE_URI = os.getenv("SQLALCHEMY_DATABASE_URI")

app = Flask(__name__)
app.config.from_object('websiteconfig')
app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI
CORS(app)

db.init_app(app)

with app.app_context():
    db.create_all()


@app.route('/')
def index():
    return ""

@app.route('/nftc', methods=['POST'])
def getNftC():
    userId = request.form.get('userId')
    print(userId)
    user = User.query.filter_by(userId=userId).all()[0]
    nfts = getNftCByEventId(user.event_id)
    print(nfts)
    return {'data':nfts}

@app.route('/nfto', methods=['POST'])
def getNftO():
    print(request.get_json())
    address = request.form.get('address')
    nfts = getNftOByAddress(address)

    print(nfts)
    return {'data':nfts}

@app.route('/update')
def updatedata():

    update_opbnb()

    return ""


if __name__ == '__main__':
    app.debug = True
    app.run()