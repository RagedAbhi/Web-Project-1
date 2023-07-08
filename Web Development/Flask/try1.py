from flask import Flask, request
from flask_restful import Resource, Api
from gradient import *
import pickle

pickle.dump(gradient_descent, open('model.pkl', 'wb'))

app = Flask(__name__)
api = Api(app)

class MyModel(Resource):
    def __init__(self):
        self.model = pickle.load('model.pkl')

    def post(self):
        data = request.get_json(force=True)
        prediction = self.model.predict(data)
        return {'prediction': prediction.tolist()}

api.add_resource(MyModel, '/predict')

if __name__ == '__main__':
    app.run(debug=True)
