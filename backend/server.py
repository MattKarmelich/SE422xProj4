from flask import Flask, request, jsonify
import mysql.connector

app = Flask(__name__)

# Database configuration
db_config = {
  'user': 'root',
  'password': 'password',
  'host': 'localhost',
  'database': 'project4'
}

# Create a connection to the database
db_conn = mysql.connector.connect(**db_config)

# Create a cursor object to execute SQL queries
db_cursor = db_conn.cursor()

# Create a users table if it doesn't exist
db_cursor.execute("""
    CREATE TABLE IF NOT EXISTS users (
        id INT(11) NOT NULL AUTO_INCREMENT,
        username VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        PRIMARY KEY (id)
    )
""")

db_cursor.execute("""
    CREATE TABLE IF NOT EXISTS items (
        id INT(11) NOT NULL AUTO_INCREMENT,
        category VARCHAR(255) NOT NULL,
        subcategory VARCHAR(255) NOT NULL,
        location VARCHAR(255) NOT NULL,
        price VARCHAR(255) NOT NULL,
        contact VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        detail1 VARCHAR(255) NOT NULL,
        detail2 VARCHAR(255) NOT NULL,
        detail3 VARCHAR(255) NOT NULL,
        detail4 VARCHAR(255) NOT NULL,
        PRIMARY KEY (id)
    )
""")

# Commit changes to the database
db_conn.commit()

@app.route('/register', methods=['POST'])
def register():
    # Get username and password from the request body
    username = request.json['username']
    password = request.json['password']

    # Insert user data into the database
    db_cursor.execute("""
        INSERT INTO users (username, password)
        VALUES (%s, %s)
    """, (username, password))

    # Commit changes to the database
    db_conn.commit()

    # Return a success message
    return jsonify({'message': 'User registered successfully'})

@app.route('/login', methods=['POST'])
def login():
    # Get username and password from the request body
    username = request.json['username']
    password = request.json['password']

    # Check if the user exists in the database
    db_cursor.execute("""
        SELECT * FROM users WHERE username = %s AND password = %s
    """, (username, password))

    # Get the first row from the result set
    user = db_cursor.fetchone()

    if user:
        # Return a success message
        return jsonify({'message': 'User logged in successfully'})
    else:
        # Return an error message
        return jsonify({'error': 'Invalid username or password'}), 401

if __name__ == '__main__':
    app.run(debug=True)
