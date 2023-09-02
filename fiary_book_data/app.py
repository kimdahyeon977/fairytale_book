from flask import Flask,render_template, request
import fiary_book_data.config as config
from flask_cors import CORS
import openai
import re

app = Flask(__name__)
CORS(app)
app.config.from_object(config.config['development'])
openai.api_key = app.config['OPENAI_KEY']

def whisper(path):
    audio_file= open(path, "rb")
    transcript = openai.Audio.translate("whisper-1", audio_file)
    return transcript


def chatcompletion(query):
    output = openai.ChatCompletion.create(
    model="gpt-3.5-turbo-0301",
    temperature=0.2,
    presence_penalty=0.2,
    frequency_penalty=0.2,
    messages = [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": query}
    ]
  )

    return output['choices'][0]['message']['content']


def gan(prompt):
    response = openai.Image.create(prompt = prompt, n=1, size='1024x1024')
    return response['data']

@app.route('/app',methods=['GET','POST'])
def text():
    if request.method=='POST':
        images=[]
        data = request.get_json()
        name = data.get('name')
        prompt = data.get('sentence')
        if re.compile(r'[a-zA-Z]'):
            prompt = chatcompletion(prompt + '를 영어로 번역해줘')        
        res= gan(f'{name} is {prompt} in a fairy tale book')
        
        if len(res)>0:
            for img in res:
                images.append(img['url'])
    return render_template('home.html', **locals()
                           )

@app.route('/audio',methods=['GET','POST'])
def audio():
    if request.method=='POST':
        images=[]
        reg = re.compile(r'[a-zA-Z]')
        path = request.form['path']
        prompt = whisper(path)
        cnt=0
        total = ''
        for i in prompt.split('.'):
            cnt+=1
            total += i
            if cnt==2:
                prompt = chatcompletion(total+'를 영어로 번역해줘') if reg.match(total) else total
                res= gan(prompt+'in a fairy tale book')
                if len(res)>0:
                    for img in res:
                        images.append(img['url'])
                cnt=0
                total = ''
                continue
    return render_template('home.html', **locals()
                           )

    
if __name__ == '__main__':
    app.run(host = '0.0.0.0', port='8000', debug=True)