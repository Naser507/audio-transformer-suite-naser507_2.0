from flask import Flask, render_template
import os



# app = Flask(__name__, template_folder="../app/frontend/templates", static_folder="../app/frontend/static")





template_dir = os.path.join(os.getcwd(), "frontend/templates")
static_dir = os.path.join(os.getcwd(), "frontend/static")

app = Flask(__name__, template_folder=template_dir, static_folder=static_dir)



# ---------- Routes ----------
@app.route('/')
def home():
    return render_template('pages/home.html')

@app.route('/analyzer')
def analyzer():
    return render_template('pages/analyzer.html')

@app.route('/converter')
def converter():
    return render_template('pages/converter.html')

@app.route('/articles')
def articles():
    return render_template('pages/articles.html')
@app.route('/foundations')
def foundations():
    return render_template('pages/foundations.html')

@app.route('/vision')
def vision():
    return render_template('pages/vision.html')

# ---------- Run ----------
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
