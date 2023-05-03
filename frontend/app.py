from flask import Flask, render_template

app = Flask(__name__)

# Routes for the website sections
@app.route('/')
def home():
    return render_template('home.html')

@app.route('/for-sale')
def for_sale():
    return render_template('for-sale.html')

@app.route('/housing')
def housing():
    return render_template('housing.html')

@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/jobs')
def jobs():
    return render_template('jobs.html')

@app.route('/community')
def community():
    return render_template('community.html')

if __name__ == '__main__':
    app.run(debug=True)
