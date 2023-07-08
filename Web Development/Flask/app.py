from flask import Flask

# Creates WSGI Application
app=Flask(__name__)

@app.route('/')     #Decorator
def welcome():
    return "Welcome to my first flask program. Hope you Enjoy"

@app.route('/members')     #Decorator
def members():
    return "This is members page"

@app.route('/sponsors')     #Decorator
def sponsors():
    return "This is sponsors page"



if __name__=='__main__':
    app.run(debug=True)