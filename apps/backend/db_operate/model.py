from extension import db

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    address = db.Column(db.String(50), unique=True, nullable=False)
    #game Id
    userId = db.Column(db.String(50), nullable=True)
    event_id = db.Column(db.Integer, unique=True)
    create_list = db.relationship('CreateList', backref='user', lazy='dynamic')
    owner_list = db.relationship('OwnerList', backref='user', lazy='dynamic')
    isStreamer = db.Column(db.Integer)

class CreateList(db.Model):
    __tablename__ = 'createlist'
    id = db.Column(db.Integer, primary_key=True)
    eventId = db.Column(db.Integer, db.ForeignKey('user.event_id'))
    nfts = db.relationship('NFTC', backref='createlist', lazy='dynamic')


class OwnerList(db.Model):
    __tablename__ = 'ownerlist'
    id = db.Column(db.Integer, primary_key=True)
    owner = db.Column(db.String(50), db.ForeignKey('user.address'))
    nfts = db.relationship('NFTO', backref='ownerlist', lazy='dynamic')

class NFTC(db.Model):
    __tablename__ = 'nftc'
    id = db.Column(db.Integer, primary_key=True)
    eventId = db.Column(db.Integer, db.ForeignKey('createlist.eventId'))
    creator = db.Column(db.String(50), nullable=False)
    nft_id = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Integer, nullable=False)
    name = db.Column(db.String(50), nullable=False)
    maxSupply = db.Column(db.Integer, nullable=False)

class NFTO(db.Model):
    __tablename__ = 'nfto'
    id = db.Column(db.Integer, primary_key=True)
    owner = db.Column(db.String(50), db.ForeignKey('ownerlist.owner'))
    nft_id = db.Column(db.Integer, nullable=False)
    name = db.Column(db.String(50), nullable=False)
    creator = db.Column(db.String(50), nullable=False)