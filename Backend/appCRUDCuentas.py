from flask import Flask, render_template, request, redirect, url_for
import mysql.connector

appCRUDCuentas = Flask(__name__)

# --- Conexión a tu base de datos MySQL ---
def conectar():
    return mysql.connector.connect(
        host="pduiits.mysql.database.azure.com",
        user="Xico",
        password="xico12345678",
        database="bdtproyecto"
    )

# =====================================================
# 🔹 CRUD DE CUENTAS
# =====================================================

@appCRUDCuentas.route('/CRUDCuentas')
def crud_cuentas():
    conn = conectar()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("""
        SELECT idUsuarios, idRoles, Nombre, Paterno, Materno, idDepartamento
        FROM usuarios
        ORDER BY idUsuarios
    """)
    cuentas = cursor.fetchall()
    cursor.close()
    conn.close()
    return render_template('TI/CRUDCuentas.html', cuentas=cuentas)

@appCRUDCuentas.route('/crear_cuenta', methods=['POST'])
def crear_cuenta():
    matricula = request.form['idUsuarios']
    rol = request.form['idRoles']
    nombre = request.form['Nombre']
    apellido = request.form['Paterno']
    departamento = request.form['idDepartamento']
    correo = request.form['Correo']
    password = request.form['Contraseña']

    conn = conectar()
    cursor = conn.cursor()
    sql = """
        INSERT INTO cuentas (idUsuarios, idRoles, Nombre, Paterno, idDepartamento, Correo, Contraseña)
        VALUES (%s, %s, %s, %s, %s, %s, %s)
    """
    cursor.execute(sql, (matricula, rol, nombre, apellido, departamento, correo, password))
    conn.commit()
    cursor.close()
    conn.close()

    return redirect(url_for('crud_cuentas'))

@appCRUDCuentas.route('/eliminar_cuenta/<matricula>')
def eliminar_cuenta(idUsuarios):
    conn = conectar()
    cursor = conn.cursor()
    sql = "DELETE FROM cuentas WHERE idUsuarios = %s"
    cursor.execute(sql, (idUsuarios,))
    conn.commit()
    cursor.close()
    conn.close()
    return redirect(url_for('crud_cuentas'))

#----------------------------------------------------
@appCRUDCuentas.route('/PaginaTi')
def PaginaTi():
    return render_template('TI/PaginaTi.html')

if __name__ == '__main__':
    appCRUDCuentas.run(debug=True)