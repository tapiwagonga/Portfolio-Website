from flask import Flask, request

app = Flask(__name__)

@app.route('/save-note', methods=['POST'])
def save_note():
    note = request.form.get('note')

    if note:
        file_path = "/Users/tapiwanashegonga/Desktop/personal website/webNotes.pdf"  # Replace with the desired file path

        with open(file_path, 'a') as file:
            file.write(note + '\n')

        return 'Note saved successfully.'
    else:
        return 'Note not provided.'

if __name__ == '__main__':
    app.run()
