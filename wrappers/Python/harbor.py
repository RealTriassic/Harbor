import os
import urllib.request

def main():
    url = "https://raw.githubusercontent.com/RealTriassic/Harbor/main/harbor.sh"
    destination = "harbor.sh"

    try:
        # Download the script file
        urllib.request.urlretrieve(url, destination)

        # Set executable permission on the downloaded file
        os.chmod(destination, 0o755)

        # Run the downloaded file
        os.system(f"sh {destination}")
    except Exception as e:
        print(f"Error downloading or running script: {e}")

if __name__ == "__main__":
    main()