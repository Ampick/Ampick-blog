import os, json, requests
import xml.etree.ElementTree as ET
from google.oauth2 import service_account
from google.auth.transport.requests import AuthorizedSession

# GitHub Secrets से API Key लोड करना
key = json.loads(os.environ['GOOGLE_API_KEY'])
credentials = service_account.Credentials.from_service_account_info(key, scopes=['https://www.googleapis.com/auth/indexing'])
session = AuthorizedSession(credentials)

# साइटमैप से नए लिंक्स निकालना
response = requests.get("https://www.ampick.xyz/sitemap-0.xml")
root = ET.fromstring(response.content)
urls = [elem.text for elem in root.iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]

# Google को इंडेक्सिंग के लिए पिंग (Ping) भेजना (शुरुआती 5 लिंक)
for url in urls[:5]:
    resp = session.post('https://indexing.googleapis.com/v3/urlNotifications:publish', json={'url': url, 'type': 'URL_UPDATED'})
    print(f'Sent {url} to Google: Status Code {resp.status_code}')
