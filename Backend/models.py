from flask import Flask
from flask import SQLAlchemy
from database import db


class Departamento(db.Model):
    """
    Modelo que representa la tabla de Departamentos.
    """
    __tablename__ = 'departamentos' # Opcional: para nombrar la tabla explícitamente

    idDepartamento = db.Column(db.Integer, primary_key=True)
    nombre_dep = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return f'<Departamento {self.nombre_dep}>'