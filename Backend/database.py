from flask import Flask
from flask import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlclient://Xico:xico12345678@host="pduiits.mysql.database.azure.com"/bdtproyecto'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


db = SQLAlchemy(app)
