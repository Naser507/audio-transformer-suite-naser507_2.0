from flask import Flask, render_template

# -----------------------------
# Flask app with updated template and static folder paths
# -----------------------------
app = Flask(
    __name__,
    template_folder="../app/frontend/templates",  # points to frontend templates
    static_folder="../app/frontend/static"        # points to frontend static files
)

# -----------------------------
# Routes
# -----------------------------
@app.route("/")
def home():
    """Render the homepage."""
    return render_template("pages/home.html")

@app.route("/converter")
def converter():
    """Render the converter page."""
    return render_template("pages/converter.html")

@app.route("/analyzer")
def analyzer():
    """Render the analyzer page."""
    return render_template("pages/analyzer.html")

@app.route("/articles")
def articles():
    """Render the articles page."""
    return render_template("pages/articles.html")

# -----------------------------
# App entry point
# -----------------------------
if __name__ == "__main__":
    # Run Flask app on all interfaces, port 5000
    app.run(host="0.0.0.0", port=5000, debug=True)

# -----------------------------
# Notes:
# - template_folder and static_folder paths updated for new structure
# - All pages still use base.html and includes (header/menu/footer)
# - Body content is placeholder, to be filled in Phase 2
# -----------------------------
