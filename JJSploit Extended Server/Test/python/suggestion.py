import requests

def main():
    requests.post("http://localhost:3000/suggestion", json={
        "ownerTeam": "Charlzk05",
        "url": "https://example.com/"
    })

if __name__ == "__main__":
    main()