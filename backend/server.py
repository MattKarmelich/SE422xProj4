from flask import Flask, request, jsonify, session, make_response
from pymongo import MongoClient
from datetime import timedelta
from bson.objectid import ObjectId

app = Flask(__name__, static_folder='app', static_url_path="/")

sessions = []

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization,Cookie,category,session')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    response.headers.add('Access-Control-Allow-Credentials', 'true')
    return response

'''
To run the mongo server, just make sure docker is installed and run the following:
First build the image:
docker build -t mongo-dev .
Then
docker run -p 27017:27017 -d -it mongo-dev
'''
# Database configuration
mongo_client = MongoClient('mongodb://localhost:27017/')
db = mongo_client['project4']
users_collection = db['users']
postings_collection = db['postings']

@app.route('/posting', methods=['POST', 'GET'])
def postings():
    if request.method == 'POST':
        # Get the posting data from the request body
        posting_data = request.json

        # Check if the user is logged in
        if posting_data['username'] == "" or posting_data['username'] not in sessions:
            return jsonify({'error': 'User not logged in'}), 401

        # Generate a new ObjectId for the posting
        posting_id = str(ObjectId())

        # Add the posting ID and username to the posting data
        posting_data['_id'] = posting_id

        # Insert the posting data into the database
        postings_collection.insert_one(posting_data)

        # Return a success message
        return jsonify({'message': 'Posting created successfully', 'id': posting_id})

    elif request.method == 'GET':
        # Get all postings from the database
        postings = list(postings_collection.find().limit(100))

        # Return the postings in JSON format
        return jsonify(postings)

@app.route('/posting/category', methods=['GET'])
def postings_by_category():
    category = request.headers.get('Category')
    print(category)

    # Find all postings with the specified category
    postings = list(postings_collection.find({'category': category}))

    # Return the postings in JSON format
    return jsonify(postings)

@app.route('/posting/<id>', methods=['GET'])
def posting_by_id(id):
    # Find the posting with the specified ID
    posting = postings_collection.find_one({'_id': id})

    if posting:
        # Return the posting data in JSON format
        return jsonify(posting)
    else:
        # Return an error message if the posting doesn't exist
        return jsonify({'error': 'Posting not found'}), 404

@app.route('/register', methods=['POST'])
def register():
    # Get username and password from the request body
    username = request.json['username']
    password = request.json['password']

    # Check if the user already exists in the database
    existing_user = users_collection.find_one({'username': username})
    if existing_user:
        # Return an error message if the user already exists
        return jsonify({'error': 'Username already exists'}), 409

    # Insert user data into the database
    users_collection.insert_one({'username': username, 'password': password})

    # Return a success message
    return jsonify({'message': 'User registered successfully'})

@app.route('/login', methods=['POST'])
def login():
    # Get username and password from the request body
    username = request.json['username']
    password = request.json['password']

    # Check if the user exists in the database
    user = users_collection.find_one({'username': username, 'password': password})

    if user:
        # Set the 'username' key in the session to log the user in

        sessions.append(username)

        # Return a success message
        return jsonify({'message': 'User logged in successfully', 'username': username})
    else:
        # Return an error message
        return jsonify({'error': 'Invalid username or password'}), 401

@app.route('/logout', methods=['POST'])
def logout():
    # Remove the 'username' key from the session to log the user out

    if request.json['username'] in sessions:
        sessions.remove(request.json['username'])

    # Return a success message
    return jsonify({'message': 'User logged out successfully'})

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port="5000")
