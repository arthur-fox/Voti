# Requirements
- Python
- pip
- openssl

# Running
1. Install dependencies: `pip install -r requirements.txt`
1. Remove the `.example` from `settings.py.example`, so it is `settings.py`, and fill in the values with your application created on https://www.yoti.com/dashboard
1. Run setup: `python setup.py develop`
1. Create SSL cert `openssl req -x509 -newkey rsa:4096 -nodes -out cert.pem -keyout key.pem -days 365`
1. Run app: `python app.py`