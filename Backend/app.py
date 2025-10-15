from flask import Flask, render_template, request, redirect, url_for
import mysql.connector

app = Flask(__name__)

# --- Conexión a tu base de datos MySQL ---
def conectar():
    return mysql.connector.connect(
        host="pduiits.mysql.database.azure.com",
        user="Xico",
        password="xico12345678",
        database="bdtproyecto"
    )

# --- Ruta principal: mostrar todos los departamentos ---
@app.route('/')
def crud_departamentos():
    conn = conectar()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT idDepartamento, nombre_dep FROM departamentos ORDER BY idDepartamento")
    departamentos = cursor.fetchall()
    cursor.close()
    conn.close()
    return render_template('TI/CRUDDep.html', departamentos=departamentos)

# --- Crear un nuevo departamento ---
@app.route('/crear', methods=['POST'])
def crear_departamento():
    id_dep = request.form['id']
    nombre_dep = request.form['nombre']
    conn = conectar()
    cursor = conn.cursor()
    sql = "INSERT INTO departamentos (idDepartamento, nombre_dep) VALUES (%s, %s)"
    cursor.execute(sql, (id_dep, nombre_dep))
    conn.commit()
    cursor.close()
    conn.close()

    return redirect(url_for('crud_departamentos'))

# --- Eliminar un departamento ---
@app.route('/eliminar/<int:id_dep>')
def eliminar_departamento(id_dep):
    conn = conectar()
    cursor = conn.cursor()
    sql = "DELETE FROM departamentos WHERE idDepartamento = %s"
    cursor.execute(sql, (id_dep,))
    conn.commit()
    cursor.close()
    conn.close()

    return redirect(url_for('crud_departamentos'))

@app.route('/PaginaTi')
def PaginaTi():
    return render_template('TI/PaginaTi.html')

if __name__ == '__main__':
    app.run(debug=True)

